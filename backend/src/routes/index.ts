import express from 'express'
import {signin, signup} from '../controllers/authController';
import { authenticateUser } from '../middlewares/authMiddleware';
import { deleteContent, getContents, postContents } from '../controllers/contentsController';
// import { shareLink } from '../controllers/brainController';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

router.post('/content', authenticateUser, postContents);

router.get('/content', authenticateUser, getContents);
router.delete('/content', authenticateUser, deleteContent);

router.post('/brain/share', authenticateUser);

router.get('/brain/:shareLink')

export default router;