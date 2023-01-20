import express from 'express'
import * as dotenv from 'dotenv';
import cors from 'cors';

//Routes
import usuarioRoutes from './routes/usuario.routes.js';
import productoRoutes from './routes/producto.routes.js';

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());

app.use('/api/v1',usuarioRoutes);
app.use('/api/v1',productoRoutes);



app.listen(process.env.API_PORT || 4000)