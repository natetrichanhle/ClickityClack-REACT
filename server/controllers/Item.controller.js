const { Item } = require('../models/item.model');
module.exports.getItem = (request, response) => {
    Item.find()
        .then(item => response.json(item))
        .catch(err => response.json(err))
}
// The method below is new
module.exports.createItem = (request, response) => {
    const { name, price, description, category } = request.body;
    Item.create({
        name,
        price,
        description,
        category
    })
        .then(item => response.json(item))
        .catch(err => response.status(400).json(err));
}

module.exports.getOneItem = (request, response) => {
    Item.findOne({ _id: request.params.id })
        .then(item => response.json(item))
        .catch(err => response.json(err))
}

module.exports.updateItem = (request, response) => {
    Item.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedItem => response.json(updatedItem))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteItem = (request, response) => {
    Item.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}



