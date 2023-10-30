function convertKgToLbs(kg){
    const lbs = kg * 2.20462;
    return lbs;
}

function cookTime(lbs) {
  const time = 17 * lbs;
  return time;
}

function restTime(lbs) {
    const rest = 5 * lbs
    return rest;
}

function convertAndDisplay() {
  var kg = document.getElementById("weightInKg").value; 
  var lbs = convertKgToLbs(kg);
  var time = cookTime(lbs);
  var rest = restTime(lbs)
  document.getElementById("result").textContent = lbs.toFixed(2) + " lbs, cook time: " + time.toFixed(2) + " minutes @200 Celcius";
  document.getElementById('output').innerText = 'Rest time is: ' + rest + ' units';
}
