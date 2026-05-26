const $root = document.getElementById("root");
$root.innerHTML = `<header class="top-bar">
    <div class="header-container"><span class="brand-name">Cru Global Nexus</span></div>
    </header>
    <main class="main-content">
        <div class="login-card">
            <h1 class="welcome-title">Dashboard</h1>
            <p class="welcome-subtitle">You are successfully logged in.</p>
            <div id="active-projects"></div>
            <a href="/auth/logout" id="logout-btn" class="google-btn" style="border-color: #ef4444; color: #dc2626; text-decoration: none;">
            Log Out
            </a>           
        </div>
    </main>`;

const $logout = document.getElementById("logout-btn");
$logout.addEventListener("click", () => {
    window.location.href = "/";
});
(async () => {
    const res = await fetch("/api/projects");
    const rows = await res.json();
    const $activeProjects = document.getElementById("active-projects");
    debugger;
    $activeProjects.innerHTML = rows.map((row) => `<div id="${row.uuid}">${row.name}</div>`).join("");
})();
