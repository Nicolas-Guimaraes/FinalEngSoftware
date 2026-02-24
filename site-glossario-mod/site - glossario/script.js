const categorias = [
  "Introdução a Computação",
  "Algoritmos e programação de computadores",
  "Direito aplicado à informática",
  "Engenharia de Software",
  "Calculo 1",
  "Produção de texto",
  "Cálculo 2",
  "Lógica Matématica",
  "Sistemas Digitais",
  "APC 2",
  "Probabilidade e Estatísca",
  "Física para Computadores",
  "Estrutura de Dados 1",
  "Organização de Computadores",
  "Programação Orientada à Objetos",
  "Matemática Discreta",
  "Teoria dos Grafos",
  "Estrutura de Dados 2",
  "Álgebra Linear",
  "Arquitetura de Computadores",
  "Banco de Dados"
];

const termos = [
  {
    nome: "API",
    categoria: "Algoritmos e programação de computadores",
    descricao: "São conjuntos de ferramentas, definições e protocolos para a criação de aplicações de software.",
    simples: "Um jeito de programas conversarem.",
    exemplo: "Esse app usa a API do Google.",
    fonteLink: "https://shre.ink/redhat-o-que-e-API-trecho-",
    popular: true
  },
  {
    nome: "Banda Larga",
    categoria: "Introdução a Computação",
    descricao: "Transmissão de dados simétricos que permite enviar diversos pacotes de informação em simultâneo para aumentar a velocidade de transmissão efetiva.",
    simples: "Envio e recebimento de dados ao mesmo tempo, deixando a internet mais rápida.",
    exemplo: "A banda larga mantém a conexão estável.",
    fonteLink: "https://conceito.de/banda-larga",
    popular: true
  },
  {
    nome: "Browser",
    categoria: "Introdução a Computação",
    descricao: "Software que permite acessar, interagir e visualizar conteúdos da World Wide Web, como textos, imagens e vídeos.",
    simples: "Programa para navegar na internet.",
    exemplo: "Uso o Chrome como browser.",
    fonteLink: "https://shre.ink/tecnoblog-o-que-e-um-navegador-web",
    popular: true
  },
  {
    nome: "Bug",
    categoria: "Algoritmos e programação de computadores",
    descricao: "Erro ou falha em um software ou hardware que causa um comportamento inesperado ou indesejado.",
    simples: "Algo que não funciona direito.",
    exemplo: "O aplicativo do banco bugou.",
    fonteLink: "https://shre.ink/mundoconectado-o-que-e-bug-trecho",
    popular: true
  },
  {
    nome: "Crashar",
    categoria: "Introdução a Computação",
    descricao: "Falha no funcionamento de um computador ou quando parte do sistema operacional deixa de funcionar.",
    simples: "Travou tudo.",
    exemplo: "O computador deu crash.",
    fonteLink: "https://shre.ink/oficinadanet-o-que-e-crash-trecho",
    popular: true
  },
  {
    nome: "Deploy",
    categoria: "Algoritmos e programação de computadores",
    descricao: "O deploy é o processo de implantar e fazer o projeto disponível para o público em geral. Pode-se definir como o ato de transferir um ou mais componentes de desenvolvimento, como os códigos, arquivos ou bancos de dados, para o ambiente de produção.",
    simples: "Subir o site.",
    exemplo: "Fiz o deploy hoje.",
    fonteLink: "https://shre.ink/sabertecnologias-o-que-e-deploy-trecho-ex",
    popular: true
  },
  {
    nome: "Requisitos",
    categoria: "Engenharia de Software",
    descricao: "Descrições dos serviços fornecidos pelo sistema e suas restrições operacionais",
    simples: "Quais serviços o sistema deve possuir e sua limitações",
    exemplo: "Amanhã tenho que entregar o documentação de requisitos do projeto final de APC",
    fonteLink: "Engenharia de Software - sommerville 8ª edição",
    popular: true
  },
  {
    nome: "Requisitos funcionais",
    categoria: "Engenharia de Software",
    descricao: "Descrições dos serviços fornecidos pelo sistema",
    simples: "Descrição da parte tecnica de um sistema",
    exemplo: "Amanhã tenho que entregar o documentação de requisitos do projeto final de APC",
    fonteLink: "Engenharia de Software - sommerville 8ª edição",
    popular: true
  },
  {
    nome: "Requisitos não-funcionais",
    categoria: "Engenharia de Software",
    descricao: "Descrição das partes emergentes do sistema",
    simples: "Descrição das caracteristicas não-tecnicas de um sistema",
    exemplo: "Devemos nos preocupar com a familiariadade do úsuario com esse tipo de sistema",
    fonteLink: "Engenharia de Software - sommerville 8ª edição",
    popular: true
  },
  {
    nome: "Estudo de viabilidade",
    categoria: "Engenharia de Software",
    descricao: "Consistem um conjunto de requisitos de negócio",
    simples: "Como o sistema pretende apoiar os processos de negócio",
    exemplo: "O novo sistema deve ser implementado com uma interface parecida a do sistema anterior",
    fonteLink: "Engenharia de Software - sommerville 8ª edição",
    popular: true
  },
  {
    nome: "Etnografia",
    categoria: "Engenharia de Software",
    descricao: "É uma técnica de observação para compreender requisitos sociais e organizacionais",
    simples: "O engenheiro deve se inserir no ambiente de trabalho ao qual o sistema será usado",
    exemplo: "Como o sistema será de uso exclusivo de tecnicos da área da saúde, devemos fazer uma consulta sobre jargões e termos comuns",
    fonteLink: "Engenharia de Software - sommerville 8ª edição",
    popular: true
  },
  {
    nome: "Sistema Crítico",
    categoria: "Engenharia de Software",
    descricao: "Sistemas ao qual a falha pode causar grandes perdas financeiras, ecologicas ou vidas humanas",
    simples: "Sistema em resultados inesperados causam grande prejuizo",
    exemplo: "O sistema de administração de insulina falhou, levando à obito três pessoas",
    fonteLink: "Engenharia de Software - sommerville 8ª edição",
    popular: true
  },
  {
    nome: "Teste de integração",
    categoria: "Engenharia de Software",
    descricao: "Tem como objetivo testar grupos ou unidades integradas para criar um sistema ou subsistema",
    simples: "Testa a compatibilidade das funções do sistema",
    exemplo: "O teste de integração mostrou que as classes não estâo funcionando em conjunto",
    fonteLink: "Engenharia de Software - sommerville 8ª edição",
    popular: true
  },
  {
    nome: "Teste de sistema",
    categoria: "Engenharia de Software",
    descricao: "Teste uma release de sistema que será entregue ao cliente",
    simples: "Testa o sistema como um todo",
    exemplo: "Hoje teremos o teste final antes de disṕonibilizar o sistema para o cliente",
    fonteLink: "Engenharia de Software - sommerville 8ª edição",
    popular: true
  },
  {
    nome: "Teste de aceitação",
    categoria: "Engenharia de Software",
    descricao: "O sistema é testado fora do ambiente de desenvolvimento após a implementação com o cliente",
    simples: "O cliente testará o sistema para vereficar se o mesmo é funcional sem o conhecimento técnico por trás",
    exemplo: "O sistema de administração de insulina falhou, levando à obito três pessoas",
    fonteLink: "Engenharia de Software - sommerville 8ª edição",
    popular: true
  },
  {
    nome: "Ábaco",
    categoria: "Introdução a Computação",
    descricao: "instrumento para auxiliar nos cálculos, foi inventado por volta do ano 3000 a.c na Babilônia.",
    simples: "A primeira calculadora",
    exemplo: "Na aula de hoje usaremos  o Ábaco para realizar operações de adição",
    fonteLink: "FEDELI, R. D. et al., Introdução à Ciência da Computação. Ed.1.",
    popular: true
  },
  {
    nome: "Pascalina",
    categoria: "Introdução a Computação",
    descricao: "a primeira máquina de somar (máquina Pascalina); construída com rodas dentadas, que realizava as soma e subtração.",
    simples: "A primeira calcudora com soma, subtração e multiplicação",
    exemplo: "O sistema de administração de insulina falhou, levando à obito três pessoas",
    fonteLink: "FEDELI, R. D. et al., Introdução à Ciência da Computação. Ed.1.",
    popular: true
  },
      {
    nome: "Mark 1",
    categoria: "Introdução a Computação",
    descricao: "Mark I foi o primeiro computador eletro-mecânico, inventado pelo professor Howard H. Aiken da Universidade de Harvard, nos E.U.A., em 1944;.",
    simples: "O primeiro computador que funcionava a partir de fios para manipular mémoria",
    exemplo: "O sistema de administração de insulina falhou, levando à obito três pessoas",
    fonteLink: "FEDELI, R. D. et al., Introdução à Ciência da Computação. Ed.1.",
    popular: true
  },
  {
    nome: "Eniac",
    categoria: "Introdução a Computação",
    descricao: "O primeiro computador eletrônico, inventado pelos professores John Eckert e John Mauchly da Universidade da Pennsylvania (E.U.A.), em 1946.",
    simples: "O primeiro computador que funcionava a partir de eletricidade",
    exemplo: "O sistema de administração de insulina falhou, levando à obito três pessoas",
    fonteLink: "FEDELI, R. D. et al., Introdução à Ciência da Computação. Ed.1.",
    popular: true
  },
  
];

termos.sort((a, b) => a.nome.localeCompare(b.nome));

const categoriasDiv = document.getElementById("categorias");
const termosDiv = document.getElementById("termos");
const tituloTermos = document.getElementById("titulo-termos");
const popularesDiv = document.getElementById("lista-populares");
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");

let paginaAtual = 1;
const termosPorPagina = 4;

modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});

function abrirModal(termo) {
  modal.classList.remove("hidden");

  document.getElementById("modalTitulo").innerText = termo.nome;
  document.getElementById("modalDescricao").innerText = termo.descricao;
  document.getElementById("modalSimples").innerText = termo.simples;
  document.getElementById("modalExemplo").innerText = termo.exemplo;

  const fonte = document.getElementById("modalFonte");

  if (termo.fonte) {
    fonte.textContent = termo.fonte;
    fonte.style.display = "block";
  } else {
    fonte.style.display = "none";
  }
}

function fecharModal() {
  modal.classList.add("hidden");
}

document.getElementById("closeModal").onclick = fecharModal;
modal.onclick = e => e.target === modal && fecharModal();

function renderCategorias() {
  categorias.forEach(cat => {
    const card = criarCard(cat, "Explorar termos", "categoria");

    card.onclick = () => {
      paginaAtual = 1;
      tituloTermos.innerText = `Categoria: ${cat}`;
      renderTermos(cat);
    };

    categoriasDiv.appendChild(card);
  });
}

function renderTermos(filtro) {
  termosDiv.innerHTML = "";

  const filtrados = termos.filter(t => t.categoria === filtro);

  const inicio = (paginaAtual - 1) * termosPorPagina;
  const fim = inicio + termosPorPagina;

  const termosPagina = filtrados.slice(inicio, fim);

  termosPagina.forEach(termo => {
    const card = criarCardTermo(termo);
    termosDiv.appendChild(card);
  });

  renderPaginacao(filtrados.length, filtro);
}

function renderPaginacao(totalTermos, filtro) {
  const paginacaoDiv = document.getElementById("paginacao");
  paginacaoDiv.innerHTML = "";

  const totalPaginas = Math.ceil(totalTermos / termosPorPagina);

  for (let i = 1; i <= totalPaginas; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;

    if (i === paginaAtual) {
      btn.classList.add("ativa");
    }

    btn.onclick = () => {
      paginaAtual = i;
      renderTermos(filtro);
    };

    paginacaoDiv.appendChild(btn);
  }
}

function criarCard(titulo, subtitulo, tipo) {
  const div = document.createElement("div");
  div.className = `card ${tipo}`;
  div.innerHTML = `<h3>${titulo}</h3><small>${subtitulo}</small>`;
  return div;
}

function criarCardTermo(termo) {
  const card = document.createElement("div");
  card.className = "card termo";

  card.innerHTML = `
    <h3>${termo.nome}</h3>
    <p class="definicao">${termo.descricao}</p>
  `;

  let timeout;

  card.addEventListener("mouseenter", () => {
    timeout = setTimeout(() => {
      abrirModal(termo);
    }, 2000);
  });

  card.addEventListener("mouseleave", () => {
    clearTimeout(timeout);
  });

  return card;
}

function renderPopularesLateral() {
  popularesDiv.innerHTML = "";

  const populares = termos
    .filter(t => t.popular)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  populares.forEach(termo => {
    const card = document.createElement("div");
    card.className = "card termo pequeno";
    card.innerHTML = `<h4>${termo.nome}</h4>`;

    let timeout;

    card.addEventListener("mouseenter", () => {
      timeout = setTimeout(() => {
        abrirModal(termo);
      }, 2000);
    });

    card.addEventListener("mouseleave", () => {
      clearTimeout(timeout);
    });

    popularesDiv.appendChild(card);
  });
}

renderCategorias();
renderPopularesLateral();