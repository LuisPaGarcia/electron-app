const remote = require('electron').remote
const main = remote.require('./main.js')

let button = document.createElement('button');
button.textContent = "ABRIR VENTANA";
button.addEventListener('click', () => {
    main.openWindow()
});
document.body.appendChild(button);