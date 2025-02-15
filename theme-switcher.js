document.getElementById('style-switcher').addEventListener('change', function() {
    var selectedCss = this.value;
    var existingLink = document.getElementById('dynamic-theme');

    if(existingLink) {
        existingLink.remove();
    }

    var newCssLink = document.createElement('link');
    newCssLink.id = 'dynamic-theme';
    newCssLink.rel = 'stylesheet';
    newCssLink.href = selectedCss;

    document.head.appendChild(newCssLink);
});

const themes = ['theme 1-1.css', 'theme 1-3.css', 'theme 3-2.css', 'theme 4-2.css', 'theme 5-1.css', 'theme white.css'];
themes.forEach(theme => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = theme;
    document.head.appendChild(link);
});