import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './shemas/schema';


const app = express();

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema
}));

app.listen(3600,()=>
    console.log(`Server is listening on port 3600`));

module.exports = app;