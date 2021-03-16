const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET Orders
router.get('/', async (req, res) => {
    const orders = await loadOrdersCollection();
    res.send(await orders.find({}).toArray());
})

// ADD Orders
router.post('/', async (req, res) => {
    const orders = await loadOrdersCollection();
    await orders.insertOne({
        name: req.body.carrierName,
        serviceType: req.body.serviceType,
        destinationCity: req.body.destinationCity,
        weight: req.body.weight,
        numberSkids: req.body.numberSkids,
        numberSpots: req.body.numberSpots,
        cost: req.body.cost,
        customerName: req.body.customerName,
        createdAt: new Date()
    });
    res.status(201).send();
});

// DELETE Orders
router.delete('/:id', async (req, res) => {
    const orders = await loadOrdersCollection();
    await orders.deleteOne({_id: new mongodb.ObjectID (req.params.id)})
    console.log("Deleting")
    res.status(200).send({});
})

// Connection to MongoDB
async function loadOrdersCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://mike_123:mike_123@cluster0.yp0q2.mongodb.net/owl_site?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return client.db('owl_site').collection('orders');
}

module.exports = router;