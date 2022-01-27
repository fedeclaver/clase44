const request = require('supertest')('http://localhost:8080')

const expect = require('chai').expect
//const generador = require('./generador/productos.js')

// let producto = generador.get()
// console.log(producto)

describe('test api rest full', () => {
    describe('GET', () => {
        it('debería retornar un status 200', async () => {
            let response = await request.get('/productos/listar')
            console.log(response.status)
            console.log(response.body)
            expect(response.status).to.eql(200)
        })
    })
    
})