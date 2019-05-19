var moment = require("moment");

module.exports = {
  calculateAge: function(birthdate) {
    var date = moment(birthdate, "DD-MM-YYYY");
    return moment().diff(date, "years");
  },

  calculateRut: function(rut) {
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
    const dv =
      sum >= 1 && sum <= 9 ? sum : sum == 11 ? 0 : sum == 10 ? "K" : "";

    return rut + "-" + dv;
  },
};
