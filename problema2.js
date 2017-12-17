const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/photos')
.then(function(respuesta){
    var listaDeFotos = respuesta.data;
    // AGREGUE UNA FUNCION QUE CON TRANSFORME LOS OBJETOS EN  fotos en objetos PRODUCTOS
    // LUEGO PARA CADA UNO DE ESTOS OBJETOS LLAME A LA FUNCION postData (El servidor en .Net debe estar en ejecucion)
})
.catch(function(error){
    console.log(error);
});




function postData(productData){
    axios.post('http://localhost:56934/api/product', productData)
    .then(function (response) {
        var newProduct = response.data;
        console.log(newProduct.Id);
    })
    .catch(function (error) {
        console.log(error);
    });
}


//=====ATRIBUTOS DE CADA FOTO
// albumId	1
// id	1
// title	"accusamus beatae ad faci… cum similique qui sunt"
// url	"http://placehold.it/600/92c952"
// thumbnailUrl	"http://placehold.it/150/92c952"
