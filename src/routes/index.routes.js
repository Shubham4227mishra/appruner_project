const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.redirect('/ui/index.html');
});

module.exports = router;

