window.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav-list');

    if (nav) {
        let currentScrollLocation = window.pageYOffset;
        let lastScrollLocation = currentScrollLocation;

        window.addEventListener('scroll', () => {
            currentScrollLocation = window.pageYOffset;

            if (currentScrollLocation > lastScrollLocation) {
                nav.classList.add('nav-list-hidden');

                if (nav.classList.contains('nav-list-background'))
                    nav.classList.remove('nav-list-background');
            }
            else {
                nav.classList.remove('nav-list-hidden');

                if (window.pageYOffset > 0)
                    nav.classList.add('nav-list-background');
                else
                    nav.classList.remove('nav-list-background');
            }

            lastScrollLocation = currentScrollLocation;
        })
    }
})