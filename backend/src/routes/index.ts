import express from 'express'
import contentRoute from './content'
import brainRoute from './content'
import {signin, signup} from '../controllers/authController';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

router.use('/content', contentRoute);
router.use('/brain', brainRoute);

export default router;