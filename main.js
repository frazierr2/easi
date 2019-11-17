(function() {
  "use strict";

  //Capturing page elements
  var translateInput = document.querySelector("#translate-input");
  var characterCount = document.querySelector("#character-count");
  var resultBox = document.querySelector("#result");

  //Global Variable
  var inputContent;

  // Handle input function
  translateInput.addEventListener(
    "input",
    function(event) {
      // Get input content
      var translateInputContent = event.target.value;
      inputContent = translateInputContent;
      // Update character count value as user types
      characterCount.textContent = translateInputContent.length;
      // Change color of character count once requirement met
      translateInputContent.length >= 200
        ? (characterCount.style.color = "black")
        : (characterCount.style.color = "red");

      transformText(translateInputContent);
    },
    false
  );

  function transformText(text) {
    if (text.length) {
      resultBox.textContent = text
        .replace(/\b[a-z]|[!@#$%\^&*)(+=.'_-][a-z]|\B[A-Z]/g, function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1);
        })
        .replace(/\s/g, "");
    } else {
      resultBox.textContent = text;
    }
  }
})();
