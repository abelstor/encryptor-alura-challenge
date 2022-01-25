
const encriptarButton = document.querySelector('#btn-encriptar');
const desencriptarButton = document.querySelector('#btn-desencriptar');
const seleccionarButton = document.querySelector('#btn-copy');
const resultado = document.querySelector('#msg');

encriptarButton.addEventListener('click', (e) => {

    e.preventDefault();
    const form = document.querySelector('#text-form');
    const text = form.input__texto.value;

    let finalText = '';

    for (let i = 0; i < text.length; i++) {

        let e = text[i];

        switch (e) {
            case 'a':
                e = 'ai';
                break;
            case 'e':
                e = 'enter';
                break;
            case 'i':
                e = 'imes';
                break;
            case 'o':
                e = 'ober';
                break;
            case 'u':
                e = 'ufat';
                break;
            default:
                break;
        }
        finalText += e;
    }
    resultado.value = finalText;
    document.getElementById('input__texto').value = '';

});


desencriptarButton.addEventListener('click', (e) => {

    e.preventDefault();
    const form = document.querySelector('#text-form');
    const text = form.input__texto.value;

    let ra = /ai/gi;
    let re = /enter/gi;
    let ri = /imes/gi;
    let ro = /ober/gi;
    let ru = /ufat/gi;

    let finalText = text.replace(ra, 'a').replace(re, 'e').replace(ri, 'i').replace(ro, 'o').replace(ru, 'u');

    resultado.value = finalText;
    document.getElementById('input__texto').value = '';

});


seleccionarButton.addEventListener('click', (e) => {

    e.preventDefault();
    const resultado = document.getElementById('msg');

    resultado.setSelectionRange(0, 99999);
    resultado.focus();
    navigator.clipboard.writeText(resultado.value);

});