function iniciarAnimacaoBanner() {
    const banner = document.querySelector('.banner-container-cont');
    if (!banner) return;

    banner.style.opacity = '0';
    banner.style.transition = 'opacity 1s ease-in';

    window.addEventListener('load', () => {
        banner.style.opacity = '1';
    }, { once: true });
}

function alterarTituloBanner() {
    const titulo = document.querySelector('.banner-titulo h1');
    if (!titulo) return;

    const frases = [
        'seja o seu melhor',
        'supere seus limites',
        'alcance seus objetivos',
        'transforme seu treino'
    ];
    let fraseAtual = 0;

    setInterval(() => {
        fraseAtual = (fraseAtual + 1) % frases.length;
        titulo.style.opacity = '0';

        setTimeout(() => {
            titulo.textContent = frases[fraseAtual];
            titulo.style.opacity = '1';
        }, 250);
    }, 3000);
}

function alternarCorNomeAcademia() {
    const nomeAcademia = document.querySelector('.banner-logo p');
    if (!nomeAcademia) return;

    nomeAcademia.style.transition = 'color 0.5s ease';
    let corAmarela = true;

    setInterval(() => {
        nomeAcademia.style.color = corAmarela ? '#ffea00' : '#ffffff';
        corAmarela = !corAmarela;
    }, 2000);
}

function configurarCardsOferecidos() {
    document.querySelectorAll('.oferecemos_midia-cont').forEach((card) => {
        const texto = card.querySelector('.oferecemos_midia-cont-texto');
        if (!texto) return;

        const alternarDescricao = () => {
            const expandido = card.getAttribute('aria-expanded') === 'true';
            card.setAttribute('aria-expanded', String(!expandido));
            card.classList.toggle('is-expanded', !expandido);
            texto.textContent = expandido
                ? card.dataset.title
                : card.dataset.description;
        };

        card.addEventListener('click', alternarDescricao);
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                alternarDescricao();
            }
        });
    });
}

function configurarFormularioInscricao() {
    const formulario = document.querySelector('#form-inscricao');
    if (!formulario) return;

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!formulario.reportValidity()) return;

        const dados = new FormData(formulario);
        const mensagem = [
            'Olá! Quero iniciar minha inscrição na Astraeus Academia.',
            `Nome: ${dados.get('nome')}`,
            `Telefone: ${dados.get('telefone')}`,
            `E-mail: ${dados.get('email') || 'Não informado'}`,
            `Interesse: ${dados.get('modalidade')}`
        ].join('\n');

        const numero = '5511942681307';
        const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        window.open(urlWhatsApp, '_blank', 'noopener,noreferrer');
    });
}

iniciarAnimacaoBanner();
alterarTituloBanner();
alternarCorNomeAcademia();
configurarCardsOferecidos();
configurarFormularioInscricao();
