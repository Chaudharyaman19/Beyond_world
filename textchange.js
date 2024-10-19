var words = ["campaigns", "Vue", "Introduction", "Hello", "Kase Ha app"];
var index = 0;

function changeWord() {
  var currentText = document.getElementById("text-change");

  // स्लाइड आउट और opacity 0 करें
  currentText.style.transition = "transform 0.5s ease, opacity 0.5s ease";
  currentText.style.transform = "translateY(-100%)";
  currentText.style.opacity = "0";

  // 0.5 सेकंड बाद नया टेक्स्ट दिखाएं
  setTimeout(function () {
    index = (index + 1) % words.length;
    currentText.textContent = words[index];

    // स्लाइड इन और opacity 1 करें
    currentText.style.transition = "none"; // तुरंत स्थान बदलने के लिए
    currentText.style.transform = "translateY(100%)"; // टेक्स्ट को नीचे से लाएं
    currentText.style.opacity = "0";
    currentText.style.top = "10px"; // टेक्स्ट को अदृश्य रखें

    setTimeout(function () {
      currentText.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      currentText.style.transform = "translateY(0)";
      currentText.style.opacity = "1";
    }, 20); // एक छोटा सा डिले ताकि ट्रांजिशन तुरंत न हो
  }, 500); // स्लाइड आउट के बाद 0.5 सेकंड का डिले
}

setInterval(changeWord, 2000); // हर
