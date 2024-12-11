'use strict'
// 1;  boolean,number,string
const isnumber = 2
const isstring = 'ciao'
const isboolean = true
const greet = (name) => {
  return 'Ciao' + name
}
4
const sum = (a, b) => {
  return a + b
}
sum(17, 80)
5
const calcoloiva = (prezzo) => {
  const iva = 0.22
  const calcolototale = prezzo + prezzo * iva
  return calcolototale
}
6
const uni = 'cipo'
const te = 'lle'
const insieme = (uni, te) => {
  return uni + te
}
console.log(`Concatenazione: ${insieme(uni, te)}`)
