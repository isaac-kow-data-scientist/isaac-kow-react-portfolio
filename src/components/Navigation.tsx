import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ListIcon from "@mui/icons-material/List";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import { useEffect, useState } from "react";
import { trackCTA } from "../utils/analytics";

const drawerWidth = 240;
const navItems = [
    ["Expertise", "expertise"],
    ["Experience", "history"],
    ["Projects", "projects"],
    ["Dashboards", "dashboard-gallery"],
    ["Certifications", "certifications"],
    ["Resources", "portfolio-resources"],
    ["Contact", "contact"],
];

function Navigation({ parentToChild, modeChange }: any) {
    const { mode } = parentToChild;

    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById("navigation");
            if (navbar) {
                const scrolled = window.scrollY > navbar.clientHeight;
                setScrolled(scrolled);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const scrollToSection = (section: string) => {
        console.log(section);
        const expertiseElement = document.getElementById(section);
        if (expertiseElement) {
            expertiseElement.scrollIntoView({ behavior: "smooth" });
            console.log("Scrolling to:", expertiseElement); // Debugging: Ensure the element is found
        } else {
            console.error('Element with id "expertise" not found'); // Debugging: Log error if element is not found
        }
    };

    const drawer = (
        <Box
            className="navigation-bar-responsive"
            onClick={handleDrawerToggle}
            sx={{ textAlign: "center" }}>
            <p className="mobile-menu-top">
                <ListIcon />
                Menu
            </p>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item[0]} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: "center" }}
                            onClick={() => scrollToSection(item[1])}>
                            <ListItemText primary={item[0]} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                component="nav"
                id="navigation"
                className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}>
                <Toolbar className="navigation-bar">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}>
                        <MenuIcon />
                    </IconButton>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                        }}>
                        <h3
                            className="logo-text"
                            onClick={() =>
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                })
                            }>
                            ISAAC{" "}
                            <span className="logo-accent">KOW MENSAH</span>
                        </h3>
                        {/* <h3 className="logo-text">
                            ISAAC{" "}
                            <span className="logo-accent">KOW MENSAH</span>
                        </h3> */}
                        {mode === "dark" ? (
                            <LightModeIcon
                                onClick={() => modeChange()}
                                sx={{ cursor: "pointer" }}
                            />
                        ) : (
                            <DarkModeIcon
                                onClick={() => modeChange()}
                                sx={{ cursor: "pointer" }}
                            />
                        )}
                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item[0]}
                                onClick={() => scrollToSection(item[1])}
                                sx={{
                                    color:
                                        mode === "dark" ? "white" : "#0d1116",
                                    borderRadius: "8px",
                                    px: 2,
                                    transition: "all 0.3s ease",

                                    "&:hover": {
                                        backgroundColor:
                                            "rgba(80, 0, 202, 0.1)",
                                        color: "#5000ca",
                                    },
                                }}>
                                {item[0]}
                            </Button>
                        ))}
                        <Button
                            href="/documents/sample_cv.jpg"
                            target="_blank"
                            onClick={() => trackCTA("navbar_resume")}
                            sx={{
                                ml: 2,
                                px: 2,
                                py: 0.7,
                                borderRadius: "8px",
                                border:
                                    mode === "dark"
                                        ? "1px solid white"
                                        : "1px solid #0d1116",
                                color: mode === "dark" ? "white" : "#0d1116",
                                textTransform: "none",
                            }}>
                            Resume
                        </Button>
                        {/* <Button
                            href="../assets/files/Isaac_Kow_Mensah_CV.pdf"
                            target="_blank"
                            sx={{
                                ml: 2,
                                border: "1px solid white",
                                color: "white",
                            }}>
                            Resume
                        </Button> */}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}>
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

export default Navigation;
