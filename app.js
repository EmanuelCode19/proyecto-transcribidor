const microfono = document.querySelector('#microfono')
const escuchando = document.querySelector('#escuchando')

document.addEventListener('DOMContentLoaded', () => {
    Notification
       .requestPermission()
       .then()
})


microfono.addEventListener('click',ejecutarMicrofono);

function ejecutarMicrofono() {

    const speechRecognition = webkitSpeechRecognition;
    const recognition = new speechRecognition()

    recognition.start()

    recognition.onstart = function() {
       escuchando.classList.add('mostrar')
    }

    recognition.onspeechend = function() {
           if(Notification.permission === 'granted'){
               new Notification('Termino la grabacion')
           }
        recognition.stop();
    }

    recognition.onresult = function(e){
        const traduccion = document.querySelector('.traduccion')
        const texto = document.createElement('p');
        texto.textContent = e.results;

        traduccion.appendChild(texto)
    }
}