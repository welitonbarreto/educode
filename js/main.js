document.addEventListener("DOMContentLoaded", function () {
    var myOffcanvas = document.getElementById('offcanvasNavegacao');
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    document.querySelector(".botao-offcanvas").addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        bsOffcanvas.toggle();
    });


    const itens = document.querySelectorAll('#offcanvasNavegacao .navegacao-link')

    itens.forEach(item => {
        item.addEventListener('click', (event) => {
            const hash = event.target.hash;
            if (!hash) {
                return;
            }

            const element = document.querySelector(hash);
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        })
    }); 
});


