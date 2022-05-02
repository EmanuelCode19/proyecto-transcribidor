const microfono = document.querySelector('#microfono')
const escuchando = document.querySelector('#escuchando')

// document.addEventListener('DOMContentLoaded', () => {
//     Notification
//        .requestPermission()
//        .then()
// })


microfono.addEventListener('click',ejecutarMicrofono);


function ejecutarMicrofono(e) {
    const speechRecognition = webkitSpeechRecognition;
    const recognition = new speechRecognition()

    recognition.start()

    recognition.onstart = function() {
       escuchando.classList.add('mostrar')
    }

    recognition.onspeechend = function() {
        //    if(Notification.permission === 'granted'){
        //        new Notification('Termino la grabacion')
        //    }
             
           escuchando.textContent= 'se dejo de grabar'

            setTimeout(() => {
                escuchando.classList.remove('mostrar')
            }, 3000);
      
        recognition.stop();
    }

    recognition.onresult = function(e){

        console.log(e.results)
        // const {confidence, transcript} = e.results[0] [0];
        // const traduccion = document.querySelector('.traduccion')
        // const texto = document.createElement('p');
        // texto.textContent = '${transcript}'

        // traduccion.appendChild(texto)
    }
}