const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/products', (req, res) => {
    const limit = req.query.limit;
    const products = require('./products.json');

    if (limit) {
        res.json(products.slice(0, limit));
    } else {
        res.json(products);
    }
});

app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const products = require('./products.json');
    const product = products.find(product => product.id === productId);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});