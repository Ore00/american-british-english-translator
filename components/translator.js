const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  validate(text, locale) {
    let validLocales = ["american-to-british", "british-to-american"];
    if (text == "") {
      return { error: "No text to translate" };
    }
    if (validLocales.includes(locale) === false) {
      return { error: "Invalid value for locale field" };
    }
    return { error: null };
  }
  getTranslation(word, locale) {
    let translation = "";
    if (locale == "american-to-british") {
      if (americanOnly.hasOwnProperty(word)) {
        translation =
          '<span class="highlight">' + americanOnly[word] + "</span>";
      } else if (americanToBritishSpelling.hasOwnProperty(word)) {
        translation =
          '<span class="highlight">' +
          americanToBritishSpelling[word] +
          "</span>";
      } else if (americanToBritishTitles.hasOwnProperty(word)) {
        translation = americanToBritishTitles[word];
      } else {
        translation = word;
      }
    } else {
      if (britishOnly.hasOwnProperty(word)) {
        translation = britishOnly[word];
      } else if (Object.keys(americanToBritishSpelling).includes(word)) {
        translation = Object.keys(americanToBritishSpelling).find(
          (key) => americanToBritishSpelling[key] === word,
        );
      }
    }
    return translation;
  }
  translate(text, locale) {
    let validator = this.validate(text, locale);
    if (validator.error !== null) {
      return validator;
    } else {
      let words = text.split(" ");
      let translation = "";
      words.forEach((word) => {
        translation = translation + " " + this.getTranslation(word, locale);
      });
      return translation;
    }
  }
}

module.exports = Translator;
