import express, { json } from 'express';
import morgan from 'morgan';
import costRoutes from './routes/cost';
import l_damageRoutes from './routes/l_damage';
import t_damageRoutes from './routes/t_damage';
import t_paintingRoutes from './routes/t_painting';

const app = express();

app.use(morgan('dev'));
app.use(json());
app.use('/api/cost', costRoutes);
app.use('/api/level-damage', l_damageRoutes);
app.use('/api/type-damage', t_damageRoutes);
app.use('/api/type-painting', t_paintingRoutes);

export default app;
