const mongoose = require('mongoose');
const winston = require('winston');
const Item = require('../models/item');



const getAllItems = (req, res, next) => {
  Item.find()
    .then((items) => {
      res.json(items);
    })
    .catch((error) => {
      winston.error('Failed to retrieve items', error);
      next(error);
    });
};

const getItemById = (req, res, next) => {
  const itemId = req.params.id;

  Item.findById(itemId)
    .then((item) => {
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.json(item);
    })
    .catch((error) => {
      winston.error('Failed to retrieve item', error);
      next(error);
    });
};

const createItem = (req, res, next) => {
  const newItem = new Item({
    name: req.body.name,
    description: req.body.description,
  });

  newItem.save()
    .then((item) => {
      res.json(item);
    })
    .catch((error) => {
      winston.error('Failed to create item', error);
      next(error);
    });
};

const updateItem = (req, res, next) => {
  const itemId = req.params.id;

  Item.findByIdAndUpdate(itemId, req.body, { new: true })
    .then((item) => {
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.json(item);
    })
    .catch((error) => {
      winston.error('Failed to update item', error);
      next(error);
    });
};

const deleteItem = (req, res, next) => {
  const itemId = req.params.id;

  Item.findByIdAndDelete(itemId)
    .then((item) => {
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.json({ message: 'Item deleted successfully' });
    })
    .catch((error) => {
      winston.error('Failed to delete item', error);
      next(error);
    });
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
