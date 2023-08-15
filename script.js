//your JS code here. If required.
const li = document.querySelectorAll("li");
const level = document.getElementById('level')
const ind = Array.from(li).indexOf(level);

alert(`The level of the element is: ${ind}`);