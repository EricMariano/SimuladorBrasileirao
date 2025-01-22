// Botão de modo escuro
const modeButton = document.getElementById('btnDarkMode')
const body = document.body

function changeMode() {
    body.classList.toggle('dark-mode');
    return body.classList.contains('dark-mode') ? modeButton.innerHTML = 'Tema Claro' : modeButton.innerHTML = 'Tema Dark';     
}

modeButton.addEventListener('click', changeMode);
