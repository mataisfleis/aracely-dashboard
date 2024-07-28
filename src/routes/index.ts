import { Router } from 'express';
import homeRouter from './home.routes';
import authRoutes from './auth.routes';
import dashRoutes from './dash.routes';

const router = Router();

router.use('/', homeRouter);
router.use('/auth', authRoutes);
router.use('/dash', dashRoutes);

export default router;