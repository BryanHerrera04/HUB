import { Router } from 'express';
import { getTpainting, createTpainting, deleteTpainting, getOneTpainting, putTpainting } from '../controllers/t_painting.controller';
const router = Router();

router.post('/', createTpainting);
router.get('/', getTpainting);
router.get('/:id', getOneTpainting);
router.delete('/:id', deleteTpainting);
router.put('/:id', putTpainting)

export default router;