import { Router } from 'express';
import {getLdamage, createLdamage, deleteLdamage, getOneLdamage, putLdamage } from '../controllers/l_damage.controller';
const router = Router();

router.post('/', createLdamage);
router.get('/', getLdamage);
router.get('/:id', getOneLdamage);
router.delete('/:id', deleteLdamage);
router.put('/:id', putLdamage)

export default router;