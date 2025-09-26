const moonSymbol = 1;         
const moonSymbolReversed = 5; 
const femaleSymbol = 10;      
const strangeSymbol = 50; 
const any = 100

const caldero1 = prompt("Caldero 1: Ingrese uno o varios simbolos ♁/☾/☽/⚕");
const caldero2 = prompt("Caldero 2: Ingrese uno o varios simbolos ♁/☾/☽/⚕");
const caldero3 = prompt("Caldero 3: Ingrese uno o varios simbolos ♁/☾/☽/⚕");
const caldero4 = prompt("Caldero 4: Ingrese uno o varios simbolos ♁/☾/☽/⚕");
const caldero5 = prompt("Caldero 5: Ingrese uno o varios simbolos ♁/☾/☽/⚕");

let result = 0;

const allsymbols = [caldero1, caldero2, caldero3, caldero4, caldero5];

for (const caldero of allsymbols) {

    if (caldero) {
        if (caldero.includes("☽")) {
            result += moonSymbol; 
        }
        if (caldero.includes("☾")) {
            result += moonSymbolReversed;
        }
        if (caldero.includes("♁")) {
            result += femaleSymbol;
        }
        if (caldero.includes("⚕")) {
            result += strangeSymbol;
        }
        if (caldero.isNaN) {
            result += any;
        }
    }
}

alert(`El total de los simbolos es: ${result}`);
console.log(`El total de los simbolos es: ${result}`);