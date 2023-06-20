const express = require('express');
const itemController = require('../controller/itemController');

const router = express.Router();

router.get('/api/items', itemController.getAllItems);
router.get('/api/items/:id', itemController.getItemById);
router.post('/api/items', itemController.createItem);
router.put('/api/items/:id', itemController.updateItem);
router.delete('/api/items/:id', itemController.deleteItem);

module.exports = router;
