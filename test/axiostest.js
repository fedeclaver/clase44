const axios = require('axios');
const { now } = require('mongoose');

const URL = 'http://localhost:8080'


async function login() {
    try {
        let response = await axios.post(URL + '/auth/login', 
        {
            "username": "fedeclaver@gmail.com",
            "password":"Sofia0911"
        });
        return response.data;
    } catch (error) {
        console.error(error.response);
    }
};


async function createProducto() {
    try {
        let response = await axios.post(URL + '/productos/agregar', 
        
        {    
            nombre: 'Prueba',
            descripcion: 'Prueba Gris',
            codigo: 1111,
            foto: 'https://i.picsum.photos/id/338/200/200.jpg?hmac=5S5SeR5xW8mbN3Ml7wTTJPePX392JafhcFMGm7IFNy0',
            precio: 1563,
            stock: 111
          });
        return response.data;
    } catch (error) {
        console.error(error.response);
    }
};

async function obtenerProductos() {
    try {
        let response = await axios.get(URL + '/productos/listar');
        return response.data;
    } catch (error) {
        console.error(error.response);
    }
};

async function getProductbyId() {
    try {
        const productsLists = await axios.get(URL + '/productos/listar');
        const idProduct = productsLists.data[productsLists.data.length - 1]._id;

        let response = await axios.get(URL + `/productos/listar/${idProduct}`);
        return response.data;
    } catch (error) {
        console.error(error.response);
    }
};

async function updateProducto() {
    try {
        const productsLists = await axios.get(URL + '/productos/listar/');
        const idProduct = productsLists.data[productsLists.data.length - 1]._id;

        let response = await axios.put(URL + `/productos/actualizar/${idProduct}`, 
        {
        descripcion: 'Prueba actualizado',
        codigo: 2222,
        });
        return response.data;
    } catch (error) {
        console.error(error.response);
    }
};

async function deleteProduct() {
    try {
        const productsLists = await axios.get(URL + '/productos/listar/');
        const idProduct = productsLists.data[productsLists.data.length - 1]._id;

        let response = await axios.delete(URL + `/productos/borrar/${idProduct}`);
        return response.data;
    } catch (error) {
        console.error(error.response);
    }
};

(async () => {
   // console.log('LOGIN USUARIO->')
   // console.log(await login())
    //console.log('CREAR PRODUCT->')
    //console.log(await createProducto())

    console.log('OBTENER PRODUCTOS->')
    console.log(await obtenerProductos())

   // console.log('GET PRODUCT BY ID ->')
    //console.log(await getProductbyId())

    console.log('UPTDATE PRODUCT ->')
   console.log(await updateProducto())

    //console.log('DELETE PRODUCT ->')
   // console.log(await deleteProduct())
})();