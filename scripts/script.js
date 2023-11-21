/*  
Name: Leanne Afrifa 
File Name: script.js
*/


//Function to provide answers to FAQs about books
var faqItems = document.querySelectorAll(".faq");

faqItems.forEach(function(item) {
  var question = item.querySelector("h2");
  var answer = item.querySelector(".answer");
  
  question.addEventListener("click", function() {
    if (answer.style.display === "none") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  });
});
