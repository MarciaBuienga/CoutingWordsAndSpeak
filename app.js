//const form = document.getElementById('form');

const botaoFala = document.querySelector('#falar');
const texto = document.querySelector('textarea');

botaoFala.addEventListener('click', () =>{
    let falandoTexto = new SpeechSynthesisUtterance(texto.value);
    falandoTexto.rate= 0.7;
    speechSynthesis.speak(falandoTexto);
})

document.querySelector('#contar').addEventListener("click", function(evento){
    
    evento.preventDefault();

    const textoDigitado = document.getElementById('texto-area').value.trim(); // Remove espaços em branco no início e no final
    const palavras = textoDigitado.split(/\s+/); // Divide o texto em palavras usando expressão regular

    if (textoDigitado === '') {
        alert('Digite qualquer coisa');
    } else {
        alert(`O texto digitado tem ${palavras.length} palavra${palavras.length !== 1 ? 's' : ''}`);
    }
});

document.getElementById('texto-area').value = '';
