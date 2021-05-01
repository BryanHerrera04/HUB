import { Router } from 'express';
import {getTdamage, createTdamage, deleteTdamage, getOneTdamage, putTdamage } from '../controllers/t_damage.controller';
const router = Router();

router.post('/', createTdamage);
router.get('/', getTdamage);
router.get('/:id', getOneTdamage);
router.delete('/:id', deleteTdamage);
router.put('/:id', putTdamage)

export default router;