const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const href = link.getAttribute('href');

        if (href === 'index.html' || href === 'index.php') {
            window.location.href = href;
        }
    });
});