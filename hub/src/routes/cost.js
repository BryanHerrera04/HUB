import { Router } from 'express';
import { createCost, getCosts, getOneCost, deleteCost, putCost, getCostByLdamage, getCostByTdamage, getCostByTpainting } from '../controllers/cost.controller';
const router = Router();

router.post('/', createCost);
router.get('/', getCosts);
router.get('/:id', getOneCost);
router.delete('/:id', deleteCost);
router.put('/:id', putCost);
router.get('/l_damage/:ld_id', getCostByLdamage);
router.get('/t_damage/:td_id', getCostByTdamage);
router.get('/t_painting/:tp_id', getCostByTpainting);


export default router;