const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog');


router.get('/', blogController.index)
router.get('/', blogController.show)
router.get('/', blogController.create)

module.exports = router;
