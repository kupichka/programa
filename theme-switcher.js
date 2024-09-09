document.getElementById('style-switcher').addEventListener('change', function() {
    var selectedCss = this.value;

    var newCssLink = document.createElement('link');
    newCssLink.rel = 'stylesheet';
    newCssLink.href = selectedCss;

    document.head.appendChild(newCssLink);
});
