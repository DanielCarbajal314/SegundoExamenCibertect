const axios = require('axios');

//=====ATRIBUTOS DE CADA FOTO
// albumId	1
// id	1
// title	"accusamus beatae ad faci… cum similique qui sunt"
// url	"http://placehold.it/600/92c952"
// thumbnailUrl	"http://placehold.it/150/92c952"


axios.get('https://jsonplaceholder.typicode.com/photos')
.then(function(respuesta){
    var listaDeFotos = respuesta.data;
    // AGREGUE UNA FUNCION QUE CREEN UN DICCIONARIO CUYAS LLAVES SEAN LAS PALABRAS POR SEPADADO DEL TITULO DE CADA FOTO
    // Y CUYO VALOR ES LA CANTIDAD DE VECES QUE APARECEN EN UN TITULO DE UNA FOTO
    // TRANSFORMA ESTE DICCIONARIO EN UN ARREGLO DE OBJETOS FRECUENCIA :
        // {
        //     Palabra: "Lorem"
        //     Contador: "123"
        // }
    // ORDENAR ESTA LISTA DE MAYOR A MENOR POR EL ATRIBUTO "Contador"
    // Imprimir la lista de objetos    
})
.catch(function(error){
    console.log(error);
});


