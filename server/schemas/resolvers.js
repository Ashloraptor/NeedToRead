const { User, Book } = require('../models');
//import bookSchema?
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    //savedBooks, or books?
    books: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Book.find(params);
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      //login user after creation
      const token = signToken(user);

      return {token, user};
    }
  }
};

module.exports = resolvers;
