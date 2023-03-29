const observer = new MutationObserver((mutations) => {
    const pattern_url = /^https:\/\/twitter\.com\/(.*)$/;
    if (pattern_url.test(window.location.href) == false) {
        return;
    }

    let trend = document.querySelectorAll('section[aria-labelledby]');
    if (trend.length > 1) {
        trend[trend.length - 1].parentNode.parentNode.style.visibility = "hidden";
        trend[trend.length - 1].parentNode.parentNode.style.height = 0;
    }
});
const config = {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["aria-labelledby"],
};
observer.observe(document.body, config);
