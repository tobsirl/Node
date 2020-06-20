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

    db.collection('users').findOne(
      { _id: ObjectID('5eee11fbcfabac37ac3f7f21') },
      (error, result) => {
        if (error) return new Error(`Can't find document`);

        console.log(result);
      }
    );
  }
);
