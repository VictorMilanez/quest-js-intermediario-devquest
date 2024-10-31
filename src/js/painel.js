const inputsText = document.querySelectorAll('.input')
const botaoEnviar = document.getElementById('btn-enviar')


botaoEnviar.addEventListener('click', (event)=>{
    event.preventDefault()

    inputsText.forEach((input)=>{
        if(input.value){
            input.classList.add('preenchido')
            input.nextElementSibling.classList.add('opacidade')
        } else {
            input.classList.remove('preenchido')
            input.classList.add('nao-preenchido')
            input.nextElementSibling.classList.remove('opacidade')
        }
    })

})


