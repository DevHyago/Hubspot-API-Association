import { Router } from 'express';
import dealsController from './controllers/DealsController';

const router = Router();

router.put('/deals/association/contact', dealsController.addEmailClient);

export default router;