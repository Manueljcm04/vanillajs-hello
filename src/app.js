window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];
  let theDog = who[0] + " " + action[0] + " " + what[0] + " " + when[0];
  let myGrandma = who[1] + " " + action[2] + " " + what[1] + " " + when[3];
  let hisTurtle = who[2] + " " + action[1] + " " + what[2] + " " + when[2];
  let myBird = who[3] + " " + action[3] + " " + what[2] + " " + when[4];

  let who1 = "The dog";

  if (who1 == "The dog") {
    document.getElementById("excuse").innerHTML = theDog;
  } else {
    document.getElementById("excuse").innerHTML = "No hay opcion";
  }

  let who2 = "My grandma";

  if (who2 == "My grandma") {
    document.getElementById("excuse1").innerHTML = myGrandma;
  } else {
    document.getElementById("excuse1").innerHTML = "No hay opcion";
  }

  let who3 = "His turtle";

  if (who3 == "His turtle") {
    document.getElementById("excuse2").innerHTML = hisTurtle;
  } else {
    document.getElementById("excuse2").innerHTML = myBird;
  }

  let who4 = "My bird";

  if (who4 != "My bird") {
    document.getElementById("excuse3").innerHTML = hisTurtle;
  } else {
    document.getElementById("excuse3").innerHTML = myBird;
  }
};
