process.env.API_URL =  process.env.API_URL ||  "http://netzone.cl/bntf/api.users.prueba/skeleton/api"
process.env.API_TOKEN =  process.env.API_TOKEN || '%ca7b=E]bV?t_M8C(Q]qU{qzQTPJOX/%AoKVv3S`Z`"Uxh]uwBfnooPJ%DW9)]m'

var app = require("./app")

app.listen(3000, function(){
  console.log("listen by port 3000")
});