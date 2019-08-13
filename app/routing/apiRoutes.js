var friends = require("../data/friends.js")

module.exports = function (app) {
  app.post("/api/survey", function (req, res) {
    user = req.body

    var currentMatch = 55;
    var yourMatch = {}

    for (var i = 0; i < friends.length; i++) {

      var currentFriend = friends[i]

      var currentScore = currentFriend.scores
      var currentDifference = 0
      for (let i = 0; i < currentScore.length; i++) {
        currentDifference += Math.abs(parseInt(user.score[i]) - parseInt(currentScore[i]))

      }
      if (currentDifference < currentMatch) {
        currentMatch = currentDifference
        yourMatch.name = currentFriend.name
        yourMatch.photo = currentFriend.photo
        yourMatch.score = currentDifference
      }
    }
    console.log("your match :", yourMatch)
    res.json({ yourMatch })
  });

  app.post("/api/friends/", function (req, res) {
    console.log(req.body);
  });

  app.post("/api/clear", function (req, res) {
    avengersData.length = 5;

    res.json({ ok: true });
  });
};


