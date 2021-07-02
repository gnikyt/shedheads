function handleInternalLink(e, el) {
    e.preventDefault();

    document.querySelector(el.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        offsetTop: 40,
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const internalLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
    internalLinks.forEach((el) => {
        el.addEventListener('click', (e) => handleInternalLink(e, el));
    });
});
