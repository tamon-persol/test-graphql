import { GraphQLObjectType , GraphQLString, GraphQLSchema, GraphQLID} from 'graphql';
import _ from 'lodash'



const books = [
    {name: 'hey-man', genre: 'science', id: '1'},
    {name: 'love song', genre: 'romance', id: '2'},
    {name: 'lollolo', genre: 'novel', id: '3'},
];
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        book: {
            type: BookType,
            args: {id : {type: GraphQLID}},
            resolve(parent,args){
            //    code to get DATA from source
                return books.filter((book) => {return book.id == args.id})[0]
            }
        }
    })
})

module.exports = new GraphQLSchema({
    query: RootQuery
});