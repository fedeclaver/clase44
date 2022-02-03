const productController = require('../controllers/ProductosControllerGraphql.js');

// listar todos los productos
const getAllProducts = async () => {
    return await productController.list();
}

// listar un producto por id
const getProductById = async (args) => {
    const id = args.id;
    return await productController.listId(id);
}

// guardar producto
const saveProduct = async ({ title, price, thumbnail }) => {
    let product = { title, price, thumbnail };
    return await productController.save(product);
}


// borrar un producto por id
const deleteProduct = async (args) => {
    const id = args.id;
    return await productController.delete(id);
}

// Root resolver
const root = {
    products: getAllProducts,
    product: getProductById,
    saveProduct: saveProduct,
    deleteProduct: deleteProduct
};

module.exports = root;