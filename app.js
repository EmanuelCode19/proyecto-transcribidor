const microfono = document.querySelector('#microfono')
const escuchando = document.querySelector('#escuchando')
const texto = document.createElement('p');

document.addEventListener('DOMContentLoaded', () => {
    Notification
       .requestPermission()
       .then()
})


microfono.addEventListener('click',ejecutarMicrofono);


function ejecutarMicrofono(e) {
    const speechRecognition = webkitSpeechRecognition;
    const recognition = new speechRecognition()

    recognition.start()

    recognition.onstart = function() {
       escuchando.classList.add('mostrar')
       escuchando.textContent= 'escuchando......'
       texto.textContent=''
    }

    recognition.onspeechend = function() {
           if(Notification.permission === 'granted'){
               new Notification('Termino la grabacion')
           }
             
           escuchando.textContent= ''

            setTimeout(() => {
                escuchando.classList.remove('mostrar')
            }, 3000);
      
        recognition.stop();
    }

    recognition.onresult = function(e){
        const {confidence, transcript} = e.results[0] [0];
        const traduccion = document.querySelector('.traduccion')
        texto.textContent = `${transcript}`

        traduccion.appendChild(texto)
    }
}