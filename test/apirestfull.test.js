const request = require('supertest')('http://localhost:8080')

const expect = require('chai').expect
const generador = require('./generador/productos.js')




// console.log(producto)


describe('test api rest full', () => {
  
    describe('GET', () => {
        it('debería listar y retornar un status 200', async () => {
            let response = await request.get('/productos/listar')
            console.log(response.status)
            console.log(response.body)
            expect(response.status).to.eql(200)
        })
    })
    describe('POST', () => {
        it('debería incorporar un Producto', async () => {
            let productos = generador.generar()

            let response = await request.post('/productos/agregar').send(productos)
            expect(response.status).to.eql(200)
            expect(response.body.msg).to.contain('Producto insertado correctamente')
      
        })
    })
        describe('PUT', () => {
            it('debería modificar un Producto', async () => {
                let productos = generador.generar()
    
                let response = await request.put('/productos/actualizar/5').send(productos)
                expect(response.status).to.eql(200)
                expect(response.body.msg).to.contain('Producto actualizado correctamente')
          
            })    
        })
        describe('DETELE', () => {
            it('debería eliminar un Producto', async () => {
                let productos = generador.generar()
    
                let response = await request.delete('/productos/borrar/21').send(productos)
                expect(response.status).to.eql(200)
                expect(response.body.msg).to.contain('Producto eliminado correctamente')
          
            })    
        })

})

