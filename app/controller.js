const User = require("./models/user.model");

module.exports = {
  register: async (email, clientID) => {
    try {
      const user = await User.create({ email, clientID });
      return user.dataValues;
    } catch (error) {
      throw new Error(error);
    }
  },
  lookup: async clientID => {
    try {
      const user = await User.findOne({ where: { clientID } });
      if (!user) return false;
      return user.dataValues;
    } catch (error) {
      throw new Error(error);
    }
  },
  remove: async clientID => {
    try {
      const deleted = User.destroy({ where: { clientID } });
      if (!deleted) return false;
      return true;
    } catch (error) {
      throw new Error(error);
    }
  }
};
