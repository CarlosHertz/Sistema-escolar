

//Modal
const button = document.querySelector('.btnOpenModal')
const modal = document.querySelector('.modal-container')
function openModal(){
    modal.classList.add('active')
}

function closeModal(){
    modal.classList.remove('active')
}


const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const resultado = document.querySelector('#resultado')
const buttonMedia = document.querySelector('#botaoMedia')
// RESULTADO
button.addEventListener('click', ()=>{
    event.preventDefault();

    let nota1unid = parseFloat(nota1.value)
    let nota2unid = parseFloat(nota2.value)
    let nota3unid = parseFloat(nota3.value)

    let media = ((nota1unid + nota2unid + nota3unid) / 3)

    if(nota1unid >= 0 && nota2unid >= 0 && nota3unid >= 0){
        if(media >= 7){
            resultado.innerHTML = `<h2> Media Final ${media.toFixed(2)}, Parabéns, Você Foi Aprovado !</h2>`
        }
        else if(media < 7 && media >=4){
            resultado.innerHTML = `<h2> Media Final ${media.toFixed(2)}, Que Pena, Você está na prova final </h2>`
        }else{
            resultado.innerHTML = `<h2> Media Final ${media.toFixed(2)}, Boa sorte na recuperação ! </h2>`
        }
    }else{
        resultado.innerHTML = `<h2> Valos Incorretos, Por favor Insira os valores Corretamente !</h2>`
    }  
    corModel(media, buttonMedia) 
})







