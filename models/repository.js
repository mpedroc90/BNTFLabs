var { calculateAge, calculateRut } = require("../helpers/bussiness.helper");
var getusers = require("../models/datasources");


var users = [];
var originarl_user = [];
function loadData() {
  originarl_user = getusers();
  user= [...originarl_user];
  if (users.length === 0) setTimeout(loadData, 0);
}

loadData();



module.exports = {
  findById: function(id) {
    return users.filter(u => u.id == id).map(mapUser)[0];
  },
  getUsers: function() {
    return users.map(mapUser);
  },
  partialUpdate: function(id, body) {
    index = users.findIndex(u => u.id == id);
    if (index >= 0) {
      Object.keys(body).forEach(key => {
        if (users[index].hasOwnProperty(key)) {
          users[index][key] = body[key];
        } else if (key == "address") {
          users[index].info.address = body[key];
        }
      });
      return users[index];
    }
    return null;
  },

  delete: function(id) {
    if (!!id) {
      let index = users.findIndex(u => u.id == id);
      if (index >= 0) users.splice(index, 1);
    }
  },

  reloadData() {
    users = user= [...originarl_user];
  }
};

function mapUser(u) {
  const name_splitter = u.name_complete.split(",");
  lastname = name_splitter[1];
  name = name_splitter[0];
  return {
    id: u.id,
    name,
    lastname,
    age: calculateAge(u.birthdate),
    address: u.info.address,
    profession: u.info.profession,
    email: u.email,
    rut: calculateRut(u.rut),
    image_profile: u.url_image,
    phone: u.phone,
    skills: u.skills,
  };

}
