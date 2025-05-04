const timesData = [
    {
        id: "AGO",
        nome: "Atlético Goianiense",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "CAM",
        nome: "Atlético Mineiro",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "CAP",
        nome: "Atlético Paranaense",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "ECB",
        nome: "Bahia",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "BOT",
        nome: "Botafogo",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "BRA",
        nome: "Bragantino",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "COR",
        nome: "Corinthians",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "CRI",
        nome: "Criciúma",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "CRU",
        nome: "Cruzeiro",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "CUI",
        nome: "Cuiabá",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "FLA",
        nome: "Flamengo",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "FLU",
        nome: "Fluminense",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "FOR",
        nome: "Fortaleza",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "GRE",
        nome: "Grêmio",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "INT",
        nome: "Internacional",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "JUV",
        nome: "Juventude",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "PAL",
        nome: "Palmeiras",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "SPO",
        nome: "São Paulo",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "VAS",
        nome: "Vasco da Gama",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    },
    {
        id: "VIT",
        nome: "Vitória",
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        gols_pro: 0,
        gols_contra: 0,
        saldo_gols: 0,
        partidas_jogadas: 0
    }
];

const times = [
    "AGO", "CAM", "CAP", "ECB", "BOT", "BRA", "COR", "CRI", "CRU", "CUI",
    "FLA", "FLU", "FOR", "GRE", "INT", "JUV", "PAL", "SPO", "VAS", "VIT"
];

let timesList = [...times];
if (timesList.length % 2 !== 0) {
    timesList.push("BYE");
}

const numTimes = timesList.length;
const numRodadas = numTimes - 1;
const jogosPorRodada = numTimes / 2;

let calendario = [];

for (let rodada = 0; rodada < numRodadas; rodada++) {
    let jogos = [];
    for (let i = 0; i < jogosPorRodada; i++) {
        let mandante, visitante;
        if (i === 0) {
            mandante = timesList[0];
            visitante = timesList[numTimes - 1];
        } else {
            mandante = timesList[i];
            visitante = timesList[numTimes - 1 - i];
        }
        if (mandante !== "BYE" && visitante !== "BYE") {
            jogos.push({
                rodada: rodada + 1,
                mandante: mandante,
                visitante: visitante
            });
        }
    }
    calendario.push(jogos);

    const fixed = timesList[0];
    const rotated = [fixed, timesList[numTimes - 1], ...timesList.slice(1, numTimes - 1)];
    timesList = rotated;
}

for (let rodada = 0; rodada < numRodadas; rodada++) {
    let jogos = [];
    for (let i = 0; i < calendario[rodada].length; i++) {
        jogos.push({
            rodada: rodada + 1 + numRodadas,
            mandante: calendario[rodada][i].visitante,
            visitante: calendario[rodada][i].mandante
        });
    }
    calendario.push(jogos);
}
console.log(calendario);

function simularJogo(mandante, visitante) {
    const golsMandante = Math.floor(Math.random() * 5);
    const golsVisitante = Math.floor(Math.random() * 5);
    return {
        golsMandante,
        golsVisitante
    };
}

function atualizarDadosTimes(idMandante, idVisitante, golsMandante, golsVisitante) {
    const timeMandante = timesData.find(time => time.id === idMandante);
    const timeVisitante = timesData.find(time => time.id === idVisitante);

    timeMandante.gols_pro += golsMandante;
    timeMandante.gols_contra += golsVisitante;
    timeVisitante.gols_pro += golsVisitante;
    timeVisitante.gols_contra += golsMandante;

    timeMandante.saldo_gols = timeMandante.gols_pro - timeMandante.gols_contra;
    timeVisitante.saldo_gols = timeVisitante.gols_pro - timeVisitante.gols_contra;

    timeMandante.partidas_jogadas += 1;
    timeVisitante.partidas_jogadas += 1;

    if (golsMandante > golsVisitante) {
        timeMandante.vitorias += 1;
        timeMandante.pontos += 3;
        timeVisitante.derrotas += 1;
    } else if (golsMandante < golsVisitante) {
        timeVisitante.vitorias += 1;
        timeVisitante.pontos += 3;
        timeMandante.derrotas += 1;
    } else {
        timeMandante.empates += 1;
        timeVisitante.empates += 1;
        timeMandante.pontos += 1;
        timeVisitante.pontos += 1;
    }
}

function simularRodada(rodada) {
    const jogosRodada = calendario[rodada - 1];

    jogosRodada.forEach(jogo => {
        const resultado = simularJogo(jogo.mandante, jogo.visitante);
        jogo.golsMandante = resultado.golsMandante;
        jogo.golsVisitante = resultado.golsVisitante;
        atualizarDadosTimes(jogo.mandante, jogo.visitante, resultado.golsMandante, resultado.golsVisitante);
    });

    atualizarTabelaClassificacao();
    exibirResultadosRodada(rodada);
}

function atualizarTabelaClassificacao() {
    const timesOrdenados = [...timesData].sort((a, b) => {
        if (a.pontos !== b.pontos) {
            return b.pontos - a.pontos;
        }
        if (a.saldo_gols !== b.saldo_gols) {
            return b.saldo_gols - a.saldo_gols;
        }
        return b.gols_pro - a.gols_pro;
    });

    timesOrdenados.forEach((time, index) => {
        const linha = document.getElementById(time.id);
        if (linha) {
            linha.cells[1].textContent = time.pontos;
            linha.cells[2].textContent = time.vitorias;
            linha.cells[3].textContent = time.empates;
            linha.cells[4].textContent = time.derrotas;
            linha.cells[5].textContent = time.gols_pro;
            linha.cells[6].textContent = time.gols_contra;
            linha.cells[7].textContent = time.saldo_gols;
            linha.cells[8].textContent = time.partidas_jogadas;
        }
    });
}

function exibirResultadosRodada(rodada) {
    const jogosRodada = calendario[rodada - 1];
    const divJogos = document.querySelector('.games');
    divJogos.innerHTML = `<h2>Jogos - Rodada ${rodada}</h2>`;
    jogosRodada.forEach(jogo => {
        const timeMandante = timesData.find(time => time.id === jogo.mandante);
        const timeVisitante = timesData.find(time => time.id === jogo.visitante);
        const divJogo = document.createElement('div');
        divJogo.className = 'jogo';
        divJogo.innerHTML = `
            <span>${timeMandante.nome}</span>
            <span class="placar">${jogo.golsMandante} x ${jogo.golsVisitante}</span>
            <span>${timeVisitante.nome}</span>
        `;
        divJogos.appendChild(divJogo);
    });
}

function resetarDadosTimes() {
    timesData.forEach(time => {
        time.pontos = 0;
        time.vitorias = 0;
        time.empates = 0;
        time.derrotas = 0;
        time.gols_pro = 0;
        time.gols_contra = 0;
        time.saldo_gols = 0;
        time.partidas_jogadas = 0;
    });
}

function atualizarTabelaClassificacao() {
    const timesOrdenados = [...timesData].sort((a, b) => {
        if (a.pontos !== b.pontos) return b.pontos - a.pontos;
        if (a.saldo_gols !== b.saldo_gols) return b.saldo_gols - a.saldo_gols;
        return b.gols_pro - a.gols_pro;
    });

    const tabela = document.querySelector('.tabela');
    const tbody = tabela.tBodies[0] || tabela;

    while (tbody.rows.length > 1) {
        tbody.deleteRow(1);
    }

    timesOrdenados.forEach(time => {
        const linha = document.createElement('tr');
        linha.id = time.id;
        linha.innerHTML = `
            <td align="left"><img src="assets/logotimes/${time.id.toLowerCase()}.png" alt="${time.nome}" class="img"> ${time.nome}</td>
            <td>${time.pontos}</td>
            <td>${time.vitorias}</td>
            <td>${time.empates}</td>
            <td>${time.derrotas}</td>
            <td>${time.gols_pro}</td>
            <td>${time.gols_contra}</td>
            <td>${time.saldo_gols}</td>
            <td>${time.partidas_jogadas}</td>
        `;
        tbody.appendChild(linha);
    });
}

function simularCampeonato() {
    resetarDadosTimes();
    for (let rodada = 1; rodada <= calendario.length; rodada++) {
        simularRodada(rodada);
    }
}

document.getElementById('btnSimulate').addEventListener('click', () => {
    simularCampeonato();
});