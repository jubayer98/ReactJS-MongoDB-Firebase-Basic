const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8irzt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        //await client.connect();

        const visaCollection = client.db('visaDB').collection('visa');
        const applicationCollection = client.db('visaDB').collection('application');

        app.get('/visa', async (req, res) => {
            const cursor = visaCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/application', async (req, res) => {
            const cursor = applicationCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        app.get('/visa/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await visaCollection.findOne(query);
            res.send(result);
        })

        app.put('/visa/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true }
            const updatedVisa = req.body;
            const visa = {
                $set: {
                    country_image: updatedVisa.country_image,
                    country: updatedVisa.country,
                    visa_type: updatedVisa.visa_type,
                    processing_time: updatedVisa.processing_time,
                    required_documents: updatedVisa.required_documents,
                    description: updatedVisa.description,
                    age_restriction: updatedVisa.age_restriction,
                    fee: updatedVisa.fee,
                    validity: updatedVisa.validity,
                    application_method: updatedVisa.application_method
                }
            }

            const result = await visaCollection.updateOne(filter, visa, options);
            res.send(result);
        })

        app.post('/visa', async (req, res) => {
            const newVisa = req.body;
            //console.log(newVisa);
            const result = await visaCollection.insertOne(newVisa);
            res.send(result);
        })

        app.post('/application', async (req, res) => {
            const newApplication = req.body;
            //console.log(newApplication);
            const result = await applicationCollection.insertOne(newApplication);
            res.send(result);
        })

        app.delete('/visa/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await visaCollection.deleteOne(query);
            res.send(result);
        })

        app.delete('/application/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await applicationCollection.deleteOne(query);
            res.send(result);
        })

        // Send a ping to confirm a successful connection
        //await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Server is running')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
