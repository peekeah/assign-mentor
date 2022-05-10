// const { MongoClient } = require('mongodb');

// module.exports = {
//     db: {}, 
//     async connect() {
//         try {
//             const client = await MongoClient.connect('mongodb://localhost:27017');
//             // const client = await MongoClient.connect(process.env.MONGO_URL);
//             this.db = client.db('assign_mentor');
//             console.log(process.env.MONGO_URL);
//             // console.log(this.db);
//         } catch (err) {
//             console.log(err);
//         }
//     }
// }
