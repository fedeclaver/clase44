const faker = require('faker');
//faker.locale = 'es'

function generar() {
    return {
        nombre: faker.commerce.productName(),
        descripcion: faker.commerce.productDescription(),
        codigo: faker.commerce.product(),
        foto:  faker.image.business(),
        precio: faker.commerce.price(),
        stock: faker.datatype.number(1000)

    }
}

module.exports = generar;
