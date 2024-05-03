// header section

//scroll to section
document.querySelectorAll('a[href^="#]').forEach(anchor =>
    {
        anchor.addEventListener('click',function(e) {
            e.preventDefault();

            document.querySelectorAll(this.getAttribute('href')).scrollIntoView({
                behavior:'smooth'
        });
        });
    });