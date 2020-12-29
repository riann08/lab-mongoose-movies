require("dotenv").config();
require("./../app.js"); // fetch the db connection
const CelebrityModel = require("./../model/Celebrity"); // fetch the model to validate our user document before insertion (in database)
const MovieModel = require("./../model/Movie"); // fetch the model to validate our user document before insertion (in database)

// const celebrities = [
//     {
//         name: "Tom Cruise",
//         occupation: "actor",
//         catchPhrase: "Nothing ends nicely, that's why it ends." ,
//       },
//       {
//         name: "Bugs Bunny",
//         occupation: "cartoon character",
//         catchPhrase: "Don’t take life too seriously. You’ll never get out alive!" ,
//       },
//       {
//         name: "Barack Obama",
//         occupation: "ex-president",
//         catchPhrase: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the change that we seek." ,
//       }
//     ];

// async function insertCelebrities() {
//   try {
//     await CelebrityModel.deleteMany(); // empty the styles db collection
//     const inserted = await CelebrityModel.insertMany(celebrities); // insert docs in db
//     console.log(`seed labels done : ${inserted.length} documents inserted !`);
//   } catch (err) {
//     console.error(err);
//   }
// }

const movies = [
  {
    title: "Forest Gump",
    genre: "romantic-comedy, drama ",
    plot: "Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life. Whether dominating on the gridiron as a college football star, fighting in Vietnam or captaining a shrimp boat, Forrest inspires people with his childlike optimism. But one person Forrest cares about most may be the most difficult to save -- his childhood love, the sweet but troubled Jenny (Robin Wright).",
  },
  {
    title: "Armageddon",
    genre: "science-fiction, disaster, drama",
    plot: "When an asteroid threatens to collide with Earth, NASA honcho Dan Truman (Billy Bob Thornton) determines the only way to stop it is to drill into its surface and detonate a nuclear bomb. This leads him to renowned driller Harry Stamper (Bruce Willis), who agrees to helm the dangerous space mission provided he can bring along his own hotshot crew. Among them is the cocksure A.J. (Ben Affleck), who Harry thinks isn't good enough for his daughter (Liv Tyler), until the mission proves otherwise.",
  },
  {
    title: "Little Miss Sunshine",
    genre: "comdedy, adventure, drama",
    plot: "The Hoover family -- a man (Greg Kinnear), his wife (Toni Collette), an uncle (Steve Carell), a brother (Paul Dano) and a grandfather (Alan Arkin) -- puts the fun back in dysfunctional by piling into a VW bus and heading to California to support a daughter (Abigail Breslin) in her bid to win the Little Miss Sunshine Contest. The sanity of everyone involved is stretched to the limit as the group's quirks cause epic problems as they travel along their interstate route.",
  },
];

async function insertMovies() {
  try {
    await MovieModel.deleteMany(); // empty the styles db collection
    const inserted = await MovieModel.insertMany(movies); // insert docs in db
    console.log(`seed movies done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
}

insertMovies();
