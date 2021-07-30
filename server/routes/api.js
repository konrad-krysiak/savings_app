const express = require('express');
const app = express();
const router = express.Router();

const testActions = require('../actions/api/test_db');
router.get('/', testActions.saveNote)


module.exports = router;