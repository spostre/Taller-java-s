let texto1 = prompt("ingrese una palabra aqui:")
let texto2 = prompt("ingrese otra palabra aqui:")


esAnagrama(texto1, texto2)

function esAnagrama(palabra1, palabra2) {

  //minusculas
  const p1 = palabra1.toLowerCase(); 
  const p2 = palabra2.toLowerCase();

  //diferencia de conteo de letras
  if (p1.length !== p2.length) {
    return false;
  }

  //Parte el string en letras individuales creando un array con ellas
  const arrayLetras1 = p1.split('');
  //Ordena las letras del array en orden alfabetico
  arrayLetras1.sort();
  //Une todas las letras en el nuevo orden para que sea una sola palabra
  const palabraOrdenada1 = arrayLetras1.join('');

  const arrayLetras2 = p2.split('');
  arrayLetras2.sort();
  const palabraOrdenada2 = arrayLetras2.join('');

  if (palabraOrdenada1 === palabraOrdenada2) {
    return console.log("es anagrama");
  } else {
    return console.log("no es anagrama");
  }
}