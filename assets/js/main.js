// Main JavaScript for GitHub Pages Portfolio

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function () {
    const themeStorageKey = 'site-theme';
    const savedTheme = localStorage.getItem(themeStorageKey);
    const initialTheme = savedTheme === 'dark' || savedTheme === 'light'
        ? savedTheme
        : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const applyTheme = function (theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(themeStorageKey, theme);

        if (themeToggleIcon) {
            themeToggleIcon.textContent = theme === 'dark' ? 'dark_mode' : 'sunny';
        }

        if (themeToggleButton) {
            const nextMode = theme === 'dark' ? 'ライトモード' : 'ダークモード';
            themeToggleButton.setAttribute('aria-label', nextMode + 'に切り替え');
            themeToggleButton.setAttribute('title', nextMode + 'に切り替え');
        }
    };

    const themeToggleButton = document.createElement('button');
    themeToggleButton.type = 'button';
    themeToggleButton.className = 'theme-toggle';

    const themeToggleIcon = document.createElement('span');
    themeToggleIcon.className = 'material-symbols-rounded';
    themeToggleButton.appendChild(themeToggleIcon);

    themeToggleButton.addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
    });

    document.body.appendChild(themeToggleButton);
    applyTheme(initialTheme);

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
