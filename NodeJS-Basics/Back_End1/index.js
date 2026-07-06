const { MongoClient } = require("mongodb");

const url = "mongodb+srv://user2000:Ahmed11ss@learn-mongodb.j8o5kyg.mongodb.net/?appName=learn-MongoDB&retryWrites=true&w=majority";

const client = new MongoClient(url);

const main = async () => {
    // connect to the Database
    await client.connect();
    console.log("Connected successfully to server");
    
    // choose database  to interact with
    const db = client.db("Code_Zone");

    // choose collection to interact with
    const collection = db.collection("courses");

    await collection.insertOne({
        title: "Introduction to MongoDB",
        description: "Learn the basics of MongoDB",
        duration: "2 hours"
    });

    //Get uery
    //GET All Courses
    const data = await collection.find().toArray();
    
    console.log(data);
}

main();