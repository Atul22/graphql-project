const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./schema/schema");

const app = express();

mongoose.connect(
	'mongodb+srv://oggy:test123@cluster0-xligh.mongodb.net/test?retryWrites=true',
	{ useNewUrlParser: true }
);
mongoose.connection.once('open', () => {
	console.log('Connected to DB');
})

app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}))

const PORT = 3900;
app.listen(PORT, () => {
	console.log(`Listening on Port: ${PORT}`);
})