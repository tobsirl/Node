// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'tast-manager';

const id = new ObjectID();
console.log(id.id);
console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    db.collection('users').insertOne(
      {
        name: 'Kevin',
        age: 27,
      },
      (error, result) => {
        if (error) {
          return new Error(`Unable to insert user`);
        }

        console.log(result.ops);
      }
    );

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

    db.collection('tasks').findOne(
      '5eee13d3c327302b38c50eb3',
      {},
      (error, result) => {
        if (error) return new Error(`Can't find document`);

        console.log(result);
      }
    );
  }
);
