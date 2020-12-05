const Pusher = require("pusher")

const pusher = new Pusher({
    appId: "1114009",
    key: "f59c2e634295ebab3345",
    secret: "fa5f853572b92ee7c764",
    cluster: "ap2",
    useTLS: true
  });

module.exports = pusher