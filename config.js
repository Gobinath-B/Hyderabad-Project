var admin = require("firebase-admin");

var serviceAccount = require("./hyberabad-bottling-firebase-adminsdk-xy6tb-87f533f52a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin