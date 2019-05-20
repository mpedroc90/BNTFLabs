var axios = require("axios");
var users = [];

if (users.length === 0) {
  let url = process.env.API_URL;
  const headers = {
    token: process.env.API_TOKEN,
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
          if (u.format_image === 1) {
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
          }
        });
      });
    });
}

module.exports = function() {
  return users;
};
