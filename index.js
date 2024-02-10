const textareaEl = document.querySelector(".textarea");
const charactersNumberEl = document.querySelector(".stat__number--characters");
const twitterNumberEl = document.querySelector(".stat__number--twitter");
const facebookNumberEl = document.querySelector(".stat__number--facebook");
const wordsNumberEl = document.querySelector(".stat__number--words");

textareaEl.addEventListener("input", function () {
  let wordsArray = textareaEl.value.split(" ");
  let numberOfWords = wordsArray.filter((element) => element !== "").length;
  if (textareaEl.value.length == 0) {
    numberOfWords = "0";
  }
  if (textareaEl.value.includes("<script>")) {
    alert("You cant use this word");
    textareaEl.value = textareaEl.value.replace("<script>", "");
  }
  const lengthOfCharacters = textareaEl.value.length;
  const twitterCharactersLeft = 280 - lengthOfCharacters;
  const facebookCharactersLeft = 2200 - lengthOfCharacters;

  if (twitterCharactersLeft < 0) {
    twitterNumberEl.classList.add("stat__number--limit");
  } else {
    twitterNumberEl.classList.remove("stat__number--limit");
  }

  if (facebookCharactersLeft < 0) {
    facebookNumberEl.classList.add("stat__number--limit");
  } else {
    facebookNumberEl.classList.remove("stat__number--limit");
  }
  wordsNumberEl.textContent = numberOfWords;
  charactersNumberEl.textContent = lengthOfCharacters;
  twitterNumberEl.textContent = twitterCharactersLeft;
  facebookNumberEl.textContent = facebookCharactersLeft;
});
