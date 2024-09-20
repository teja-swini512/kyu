// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
function points(games) {
    return games.reduce((total, game) => {
      const [x, y] = game.split(':').map(Number);
      if (x > y) return total + 3; // Win
      if (x < y) return total + 0; // Loss
      return total + 1; // Tie
    }, 0);
    
  }