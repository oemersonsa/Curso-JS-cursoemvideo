/*var nome = prompt('Qual seu nome: ')
var idade = prompt('Qual sua idade: ')
var quanto = prompt('Digite um valor de 0 a 10: ')

var mair = idade >= 18 ? alert('Maior') : alert('Menor')

var seiLa = nome === 'emerson' ? alert(`Olá, ${nome}`) : alert(`Quem é ${nome}`)
var quantidade = nome.length >= 7 ? alert(`Seu nome tem ${nome.length} letras`) : alert(`seu nome tem ${nome.length} letras`)
var acertou = quanto == Math.random(0, 10) ? alert('Você acertou') : alert('Você errou')

var horario = prompt('Qual horario? ')
var local = prompt('Qual local? ')

var resp = local == 'tatuape' && horario == 20 ? alert('suave') : alert('nem fu...')*/
        

// var corpo = document.body
var p1 = document.getElementsByTagName('p')[1]
/*
var d = window.document.getElementById('msg')
d.style.background = 'green'
d.innerText = 'Estou aguardando...'
*/
var d = document.querySelector('div#msg')
d.style.background = 'blue'
document.body.style.background = 'black'
document.querySelector('div#msg').style.color = 'red' 