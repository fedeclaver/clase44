const faker = require('faker');
faker.locale = 'es'

function generar() {
    return {
        nombre: faker.commerce.productName(),
        descripcion: faker.commerce.productDescription(),
        codigo:faker.datatype.number({min: 10000, max: 100000}),
        foto:  faker.image.business(),
        precio: faker.commerce.price(),
        stock: faker.datatype.number({min: 100, max: 1000}),

    }
}

module.exports = {generar};
