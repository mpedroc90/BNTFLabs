var express = require("express");
var axios = require("axios");
var moment = require("moment");
var router = express.Router();
var users = [];

let url = "http://localhost:3500";//"http://netzone.cl/bntf/api.users.prueba/skeleton/api";
const headers = {
  token: '%ca7b=E]bV?t_M8C(Q]qU{qzQTPJOX/%AoKVv3S`Z`"Uxh]uwBfnooPJ%DW9)]m',
};

axios
  .get(`${url}/skills?id=${Math.random()}`, { headers })
  .then(r => {
    return r.data.response.data;
  })
  .then(skills => {
    
    axios.get(`${url}/users?id=${Math.random()}`, { headers }).then(r => {
      users = r.data.response.data;

      users.forEach((u, index) => {
        users[index].skills = skills
          .filter(t => t.hasOwnProperty(u.id))
          .map(t => t[u.id])[0];
        /*if (u.format_image === 1) {
          headers.iduser = u.id;
             const r = axios
            .get(`${url}/image_perfil?id=${Math.random()}`, {
              headers,

              responseType: "arraybuffer",
            })
            .then(img_res => {
              users[index].url_image =
                "data:image/jpeg;base64," +
                new Buffer.from(img_res.data, "binary").toString("base64");
            })
            .catch(e => console.log(e));
        }*/
      });
    });
  });

  router.get("/", function(req, res, next) {
  res.render("index", {
    users: users.map(mapUser),
  });
});

//Update  user
router.post("/:id", function(req, res, next) {
  index =  users.findIndex(u => u.id == req.params.id);
  if (index >= 0) {
    Object.keys(req.body).forEach(
      key => { 
        if(users[index].hasOwnProperty(key)){
          users[index][key] = req.body[key];
        }else if(key == "address") {
            users[index].info.address = req.body[key];
        }
    });
    res.json(users[index]);
  }
  res.status(404).send();
});

//Get User By Id
router.get("/:id", function(req, res, next) {
  res.json(findById(req.params.id));
});

/* Delete user */
router.delete("/:id", function(req, res, next) {
  if (!!req.params.id) {
    let index = users.findIndex(u => u.id == req.params.id);
    if (index >= 0) users.splice(index, 1);
  }
  res.status(200).send();
});


function findById(id) {
  return users.filter(u => u.id == id).map(mapUser)[0];
}

function calculateAge(birthdate) {
  var date = moment(birthdate, "DD-MM-YYYY");
  return moment().diff(date, "years");
}

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

function calculateRut(rut) {
  rut = Number(rut);
  n = rut;
  k = 2;
  sum = 0;
  while (n > 0) {
    if (k == 0) k = 2;
    sum += (n % 10) * k;
    k = (k + 1) % 8;

    n = Math.floor(n / 10);
  }
  sum %= 11;
  sum = 11 - sum;
  const dv = sum >= 1 && sum <= 9 ? sum : sum == 11 ? 0 : sum == 10 ? "K" : "";

  return rut + "-" + dv;
}

module.exports = router;