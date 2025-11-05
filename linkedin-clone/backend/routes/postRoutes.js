import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { userId, userName, text } = req.body;
    if (!userId || !userName || !text) return res.status(400).json({ message: 'Missing fields' });

    const post = new Post({ userId, userName, text });
    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
