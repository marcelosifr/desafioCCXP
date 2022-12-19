const dias = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const lancamento = '31 dec 2022'

function countdown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotal/60/60/24);
    const finalHoras = Math.floor(segTotal/60/60)%24;
    const finalMinutos = Math.floor(segTotal/60)%60;
    const finalSegundos = Math.floor(segTotal)%60;
    
    dias.innerHTML = finalDias + " D"
    horas.innerHTML = finalHoras + " H"
    minutos.innerHTML = finalMinutos + " M"
    segundos.innerHTML = finalSegundos + " S"

}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;
}

countdown();

setInterval(countdown, 1000)