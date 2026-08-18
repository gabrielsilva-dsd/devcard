const terminal = document.querySelector(".terminal");
const comando = "gabriel@dev:~$ whoami";

let posicao = 0;

terminal.textContent = "";

function digitarComando() {
    if (posicao < comando.length) {
        terminal.textContent += comando[posicao];
        posicao++;

        setTimeout(digitarComando, 70);
    }
}

digitarComando();