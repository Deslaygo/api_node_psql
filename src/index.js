const express = require('express');
const dotenv  = require('dotenv');
const cors    = require('cors');

//Routes
const usuarioRoutes = require('./routes/usuario.routes');
const productoRoutes = require('./routes/producto.routes');

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());

app.use('/api/v1',usuarioRoutes);
app.use('/api/v1',productoRoutes);

const port = process.env.API_PORT;


app.listen( port || 4000,() => console.log(`SERVER RUN ON PORT ${port}`));