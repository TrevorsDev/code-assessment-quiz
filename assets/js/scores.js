const highScores = JSON.parse(localStorage.getItem('highScores'));
highScores.sort(function(a, b) { 
  return b.score - a.score;
})

for( let i = 0; i < highScores.length; i++ ) {
  let li = document.createElement('li');
  li.textContent = highScores[i].initials + ' - ' + highScores[i].score;
  document.querySelector("ol").appendChild(li);
}