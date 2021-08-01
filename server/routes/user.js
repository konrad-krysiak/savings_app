import express from 'express';

import { getPosts } from '../controllers/posts.js';
//setup router
const router = express.Router();

router.get('/', getPosts);

export default router;
