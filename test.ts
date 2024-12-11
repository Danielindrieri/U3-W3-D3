// 1;  boolean,number,string
2
const isnumber: number = 2
const isstring: string = 'ciao'
const isboolean: boolean = true

3
const greet = (name: string) => {
  return 'Ciao' + name
}
console.log(greet('Mario'))

4
const sum = (a: number, b: number) => {
  return a + b
}
console.log('Somma:', sum(17, 80))

5
const calcoloiva = (prezzo: number) => {
  const iva: number = 0.22
  const calcolototale: number = prezzo + prezzo * iva
  return calcolototale
}
console.log('Calcolo IVA (su 100):', calcoloiva(100))

6
const uni: string = 'cipo'
const te: string = 'lle'
const insieme = (uni: string, te: string) => {
  return uni + te
}
console.log(`Concatenazione: ${insieme(uni, te)}`)

//  7; con type union possiamo uniri piu tipi e possiamo segliere
// tra i tipi primitivi principali (string,boolean,ecc..)

8
const variable: null | number | undefined = 10
console.log('Variable:')

9
type giorni =
  | 'Lunedi'
  | 'Martedi'
  | 'Mercoledi '
  | 'Giovedi'
  | 'Venerdi'
  | 'Sabato'
  | 'Domenica'

type SpecialType = string | number

10
const numbers: Number[] = [1, 2, 3]
const numbero: SpecialType[] = [1, 2, 3]

11
const strano: [string, string, string, number, number] = [
  'Daniel',
  'Marco',
  'Zampa',
  100,
  40,
]
console.log('Strano tuple:', strano)
// 12;le interfacce servono per indicarci la forma degli oggetti,
// i type si utilizzano sopratutto per le unioni di tipi ptimitivi

13
interface person {
  firstname: string
  lastname: string
  age: number
}
14
interface Utente {
  email: SpecialType
  telefono?: number
}

15
interface student {
  studente: 'Marco'
  voti: ['prog1', 'prog2', 'prog3']
}
console.log('Student:')

16
interface Veicolo {
  auto: {
    motore: string
    gomme: string
    marca: string
  }
}

17
const miaAuto: Veicolo = {
  auto: {
    motore: 'MultiJet',
    gomme: '18 pollici',
    marca: 'Alpha Romeo',
  },
}

console.log('Mia Auto:', miaAuto)

// 18;genercis è un dato passato come parametro per una interfaccia
// serve per rendere piu generico,riutilizzabile un interfaccia

// 19;Sì, in TypeScript è possibile avere più tipi generici in un'interfaccia.
// quest oserve quando vuoi che la tua interfaccia sia piu generica quindi puoi passare piu tipi

20
interface ApiResponse<T> {
  // Lo stato della richiesta, ad esempio "success" o "error"
  status: 'success' | 'error'

  // I dati restituiti dall'API, tipizzato con T per maggiore elasticità
  data?: T

  error?: {
    code: string
    message: string
  }
}
