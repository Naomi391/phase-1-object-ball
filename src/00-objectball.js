function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

//Gives back the home-team name and away team name
function homeTeamName() {
  let object = gameObject();
  return object.home.teamName;
}
console.log(homeTeamName());

function awayTeamName() {
  let object = gameObject();
  return object["away"]["teamName"];
}
console.log(awayTeamName());

//Gives back the points scored by the teamPlayers in both away and home teams
function numPointsScored(playerName) {
  let object = gameObject();
  if (object.home.players[playerName]) {
    return object.home.players[playerName].points;
  } else if (object.away.players[playerName]) {
    return object.away.players[playerName].points;
  }
}
console.log(numPointsScored("Brendan Haywood"));
console.log(numPointsScored("Alan Anderson"));

//Gives back the shoe sizes for both home and away teams
function shoeSize(playerName) {
  let object = gameObject();
  if (object.home.players[playerName]) {
    return object.home.players[playerName].shoe;
  } else if (object.away.players[playerName]) {
    return object.away.players[playerName].shoe;
  }
}
console.log(shoeSize("Brendan Haywood"));
console.log(shoeSize("Alan Anderson"));

//Gives back the team colors for both home and away teams
function teamColors(teamName) {
  let object = gameObject();
  if (teamName === object.home.teamName) {
    return object.home.colors;
  } else if (teamName === object.away.teamName) {
    return object.away.colors;
  }
}
console.log(teamColors("Brooklyn Nets"));
console.log(teamColors("Charlotte Hornets"));

//Gives back the names of the teams for both home and away
function teamNames(theName) {
  const object = gameObject();

  if (theName === "home") {
    return object.home.teamName;
  } else if (theName === "away") {
    return object.away.teamName;
  }
}

console.log(teamNames("home"));
console.log(teamNames("away"));

//This returns the players stats whenever the function is called and the player's name is passed as the parameter
function playerStats(playerName) {
  let object = gameObject();

  if (object.home.players[playerName]) {
    return object.home.players[playerName];
  } else if (object.away.players[playerName]) {
    return object.away.players[playerName];
  }
}
console.log(playerStats("Brendan Haywood"));
console.log(shoeSize("Alan Anderson"));

function bigShoeRebounds() {
  let object = gameObject();
  let largestShoeSize = 0;
  let playerWithLargestShoe = null;

  for (const team in object) {
    for (const player in object[team].players) {
      const currentPlayer = object[team].players[player];
      if (currentPlayer.shoe > largestShoeSize) {
        largestShoeSize = currentPlayer.shoe;
        playerWithLargestShoe = currentPlayer;
      }
    }
  }
  return playerWithLargestShoe.rebounds;
}
console.log(bigShoeRebounds());
