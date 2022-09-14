const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog');


router.get('/', blogController.index)
router.get('/:id', blogController.show)
router.post('/', blogController.create)

module.exports = router;
