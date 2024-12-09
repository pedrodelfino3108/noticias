const newsData = [
    {
        title: "Dólar fecha a R$ 6,08 e renova maior valor da história...",
        description: "Mercados aguardam dados da inflação nos EUA e decisão dos juros no Brasil; anúncios da China dão força para commodities",
        imageUrl: "imgs/dolar.jpeg",
        link: "https://www.cnnbrasil.com.br/economia/mercado/mercado-hoje-ibovespa-dolar-09-dezembro-2024/"
    },
    {
        title: "EUA alertam que Estado Islâmico pode tentar...",
        description: "Forças americanas bombardearam alvos do grupo terrorista na Síria em meio ao colapso do regime de Bashar al-Assad.",
        imageUrl: "imgs/confronto.jpeg",
        link: "https://www.cnnbrasil.com.br/internacional/eua-alertam-que-estado-islamico-pode-tentar-tirar-vantagem-da-queda-do-regime-sirio/"
    },
    {
        title: "Soteldo é oferecido ao Corinthians, que vê negócio distante...",
        description: "Atacante do Grêmio teve nome levado ao Timão, que não abriu negociações até o momento.",
        imageUrl: "imgs/soteldo.jpeg",
        link: "https://www.cnnbrasil.com.br/esportes/futebol/corinthians/soteldo-e-oferecido-ao-corinthians-que-ve-negocio-distante/"
    },
    {
        title: "Botafogo tem 10 jogadores com contrato até 31 de dezembro...",
        description: "Glorioso têm 10 jogadores cujos contratos se encerram em 31 de dezembro de 2024, incluindo atletas com espaço no time de Artur Jorge.",
        imageUrl: "imgs/fogao.jpeg",
        link: "https://www.cnnbrasil.com.br/esportes/futebol/botafogo/botafogo-tem-10-jogadores-com-contrato-ate-31-de-dezembro-veja-a-situacao/"
    },
];


function loadNews() {
    const container = document.getElementById("news-container");

    newsData.forEach(news => {
        const card = document.createElement("div");
        card.classList.add("article-card");

        card.innerHTML = `
            <img src="${news.imageUrl}" alt="Imagem da notícia">
            <h2>${news.title}</h2>
            <p>${news.description}</p>
            <a href="${news.link}" target="_blank">Leia mais</a>
        `;

        container.appendChild(card);
    });
}

// Chama a função para carregar as notícias ao iniciar a página
loadNews();
