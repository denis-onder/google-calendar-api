const User = require("./models/user.model");

module.exports = {
  register: async (email, clientID) => {
    try {
      const user = await User.create({ email, clientID });
      return user.dataValues;
    } catch (error) {
      throw new Error(error);
    }
  }
};
