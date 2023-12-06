const express = require('express');
const router = express.Router();

const { getAlltasks } = require('../controllers/tasks');

router.route('/').get(getAlltasks);

module.exports = router;
