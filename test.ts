// 1;  boolean,number,string 

2; let isnumber :number = 2 
let isstring :string = 'ciao' 
let isboolean :boolean = true 

3; const greet = (name:string) =>{
    return "Ciao" + name
}
 4;const sum = (a:number, b:number) =>{
    return a+b
 }
 sum (17,80)

 5; const calcoloiva = (prezzo:number) => {
     const iva:number = 0.22
     const calcolototale:number = prezzo + (prezzo * iva)
     return calcolototale
 }

 6; const uni: string = "cipo"
 const te:string ="lle"
 const insieme =(uni:string,te:string) =>{
    return uni+te
   
 }
 console.log(`Concatenazione: ${insieme(uni, te)}`)