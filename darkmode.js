document.getElementById("darkModeToggle").addEventListener("click", function() {
    const body = document.body;
    const header = document.querySelector('.gm-header');
    const footer = document.querySelector('.gm-footer');
    const tables = document.querySelectorAll('.gm-table th, .gm-table td');

    // Toggle dark mode on body, header, footer, and tables
    body.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");

    tables.forEach(table => {
        table.classList.toggle("dark-mode");
    });

    this.textContent = body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
});
