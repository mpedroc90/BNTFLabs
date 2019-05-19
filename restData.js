const users = require("./users");
const skills = require("./skills");

module.exports = function() {
  return {
    users,
    skills
  };
};
