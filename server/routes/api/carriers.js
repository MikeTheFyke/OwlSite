const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET Carriers
router.get('/', async (req, res) => {
    const carriers = await loadCarriersCollection();
    res.send(await carriers.find({}).toArray())
    // .catch((error) => {
    //     console.log(error)
    // })
})

// ADD Carriers
router.post('/', async (req, res) => {
    const carriers = await loadCarriersCollection();
    await carriers.insertOne({
        carrierName: req.body.carrierName,
        carrierPhone: req.body.carrierPhone,
        carrierEmail: req.body.carrierEmail
    });
    res.status(201).send();
});

// DELETE Carriers
router.delete('/:id', async (req, res) => {
    const carriers = await loadCarriersCollection();
    await carriers.deleteOne({_id: new mongodb.ObjectID (req.params.id)})
    console.log("Deleting")
    res.status(200).send({});
})

// Connection to MongoDB
async function loadCarriersCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://mike_123:mike_123@cluster0.yp0q2.mongodb.net/owl_site?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    return client.db('owl_site').collection('carriers');
}


module.exports = router;