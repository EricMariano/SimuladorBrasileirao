//Logica
const modeButton = document.getElementById('btnDarkMode')
const body = document.body

function changeMode() {
    body.classList.toggle('dark-mode');
    return body.classList.contains('dark-mode') ? modeButton.innerHTML = 'Modo Claro' : modeButton.innerHTML = 'Modo Dark';     
}

modeButton.addEventListener('click', changeMode);