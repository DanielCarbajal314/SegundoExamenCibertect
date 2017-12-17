const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/photos')
.then(function(respuesta){
    var listaDeFotos = respuesta.data;
    // AGREGUE UNA FUNCION QUE IMPRIMA TODOS LOS DATOS FOTO POR FOTO
})
.catch(function(error){
    console.log(error);
});


//=====ATRIBUTOS DE CADA FOTO
// albumId	1
// id	1
// title	"accusamus beatae ad faci… cum similique qui sunt"
// url	"http://placehold.it/600/92c952"
// thumbnailUrl	"http://placehold.it/150/92c952"
