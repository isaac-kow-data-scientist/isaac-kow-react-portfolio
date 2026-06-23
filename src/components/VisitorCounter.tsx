import { useEffect, useState } from "react";

function VisitorCounter() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const STORAGE_KEY = "portfolio_unique_visitor";

        // check if user has visited before
        const hasVisited = localStorage.getItem(STORAGE_KEY);

        let currentCount = Number(localStorage.getItem("visitor_count")) || 0;

        if (!hasVisited) {
            // first time visit → increment
            currentCount += 1;
            localStorage.setItem("visitor_count", String(currentCount));
            localStorage.setItem(STORAGE_KEY, "true");
        }

        setCount(currentCount);
    }, []);

    return (
        <div className="visitor-counter">
            👀 {count.toLocaleString()} Unique Visitor(s)
        </div>
    );
}

export default VisitorCounter;
