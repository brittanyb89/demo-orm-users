import User from "./model.js";

export default {
  create(payload) {
    return User.create(payload);
  },

  // Add a new method to find user by username
  show(username) {
    return User.findOne({ where: { username } });
  },
};
