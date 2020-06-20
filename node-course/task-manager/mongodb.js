// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'tast-manager';

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne(
    //   {
    //     name: 'Kevin',
    //     age: 27,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return new Error(`Unable to insert user`);
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Paul',
    //       age: 26,
    //     },
    //     {
    //       name: 'Jake',
    //       age: 18,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return new Error(`Unable to insert documents`);
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       description: 'Task 1',
    //       completed: true,
    //     },
    //     {
    //       description: 'Task 2',
    //       completed: false,
    //     },
    //     {
    //       description: 'Task 3',
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) return new Error(`Unable to insert documents`);

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').findOne(
    //   { _id: ObjectID('5eee11fbcfabac37ac3f7f21') },
    //   (error, result) => {
    //     if (error) return new Error(`Can't find document`);

    //     console.log(result);
    //   }
    // );

    // .find returns a cursor to the data
    // db.collection('users')
    //   .find({ age: 27 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // the cursor allow you to run other mehtods like count on the data
    // db.collection('users')
    //   .find({ age: 27 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // db.collection('tasks').findOne(
    //   { _id: ObjectID('5eee16dcd48997515cc67ca0') },
    //   (error, task) => {
    //     console.log(task);
    //   }
    // );

    // db.collection('tasks')
    //   .find({ completed: false })
    //   .toArray((error, task) => {
    //     console.log(task);
    //   });

    // const updatePromise = db.collection('users').updateOne(
    //   {
    //     _id: new ObjectID('5eece0bc0ee001492816d8e1'),
    //   },
    //   {
    //     $inc: {
    //       age: 1,
    //     },
    //   }
    // );

    // updatePromise
    //   .then((user) => {
    //     console.log(user);
    //   })
    //   .then((err) => console.log(err));

    // db.collection('tasks')
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err));

    // db.collection('users')
    //   .deleteMany({ age: 27 })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => console.log(err));

    db.collection('tasks')
      .deleteOne({ description: 'Task 1' })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }
);
