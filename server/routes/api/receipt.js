const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET Receipt
router.get('/', async (req, res) => {
    const receipts = await loadReceiptsCollection();
    res.send(await receipts.find({}).toArray())
    // .catch((error) => {
    //     console.log(error)
    // })
})

// ADD Receipt
router.post('/', async (req, res) => {
    const receipts = await loadReceiptsCollection();
    await receipts.insertOne({
        name: req.body.name,
        size: req.body.size,
        type: req.body.type,
        mount: req.body.mount,
        quantity: req.body.quantity,
        weight: req.body.weight
    });
    res.status(201).send();
});

// DELETE Post
router.delete('/:id', async (req, res) => {
    const receipts = await loadReceiptsCollection();
    await receipts.deleteOne({_id: new mongodb.ObjectID (req.params.id)})
    console.log("Deleting")
    res.status(200).send({});
})

// Connection to MongoDB
async function loadReceiptsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://mike_123:mike_123@cluster0.yp0q2.mongodb.net/owl_site?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    return client.db('owl_site').collection('receipt');
}


module.exports = router;