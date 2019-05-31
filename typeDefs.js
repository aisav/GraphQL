const {gql} = require('apollo-server')

module.exports = gql`
  type User {
    _id: ID
    name: String
    email: String
    picture: String
  }
  
  type Pin {
    _id: ID
    created_at: String
    title: String
    content: String
    image: String
    longitude: Float
    author: User
    comments: [Comment]
  }
  
   type Comment {
    _id: ID
      created_at: String
    author: User
  }
  
  type Query {
    me: User
  }
`
