import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import { trackEvent } from "../utils/googleAnalytics";

function Contact() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<boolean>(false);
    const [emailFormatError, setEmailFormatError] = useState<boolean>(false);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isFading, setIsFading] = useState(false);

    const form = useRef();

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const sendEmail = async (e: any) => {
        e.preventDefault();

        setSuccessMessage("");
        setErrorMessage("");

        const nameIsEmpty = name.trim() === "";
        const emailIsEmpty = email.trim() === "";
        const emailIsInvalid = !emailIsEmpty && !validateEmail(email);
        const messageIsEmpty = message.trim() === "";

        setNameError(nameIsEmpty);
        setEmailError(emailIsEmpty);
        setEmailFormatError(emailIsInvalid);
        setMessageError(messageIsEmpty);

        if (nameIsEmpty || emailIsEmpty || emailIsInvalid || messageIsEmpty) {
            return;
        }

        if (
            !process.env.REACT_APP_EMAILJS_SERVICE_ID ||
            !process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
            !process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        ) {
            setErrorMessage("Email configuration is missing.");
            return;
        }

        const templateParams = {
            name,
            email,
            message,
        };

        try {
            setIsSending(true);

            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
            );

            trackEvent("contact", "form_submit", "portfolio_contact_form");

            setSuccessMessage(
                "Thank you for reaching out. I have received your message and will respond as soon as possible.",
            );

            setTimeout(() => {
                setIsFading(true);

                setTimeout(() => {
                    setSuccessMessage("");
                    setIsFading(false);
                }, 500);
            }, 4500);

            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error(error);

            trackEvent("contact", "form_error", "email_send_failed");

            setErrorMessage(
                "Sorry, something went wrong. Please try again later.",
            );

            setTimeout(() => {
                setIsFading(true);
                setTimeout(() => {
                    setErrorMessage("");
                    setIsFading(false);
                }, 500);
            }, 4500);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div id="contact">
            <div className="items-container">
                <div className="contact_wrapper">
                    <h1>Contact Me</h1>
                    <p>
                        Got a project waiting to be realized? Let's collaborate
                        and make it happen!
                    </p>
                    <Box
                        ref={form}
                        component="form"
                        noValidate
                        autoComplete="off"
                        className="contact-form">
                        <div className="form-flex">
                            <div>
                                <label>Your Name</label>

                                <input
                                    type="text"
                                    placeholder="What's your name?"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={nameError ? "input-error" : ""}
                                />

                                {nameError && (
                                    <small className="error-text">
                                        Please enter your name
                                    </small>
                                )}
                            </div>

                            <div>
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={emailError ? "input-error" : ""}
                                />

                                {emailError && (
                                    <small className="error-text">
                                        Please enter your email or phone
                                    </small>
                                )}
                                {emailFormatError && (
                                    <small className="error-text">
                                        Please enter a valid email address
                                    </small>
                                )}
                            </div>
                        </div>
                        <div>
                            <label>Message</label>

                            <textarea
                                rows={10}
                                maxLength={500}
                                placeholder="Send me any inquiries or questions"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className={messageError ? "input-error" : ""}
                            />
                            <div className="character-counter">
                                {message.length}/500 characters
                            </div>
                            {messageError && (
                                <small className="error-text">
                                    Please enter your message
                                </small>
                            )}
                        </div>

                        {successMessage && (
                            <p
                                className={`success-message ${isFading ? "fade-out" : ""}`}>
                                {successMessage}
                            </p>
                        )}

                        {errorMessage && (
                            <p
                                className={`error-message ${isFading ? "fade-out" : ""}`}>
                                {errorMessage}
                            </p>
                        )}
                        <Button
                            className="send-button"
                            variant="contained"
                            onClick={sendEmail}
                            disabled={isSending}>
                            {isSending ? (
                                <>
                                    <CircularProgress
                                        size={18}
                                        sx={{
                                            color: "white",
                                            marginRight: "8px",
                                        }}
                                    />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send <SendIcon />
                                </>
                            )}
                        </Button>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Contact;
