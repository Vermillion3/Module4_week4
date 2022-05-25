(function (window) {
  var names = ["Jose", "John", "Victor", "JV", "Jed", "Jerome", "Marjay", "Arkady", "Rhovic", "Neil"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);

