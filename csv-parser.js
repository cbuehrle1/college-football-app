var fs = require("fs");

function parse(callback) {

  fs.readFile("cfbdata.csv", "utf-8", function(err, data){

    var lines = data.split("\n");

    var content = [];

    for (var i = 2; i < lines.length; i++){
      var line = lines[i].split(",");

      var school = {
        rk: line[0],
        School: line[1],
        G: line[2],
        Pts: line[3],
        Passing: {
          Cmp: line[4],
          Att: line[5],
          Pct: line[6],
          Yds: line[7],
          TD: line[8]
        },
        Rushing: {
          Att: line[9],
          Yds: line[10],
          Avg: line[11],
          TD: line[12]
        },
        TotalOffense: {
          Plays: line[13],
          Yds: line[14],
          Avg: line[15]
        },
        FirstDowns: {
          Pass: line[16],
          Rush: line[17],
          Pen: line[18],
          Tot: line[19]
        },
        Penalties: {
          No: line[20],
          Yds: line[21]
        },
        Turnovers: {
          Fum: line[22],
          Int: line[23],
          Tot: line[24]
        }
      }

      content.push(school);

    }

    callback(content);

  });
};

module.exports = parse;
