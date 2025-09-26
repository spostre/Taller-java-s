const base = [ 'El conocimiento es poder.', 'Aprender nunca es una pérdida de tiempo!', 'Programar es divertido',] 
const frasesEstudiante = [ 'el conocimiento es poder', ' Aprender nunca es una pérdida de tiempo ', 'programar es divertido.', 'La práctica hace al maestro',] 

// ➞ [// "el conocimiento es poder",// " Aprender nunca es unapérdida de tiempo ",// "programar es divertido."// ]

function normalizarFrase(frase) {

    let fraseLimpia = frase.toLowerCase(); //

    fraseLimpia = fraseLimpia.trim();
    
    fraseLimpia = fraseLimpia.replace(/[.,!¡¿?]/g, '');
    
    return fraseLimpia;
}

function detectarPlagio(base, frasesEstudiante) {

}
    