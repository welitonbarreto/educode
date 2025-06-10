colaboradoresEquipe = [
    {
        urlFoto: 'assets/professores/foto1.jpg',
        nome: 'Marcelo Antônio Marotta',
        funcao: 'Coordenador do projeto',
        descricao: 'Doutor em Ciência da Computação junto ao Grupo de Redes de Computadores do Instituto de Informática da Universidade Federal do Rio Grande do Sul (UFRGS). Atualmente, é pesquisador nas áreas de Redes de Acesso a Rádio baseadas em Conceitos de Nuvem (C-RAN), Redes de Próxima Geração, Internet do Futuro, Gerenciamento de Processos de Negócios, Rede Definida por Software, Internet das Coisas e etc.'
    },
    {
        urlFoto: 'assets/professores/foto5.jpg',
        nome: 'Frank Ned Santa Cruz',
        funcao: 'Professor',
        descricao: 'Formado em análise de sistemas pela UnB, advogado e mestre em Ciência da Computacão, doutorando em filosofia da mente com concentração de pesquisa em mentes artificiais e cognição algoritmica. Atua como professor substituto no departamento de Ciência da Computacão da UnB.'
    },
    {
        urlFoto: 'assets/professores/foto2.jpg',
        nome: 'Genaina Nunes Rodrigues',
        funcao: 'Professora',
        descricao: 'Professora associada do Departamento de Ciência da Computação da Universidade de Brasília. Possui Ph.D. em Ciência da Computação pela University College London (2008) no grupo de Engenharia de Software. Teve seu mestrado em Ciência da Computação pela Universidade Federal de Pernambuco (2002) no grupo Sistemas Distribuídos.'
    },
    {
        urlFoto: 'assets/professores/foto3.jpeg',
        nome: 'Carla Denise Castanho',
        funcao: 'Professora',
        descricao: 'Doutora em Ciência da Computação pelo Nagoya Institute Of Technology (Japão). Desde 2005 é Professora do Departamento de Ciência da Computação da Universidade de Brasília.  Seus interesses de pesquisa se concentram em Jogos Eletrônicos, Game Analytics e Computação Ubíqua.'
    },
    {
        urlFoto: 'assets/professores/foto4.jpg',
        nome: 'Ricardo Pezzuol Jacobi',
        funcao: 'Professor',
        descricao: 'Doutor em Ciências Aplicadas pela Université Catholique de Louvain no ano de 1993. Foi Diretor do Instituto de Ciências Exatas da UnB no período de 2004 a 2007.  Atua na área de Ciência da Computação e Microeletrônica, com ênfase em CAD, arquiteturas reconfiguráveis e sistemas monoliticos (SoC).'
    },
    {
        urlFoto: 'assets/professores/foto6.jpg',
        nome: 'Roberto Vito Rodrigues Filho',
        funcao: 'Professor',
        descricao: 'Doutor em Ciência da Computação pela Universidade de Lancaster, Reino Unido (2018), além de mestre e bacharel pela Universidade Federal de Goiás (INF-UFG, 2013). Seus interesses de pesquisa concentram-se em Computação Autonômica, com foco em sistemas distribuídos emergentes, auto-organizáveis e auto-gerenciáveis.'

    }
]


function geraCardHtml(colaborador) {
    return `<div class="col-12 col-lg-4 mb-3">
                <div class="card-membro">
                    <div class="foto" style="background-image: url(${colaborador.urlFoto});"></div>
                    <h3 class="nome">${colaborador.nome}</h3>
                    <h4 class="funcao">${colaborador.funcao}</h4>
                    <p class="descricao">${colaborador.descricao}</p>
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


