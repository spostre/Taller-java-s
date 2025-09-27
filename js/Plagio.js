const base = [ 'El conocimiento es poder.', 'Aprender nunca es una pérdida de tiempo!', 'Programar es divertido',] 
const frasesEstudiante = [ 'el conocimiento es poder', ' Aprender nunca es una pérdida de tiempo ', 'programar es divertido.', 'La práctica hace al maestro',] 

// ➞ [// "el conocimiento es poder",// " Aprender nunca es unapérdida de tiempo ",// "programar es divertido."// ]

function normalizarFrase(frase) {
    
    //minusculas
    let fraseLimpia = frase.toLowerCase();
    //elimina espacios al principio y al final
    fraseLimpia = fraseLimpia.trim();
    
    //reemplaza los simbolos por espacios en blanco (la g es de global)
    fraseLimpia = fraseLimpia.replace(/[.,!¡¿?]/g, '');
    
    return fraseLimpia;
}


console.log(normalizarFrase(" ¡Hola, Mundo! ")); 


function normalizarFrase(frase) {
    return frase.toLowerCase().trim().replace(/[.,!¡¿?]/g, '');
}

//Hace un conteo de las frases que se repiten entre los 2 arrays principales y crea una lista con las que se repiten, osea todas
function detectarPlagio(base, frasesEstudiante) {
    
    const frasesPlagiadas = [];

    for (const fraseEst of frasesEstudiante) {
        
        const fraseEstNormalizada = normalizarFrase(fraseEst);

        for (const fraseBase of base) {
            
            const fraseBaseNormalizada = normalizarFrase(fraseBase);

            if (fraseEstNormalizada === fraseBaseNormalizada) {

                //Guarda las frases en el array de los plagios
                frasesPlagiadas.push(fraseEst);

                break; 
            }
        }
    }

    return frasesPlagiadas;
}

const resultado = detectarPlagio(base, frasesEstudiante);

console.log(resultado);
    