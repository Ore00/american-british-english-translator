const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
  /**
   * Validation for text not null and valid locale
   * @param {string} text - Text to translate
   * @param {string} locale - Locale to use for the translation
   * @returns {object.<string, string|null>} - Whether the text and locale are valid
   */
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
  /**
   * Determine the key of an object based on it's value
   * @param {object} obj - Object to be searched
   * @param {string} value - Value to be searched for
   * @returns {(string|null)}
   */
  getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }
  /**
   * Determine the number of times a word appears in the object
   * @param {object} obj - Object to be searched
   * @param {string} word - Word to be searched for
   * @returns {number}
   */
  getOccurance(obj, findIt) {
    let count = 0;
    Object.keys(obj).forEach((key, index) => {
      if (key.includes(findIt)) {
        count++;
      }
    });
    return count;
  }

  /**
   * Translate the text based on the locale
   * @param {string} text - Text to translate
   * @param {string} locale - Locale to use for the translation
   * @returns {string)
   */
  getTranslation(word, locale) {
    let translation = "";
    let removedPeriod = false;

    if (
      americanToBritishTitles[word.toLowerCase()] == undefined &&
      word.slice(-1) == "."
    ) {
      word = word.slice(0, -1);
      removedPeriod = true;
    }
    if (locale != "american-to-british") {
      translation = this.translateToAmerican(word.toLowerCase(), locale);
    } else {
      translation = this.translateToBritsh(word.toLowerCase(), locale);
    }
    return removedPeriod === true ? translation + "." : translation;
  }

  /**
   * Translate a string to proper case
   * @param {string} str - Word to change to proper case
   * @returns {string} - Proper cased word
   */
  properCase(str) {
    return str
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(" ");
  }

  /**
   * Translate a word from Britsh to American
   * @param {string} word - Word to translate
   * @param {string} locale - Locale to use for the translation
   * @returns {string} - Translated word with highlighted translation
   */
  translateToAmerican(word, locale) {
    let translation = "";
    if (locale == "british-to-american") {
      if (britishOnly.hasOwnProperty(word)) {
        translation =
          '<span class="highlight">' + britishOnly[word] + "</span>";
      } else if (Object.values(americanToBritishSpelling).includes(word)) {
        translation = this.getKeyByValue(americanToBritishSpelling, word);
        translation = '<span class="highlight">' + translation + "</span>";
      } else if (Object.values(americanToBritishTitles).includes(word)) {
        translation = this.getKeyByValue(americanToBritishTitles, word);
        translation =
          '<span class="highlight">' + this.properCase(translation) + "</span>";
      } else if (word.match(/^(0?[1-9]|1[0-2]).[0-5][0-9]$/)) {
        translation =
          '<span class="highlight">' + word.replace(".", ":") + "</span>";
      } else {
        translation = word;
      }
    } else {
      return;
    }
    return translation;
  }

  /**
   * Translate a word from American to British
   * @param {string} word - Word to translate
   * @param {string} locale - Locale to use for the translation
   * @returns {string} - Translated word with highlighted translation
   */
  translateToBritsh(word, locale) {
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
        translation =
          '<span class="highlight">' +
          this.properCase(americanToBritishTitles[word]) +
          "</span>";
      } else if (word.match(/^(0?[1-9]|1[0-2]):[0-5][0-9]$/)) {
        translation =
          '<span class="highlight">' + word.replace(":", ".") + "</span>";
      } else {
        translation = word;
      }
    } else {
      return;
    }
    return translation;
  }

  /**
   * Loops through text and determines which words to translate based on locale
   * @param {string} text - Sentence to translate
   * @param {string} locale - Locale to use for the translation
   * @returns {string} - Translated sentence
   */
  translate(text, locale) {
    let validator = this.validate(text, locale);
    if (validator.error !== null) {
      return validator;
    } else {
      let words = text.split(" ");
      let translation = text;

      let foundCombination = [];
      for (let i = 0; i < words.length; i++) {
        let temp = words[i];
        // console.log(`${i} checking: `, temp);
        let translated = this.getTranslation(temp.toLowerCase(), locale);
        if (temp.toLowerCase() != translated) {
          foundCombination[temp] = translated;
          continue;
        }
        for (let j = i + 1; j < words.length; j++) {
          temp = temp + " " + words[j];
          // console.log(`${j} combination: `, temp);
          translated = this.getTranslation(temp.toLowerCase(), locale);
          if (temp.toLowerCase() != translated) {
            foundCombination[temp] = translated;
            if (j == words.length - 1) {
              break;
            } else {
              continue;
            }
          }
        }
      }
      Object.entries(foundCombination).forEach(([key, value]) => {
        if (this.getOccurance(foundCombination, key) == 1) {
          translation = translation.replace(key, value);
        }
      });
      //pre
      // words.forEach((word) => {
      //   translation = translation + " " + this.getTranslation(word, locale);
      // });
      //

      if (text == translation) {
        translation = "Everything looks good to me!";
      }
      return { text: text, translation: translation.trim() };
    }
  }
}

module.exports = Translator;
