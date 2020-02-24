var said = [
  "Interception blocked",
  "They thought it was cute. I was 17.",
  "It’s not the inverse, it’s the opposite.",
  "I don’t like Five Guys fries. They taste too potato-y.",
  "Land does float, actually.",
  "Lumps n' chunks",
  "I’m not loud, at least not verbally.",
  "Re-bettering",
  "My mama always told me never to drink dark soda",
  "This thin pizza crust doesn’t taste good. It’s like saltine crackers… without the saltine.",
  "Ooo they have bubbly here. Is that champange?",
  "Get me that bourbon kit",
  "Wanna chomp?",
  "Does the pasta come with fries?",
  "50% of the time, people don't notice when I'm not there."
];

var stage = document.getElementById("mattisim");

window.addEventListener(
  "DOMContentLoaded",
  function() {
    var fadeComplete = function() {
      stage.removeChild(stage.childNodes[0]);
      var item = document.createElement("span");
      item.setAttribute("class", "quote");
      item.innerHTML = said[Math.floor(Math.random() * said.length)];
      return stage.appendChild(item);
    };

    fadeComplete();

    stage.addEventListener("animationend", fadeComplete, false);
    window.setTimeout(function() {
      document.getElementById("mattground").classList.remove("fade");
    }, 500);
  },
  false
);
