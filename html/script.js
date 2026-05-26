(async () => {
    try {
        const res = await fetch("/auth");
        const data = await res.json();
        if (!data.authenticated) {
            window.location.href = "/login";
            return;
        }
        console.log("Logged in user:", data.user.displayName);
        await import("/home.js");
    } catch (err) {
        console.error(err);
    }
})();
