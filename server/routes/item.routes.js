const ItemController = require('../controllers/item.controller');
module.exports = function (app) {
    app.get('/api/item', ItemController.getItem);
    app.post('/api/item/new', ItemController.createItem);
    app.get('/api/item/:id', ItemController.getOneItem);
    app.put('/api/item/edit/:id', ItemController.updateItem);
    app.delete('/api/item/:id', ItemController.deleteItem);
}
