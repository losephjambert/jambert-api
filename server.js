const express = require('express');
const app = express();
// const bodyParser = require('body-parser');

// SET PORT
const port = process.env.PORT || 8080;

// USE BODYPARSER I GUESS
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

// SET ACCESS CONTROL HEADERS FOR DEV
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ROUTES
// =============================================================================

const router = express.Router();

router.use(function(req, res, next) {
	console.log('Something is happening.');
	next();
});

router.get('/posts', require('./routes/posts'));
router.get('/project', require('./routes/project'));

// REGISTER ROUTES
app.use('', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log(`💅 Tune your station to 👉 ${port}`);
