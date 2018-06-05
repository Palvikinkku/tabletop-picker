// Object full of boardgames

const games = [
    {name: 'Citadels', optimalPlayers: 4, maxPlayers: 8, difficulty: 'easy', length: 'short'},
    {name: '7 Wonders Duel', optimalPlayers: 2, maxPlayers: 2, difficulty: 'medium', length: 'short'},
    {name: 'Kankaanpään Kunkku', optimalPlayers: 3, maxPlayers: 6, difficulty: 'easy', length: 'long'},
    {name: 'X-Com the Board Game', optimalPlayers: 4, maxPlayers: 4, difficulty: 'hard', length: 'long'},
    {name: 'Smallworld', optimalPlayers: 4, maxPlayers: 5, difficulty: 'medium', length: 'long'},
    {name: '7 Wonders', optimalPlayers: 4, maxPlayers: 7, difficulty: 'medium', length: 'short'},
    {name: 'Qin', optimalPlayers: 4, maxPlayers: 4, difficulty: 'easy', length: 'medium'},
    {name: 'Monopoly', optimalPlayers: 3, maxPlayers: 6, difficulty: 'easy', length: 'long'},
    {name: 'Modern Art', optimalPlayers: 4, maxPlayers: 5, difficulty: 'easy', length: 'medium'},
    {name: 'Rappa Kalja', optimalPlayers: 5, maxPlayers: 8, difficulty: 'easy', length: 'short'},
    {name: 'Carcassonne', optimalPlayers: 3, maxPlayers: 7, difficulty: 'medium', length: 'medium'}
];

// Some fancy document element pickers

let maxCheck = document.getElementById("maxCount"),
    optimalCheck = document.getElementById("optimalCount"),
    diffCheck = document.getElementById("difficultPicker"),
    lengthCheck = document.getElementById("difficultPicker");

let maxValue = maxCheck.options[maxCheck.selectedIndex].value,
    optimalValue = optimalCheck.options[optimalCheck.selectedIndex].value,
    difficultyValue = diffCheck.options[diffCheck.selectedIndex].value,
    lengthValue = lengthCheck.options[lengthCheck.selectedIndex].value;

// Under here we create necessary filters so we can actually filter the necessary results


// Apparently the dropdown select is a string. Though the first filter does work, consider converting to number.
// Also consider making functions later, especially when we have multiple filters running.
for (i = 0; i < games.length; i++) {
    if(games[i].maxPlayers == maxValue) {
        console.log(games[i].name);
    }
}
