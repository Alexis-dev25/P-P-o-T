function elegirAleatorio(lista) {
    let indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
}

const options = ["piedra", "papel", "tijera"];
const symbolMap = {
    piedra: "✊",
    papel: "✋",
    tijera: "✌"
};

function determinarGanador(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) return "tie";
    if (
        (userChoice === "tijera" && cpuChoice === "piedra") ||
        (userChoice === "piedra" && cpuChoice === "papel") ||
        (userChoice === "papel" && cpuChoice === "tijera")
    ) {
        return "cpu";
    }
    return "user";
}

function actualizarInterfaz(userChoice, cpuChoice, resultado) {
    const playerChoiceElement = document.getElementById('player-choice');
    const cpuChoiceElement = document.getElementById('cpu-choice');
    const resultElement = document.getElementById('result');

    playerChoiceElement.textContent = symbolMap[userChoice];
    cpuChoiceElement.textContent = symbolMap[cpuChoice];

    // Remover clases anteriores
    playerChoiceElement.classList.remove('winner', 'loser', 'tie');
    cpuChoiceElement.classList.remove('winner', 'loser', 'tie');
    
    if (resultado === "tie") {
        resultElement.textContent = "¡Empate!";
        playerChoiceElement.classList.add('tie');
        cpuChoiceElement.classList.add('tie');
    } else if (resultado === "user") {
        resultElement.textContent = "¡Ganaste!";
        playerChoiceElement.classList.add('winner');
        cpuChoiceElement.classList.add('loser');
    } else {
        resultElement.textContent = "¡La CPU ganó!";
        playerChoiceElement.classList.add('loser');
        cpuChoiceElement.classList.add('winner');
    }
}

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = button.dataset.choice;
        const cpuChoice = elegirAleatorio(options);
        const resultado = determinarGanador(userChoice, cpuChoice);
        actualizarInterfaz(userChoice, cpuChoice, resultado);
    });
});