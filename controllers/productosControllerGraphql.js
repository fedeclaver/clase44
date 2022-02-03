//Agrego la vista de productoss 
const productos = require('../modelos/ProductosGraphql.js');

class ProductosControllerGraphql {
    //Listar
    async list() {
        const products = await productos.find({});
        if (products.length > 0) {
            return products;
        } else {
            return [];
        }
    };
    //Listar por ID
    async listId(id) {
        return await productos.findById(id);
    }

    // Guardar
    async save(data) {
        if (data.title.trim().length < 1) {
            throw new Error("Debe ingresar el título.");
        } else if (isNaN(data.price)) {
            throw new Error("Ingrese un NÚMERO");
        } else if (data.price < 1) {
            throw new Error("Ingrese un número mayor a 0");
        } else {
            return await productos.create(data);
        }
    };

    //Actualizar
    async update(id, data) {
        if (data.title.trim().length < 1) {
            throw new Error("Debe ingresar el título.");
        } else if (isNaN(data.price)) {
            throw new Error("Ingrese un NÚMERO");
        } else if (data.price < 1) {
            throw new Error("Ingrese un número mayor a 0.");
        } else {
            return await productos.findOneAndUpdate({_id: id}, data);
        }
    };

    // Eliminar
    async delete(id) {
        return await productos.deleteOne({ _id: id });
    };

}

module.exports = new ProductosControllerGraphql();