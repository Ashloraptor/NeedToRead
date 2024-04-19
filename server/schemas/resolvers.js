const { User, Book } = require('../models');
//import bookSchema?

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
  // Mutation: {
  //   createMatchup: async (parent, args) => {
  //     const matchup = await Matchup.create(args);
  //     return matchup;
  //   },
  //   createVote: async (parent, { _id, techNum }) => {
  //     const vote = await Matchup.findOneAndUpdate(
  //       { _id },
  //       { $inc: { [`tech${techNum}_votes`]: 1 } },
  //       { new: true }
  //     );
  //     return vote;
  //   },
  // },
};

module.exports = resolvers;
