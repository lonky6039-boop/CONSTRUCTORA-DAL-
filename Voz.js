export function iniciarVoz(callback) {
  const reconocimiento = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

  reconocimiento.lang = "es-AR";

  reconocimiento.onresult = (event) => {
    const texto = event.results[0][0].transcript;
    callback(texto);
  };

  reconocimiento.start();
}
