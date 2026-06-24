import { useEffect, useState } from "react";
import "../assets/styles/DashboardAnalytics.scss";

function DashboardAnalytics() {
    const [analytics, setAnalytics] = useState<Record<string, number>>({});
    const [totalViews, setTotalViews] = useState(0);
    const [downloads, setDownloads] = useState<Record<string, number>>({});
    const [totalDownloads, setTotalDownloads] = useState(0);

    useEffect(() => {
        const storedAnalytics = JSON.parse(
            localStorage.getItem("dashboardAnalytics") || "{}",
        );

        const storedDownloads = JSON.parse(
            localStorage.getItem("downloadAnalytics") || "{}",
        );

        const storedTotalDownloads =
            Number(localStorage.getItem("totalDownloads")) || 0;

        const storedTotalViews =
            Number(localStorage.getItem("totalDashboardViews")) || 0;

        setAnalytics(storedAnalytics);
        setDownloads(storedDownloads);
        setTotalDownloads(storedTotalDownloads);
        setTotalViews(storedTotalViews);
    }, []);

    const rankedDashboards = Object.entries(analytics).sort(
        (a, b) => b[1] - a[1],
    );

    const topDashboard = rankedDashboards[0];

    const cvDownloads = Object.entries(downloads)
        .filter(
            ([name]) =>
                name.toLowerCase().includes("cv") ||
                name.toLowerCase().includes("resume"),
        )
        .reduce((sum, [, count]) => sum + count, 0);

    return (
        <section className="dashboard-analytics">
            <h2>Analytics Dashboard</h2>

            {/* KPI STRIP */}
            <div className="kpi-grid">
                <div className="kpi-card views">
                    <span>👁</span>
                    <h3>{totalViews}</h3>
                    <p>Total Views</p>
                </div>

                <div className="kpi-card downloads">
                    <span>📥</span>
                    <h3>{totalDownloads}</h3>
                    <p>Total Downloads</p>
                </div>

                <div className="kpi-card dashboards">
                    <span>📊</span>
                    <h3>{Object.keys(analytics).length}</h3>
                    <p>Dashboards Tracked</p>
                </div>

                <div className="kpi-card cv">
                    <span>📄</span>
                    <h3>{cvDownloads}</h3>
                    <p>CV Downloads</p>
                </div>
            </div>

            {/* TOP DASHBOARD FEATURE CARD */}
            {topDashboard && (
                <div className="top-dashboard-card">
                    <div className="top-badge">🏆 Top Performing Dashboard</div>
                    <h3>{topDashboard[0]}</h3>
                    <p>{topDashboard[1]} views</p>
                </div>
            )}

            {/* MOST VIEWED */}
            <h3 className="analytics-section-title">Most Viewed Dashboards</h3>

            <div className="table">
                {rankedDashboards.length === 0 ? (
                    <div className="analytics-empty">
                        No dashboard interactions yet.
                    </div>
                ) : (
                    rankedDashboards.map(([name, views], index) => (
                        <div className="table-row" key={name}>
                            <div className="rank">#{index + 1}</div>
                            <div className="name">{name}</div>
                            <div className="value">{views}</div>
                        </div>
                    ))
                )}
            </div>

            {/* DOWNLOADS */}
            <h3 className="analytics-section-title">Download Analytics</h3>

            <div className="table">
                {Object.entries(downloads).length === 0 ? (
                    <div className="analytics-empty">No downloads yet.</div>
                ) : (
                    Object.entries(downloads)
                        .sort((a, b) => b[1] - a[1])
                        .map(([name, count], index) => (
                            <div className="table-row" key={name}>
                                <div className="rank">#{index + 1}</div>
                                <div className="name">{name}</div>
                                <div className="value">{count}</div>
                            </div>
                        ))
                )}
            </div>
        </section>
    );
}

export default DashboardAnalytics;
