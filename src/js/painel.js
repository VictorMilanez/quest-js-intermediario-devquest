const inputsText = document.querySelectorAll('.input')
const camposObrigatorios = document.querySelectorAll('.texto-obrigatorio')
const botaoEnviar = document.getElementById('btn-enviar')


botaoEnviar.addEventListener('click', ()=>{
    inputsPreenchidos();

    inputsNaoPreenchidos();

})

function inputsPreenchidos(){
    inputsText.forEach(input => {
        const inputsEstaoPreenchidos = input.value !== ""
        if(inputsEstaoPreenchidos){
            input.classList.add('preenchido')
        } else {
            input.classList.remove('preenchido')
        }
    });
}

function inputsNaoPreenchidos(){
    inputsText.forEach((input, indice) => {
        const inputsNaoPreenchidos = input.value === ""
        if(inputsNaoPreenchidos){
            input.classList.add('nao-preenchido')
            camposObrigatorios[indice].classList.remove('opacidade')
        } else {
            camposObrigatorios[indice].classList.add('opacidade')
        }
    });
}

