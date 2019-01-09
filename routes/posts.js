const express = require('express');
const checkoutLogin = require('../middlewares/check').checkLogin;

const router = express.Router();

// GET /posts所有用户或者特定用户的文章页
// 例如：/posts?author = xxx
router.get('/', (req, res, next) => {
  res.send('主页');
});

// POST /posts/create 发表一篇文章
router.post('/create', checkLogin, (req, res, next) => {
  res.send('发表文章');
});

// GET /posts 发表文章页
router.get('/create', checkLogin, (req, res, next) => {
  res.send('文章发表页');
});

// GET /posts/postId 单独一篇的文章页
router.get('/:postId', checkLogin, (req, res, next) => {
  res.send('文章详情页');
});

// GET /posts/:postId/edit 更新文章页面
router.get('/posts/:postId/edit', checkLogin, (req, res, next) => {
  res.send('文章详情页');
});

// POST /posts/:postId/edit 更新文章页面
router.post('/posts/:postId/edit', checkLogin, (req, res, next) => {
  res.send('更新文章');
});

// GET /posts/:postId/remove 删除一篇文章
router.get('/:postId/remove', checkLogin, (req, res, next) {
  res.send('删除文章');
});

module.exports = router;