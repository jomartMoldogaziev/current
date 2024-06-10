let transSumE1 = document.getElementById('currency')
let mountE1 = document.getElementById('mount')
let sumE1 = document.getElementById('sum')
let resultE1 = document.getElementById('result')

const sumCurrent = ()=>{
    let transSum = parseFloat(transSumE1.value)
    let mount = parseFloat(mountE1.value)

    let res = transSum*mount

    resultE1.innerHTML='Суммасы:' +' ' + res +''+ 'сом'
}
sumE1.addEventListener('click',sumCurrent)