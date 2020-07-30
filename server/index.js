const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const Filter = require("bad-words");
const rateLimit = require("express-rate-limit");

require("dotenv").config();

// with monk we can control our db easily
const monk = require("monk");
const db = monk(process.env.MONGO_URI);
let woofs = db.get('woofs')
const filter = new Filter();

// appjh
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());


// route
// Get
app.get("/", (req, res) => {
  res.json({
    message: "Wellcome to Woof Twitter 🐶"
  });
});

// version 1
app.get('/woofs', (req, res, next) => {
  woofs.find()
    .then((woof) => res.json(woof))
    .catch(next)
})


// version 2
app.get('/v2/woofs', (req, res, next) => {

  let { skip = 0, limit = 10, sort = 'desc' } = req.query

  skip = isNaN(skip) ? 0 : Number(skip)
  limit = isNaN(limit) ? 10 : Number(limit)

  Promise.all([
    woofs.count(),
    woofs.find({},
      {
        skip,
        limit,
        sort: {
          created: sort === 'desc' ? -1 : 1
        }
      })
  ])
    .then(([total, woofs]) => {
      res.json({
        woofs,
        meta: {
          total,
          skip,
          limit,
          has_more: total - (skip + limit) > 0
        }
      });
    }).catch(next)
})

// rateLimit middleware
app.use(rateLimit({
  windowMs: 30 * 1000,
  max: 10
}));


function validationRequest(woof) {
  return (
    woof.name &&
    woof.name.toString().trim() !== "" &&
    woof.content &&
    woof.content.toString().trim() !== ""
  );
}

// POST
const createWoof = (req, res) => {
  if (validationRequest(req.body)) {
    // insert db here
    const woof = {
      name: filter.clean(req.body.name.toString()),
      content: filter.clean(req.body.content.toString()),
      created: new Date(),
    };

    woofs.insert(woof).then((createdWoof) => {
      res.json(createdWoof);
    });
  } else {
    res.status(422);
    res.json({
      message: "You must fill out the fields. Woof! 🐶",
    });
  }
};

app.post("/woofs", createWoof)
app.post("/v2/woofs", createWoof)

// app listener
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running in http://localhost:5000");
});
