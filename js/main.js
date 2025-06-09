colaboradoresEquipe = [
    {
        urlFoto: 'assets/professores/foto1.jpg',
        nome: 'Marcelo Marotta',
        funcao: 'Coordenador do projeto',
        descricao: 'Doutor em Ciência da Computação junto ao Grupo de Redes de Computadores do Instituto de Informática da Universidade Federal do Rio Grande do Sul (UFRGS).'
    },
    {
        urlFoto: 'assets/professores/foto2.jpg',
        nome: 'Genaina Nunes Rodrigues',
        funcao: 'Professora',
        descricao: 'Professora associada do Departamento de Ciência da Computação da Universidade de Brasília. Possui Ph.D. em Ciência da Computação pela University College London (2008) no grupo de Engenharia de Software.'
    },
    {
        urlFoto: 'assets/professores/foto3.jpeg',
        nome: 'Carla Denise Castanho',
        funcao: 'Professora',
        descricao: 'Doutora em Ciência da Computação pelo Nagoya Institute Of Technology (Japão). Desde 2005 é Professora do Departamento de Ciência da Computação da Universidade de Brasília.'
    },
        {
        urlFoto: 'assets/professores/foto4.jpg',
        nome: 'Ricardo Pezzuol Jacobi',
        funcao: 'Professor',
        descricao: 'Doutor em Ciências Aplicadas pela Université Catholique de Louvain no ano de 1993. Foi Diretor do Instituto de Ciências Exatas da UnB no período de 2004 a 2007.'
    }
]


function geraCardHtml(colaborador) {
    return `<div class="col-12 col-lg-4 mb-3">
                <div class="card-membro">
                    <div class="foto" style="background-image: url(${colaborador.urlFoto});"></div>
                    <h3 class="nome">${colaborador.nome}</h3>
                    <h4 class="funcao">${colaborador.funcao}</h4>
                    <p class="descricao">${colaborador.descricao}</p>
                    <ul class="redes">
                    </ul>
                </div>
            </div>`
}


function adicionaProfessores() {
    const divCards = document.getElementById('cardsEquipes');
    let html = '';

    colaboradoresEquipe.forEach(colaborador => {
        html += geraCardHtml(colaborador);
    })

    divCards.innerHTML = html;
}

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
    
    adicionaProfessores();


});


