const router = require('express').Router();

router.get('/', (req, res) => {
  res.redirect('/ui/index.html');
});

module.exports = router;

