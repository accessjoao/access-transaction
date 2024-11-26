const userTypeDef = `#graphql
  type User {
    _id: ID!
    username: String!
    password: String!
    profilePicture: String
    gender: String!
  }

# tell my schema what type of queries I can have for my users
  type Query {
    authUser: User
    user(userId:ID!): User
  }

  type Mutation {
    signUp(input: signUpInput!): User
    login(input: LoginInput!): User
    logout: LogOutResponse
  }

  input signUpInput {
    username: String!
    name: String!
    password: String!
    gender: String!
  }

  input LoginInput {
    username: String!
    password: String!
  }

  type LogOutResponse {
    message: String!
  }
`

export default userTypeDef;