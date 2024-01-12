const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// Datos de usuarios (simulación, deberías usar una base de datos)
const users = [
  { id: 1, username: 'user', password: 'password', role: 'usuario' },
  { id: 2, username: 'admin', password: 'adminpassword', role: 'admin' }
];

// Rutas
app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/login.html');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    req.session.user = user;
    res.redirect('/products');
  } else {
    res.redirect('/login?error=1');
  }
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/views/register.html');
});

app.post('/register', (req, res) => {
  // Lógica de registro aquí
  // Guardar usuario en la base de datos simulada
  res.redirect('/login');
});

app.get('/products', (req, res) => {
  if (req.session.user) {
    res.sendFile(__dirname + '/views/products.html');
  } else {
    res.redirect('/login');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});