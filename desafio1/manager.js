class ProductManager {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    addProduct({ title, description, price, thumbnail, code, stock }) {
        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            throw new Error('Not found');
        }

        const newProduct = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);

        return newProduct;
    }

    getProductById(productId) {
        const product = this.products.find(product => product.id === productId);

        if (!product) {
            throw new Error('Not found');
        }

        return product;
    }
}

const productManager = new ProductManager();

console.log(productManager.getProducts());

const newProduct = productManager.addProduct({
    title: 'producto prueba',
    description: 'producto de prueba',
    price: 200,
    thumbnail: 'Sin imagen',
    code: 'abc123',
    stock: 25
});

console.log(productManager.getProducts());