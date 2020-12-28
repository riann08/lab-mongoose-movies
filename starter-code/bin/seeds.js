require("dotenv").config();
require("./../app.js"); // fetch the db connection
const CelebrityModel = require("./../model/Celebrity"); // fetch the model to validate our user document before insertion (in database)

const celebrities = [
    {
        name: "Tom Cruise",
        occupation: "actor",
        catchPhrase: "Nothing ends nicely, that's why it ends." ,
      },
      {
        name: "Bugs Bunny",
        occupation: "cartoon character",
        catchPhrase: "Don’t take life too seriously. You’ll never get out alive!" ,
      },
      {
        name: "Barack Obama",
        occupation: "ex-president",
        catchPhrase: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek." ,
      }
    ];

async function insertCelebrities() {
  try {
    await CelebrityModel.deleteMany(); // empty the styles db collection
    const inserted = await CelebrityModel.insertMany(celebrities); // insert docs in db
    console.log(`seed labels done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
}

insertCelebrities();
