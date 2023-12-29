const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite("Unit Tests", () => {
  suite("Translate American to British English", () => {
    test("Mangoes are my favorite fruit", (done) => {
      let text = "Mangoes are my favorite fruit.";
      let locale = "american-to-british";
      let translation = {
        text: text,
        translation:
          'Mangoes are my <span class="highlight">favourite</span> fruit.',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
    test("I ate yogurt for breakfast.", (done) => {
      let text = "I ate yogurt for breakfast.";
      let locale = "american-to-british";
      let translation = {
        text: text,
        translation:
          'I ate <span class="highlight">yoghurt</span> for breakfast.',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
    test("We had a party at my friend's condo.", (done) => {
      let text = "We had a party at my friend's condo.";
      let locale = "american-to-british";
      let translation = {
        text: text,
        translation:
          'We had a party at my friend\'s <span class="highlight">flat</span>.',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
    test("Can you toss this in the trashcan for me?", (done) => {
      let text = "Can you toss this in the trashcan for me?";
      let locale = "american-to-british";
      let translation = {
        text: text,
        translation:
          'Can you toss this in the <span class="highlight">bin</span> for me?',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
    test("The parking lot was full.", (done) => {
      let text = "The parking lot was full.";
      let locale = "american-to-british";
      let translation = {
        text: text,
        translation: 'The <span class="highlight">car park</span> was full.',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
    test("Like a high tech Rube Goldberg machine.", (done) => {
      let text = "Like a high tech Rube Goldberg machine.";
      let locale = "american-to-british";
      let translation = {
        text: text,
        translation:
          'Like a high tech <span class="highlight">Heath Robinson device</span>.',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
    test("To play hooky means to skip class or work.", (done) => {
      let text = "To play hooky means to skip class or work.";
      let locale = "american-to-british";
      let translation = {
        text: text,
        translation:
          'To <span class="highlight">bunk off</span> means to skip class or work.',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
    test("No Mr. Bond, I expect you to die.", (done) => {
      let text = "No Mr. Bond, I expect you to die.";
      let locale = "american-to-british";
      let translation = {
        text: text,
        translation:
          'No <span class="highlight">Mr</span> Bond, I expect you to die.',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
    test("Dr. Grosh will see you now.", (done) => {
      let text = "Dr. Grosh will see you now.";
      let locale = "american-to-british";
      let translation = {
        text: text,
        translation:
          '<span class="highlight">Dr</span> Grosh will see you now.',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
    test("Lunch is at 12:15 today.", (done) => {
      let text = "Lunch is at 12:15 today.";
      let locale = "american-to-british";
      let translation = {
        text: text,
        translation: 'Lunch is at <span class="highlight">12.15</span> today.',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
  });
  suite("Translate British English to American", () => {
    test("We watched the footie match for a while.", (done) => {
      let text = "We watched the footie match for a while.";
      let locale = "british-to-american";
      let translation = {
        text: text,
        translation:
          'We watched the <span class="highlight">soccer</span> match for a while.',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
    test("Paracetamol takes up to an hour to work.", (done) => {
      let text = "Paracetamol takes up to an hour to work.";
      let locale = "british-to-american";
      let translation = {
        text: text,
        translation:
          '<span class="highlight">Tylenol</span> takes up to an hour to work.',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
    test("First, caramelise the onions.", (done) => {
      let text = "First, caramelise the onions.";
      let locale = "british-to-american";
      let translation = {
        text: text,
        translation:
          'First, <span class="highlight">caramelize</span> the onions.',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
    test("I spent the bank holiday at the funfair.", (done) => {
      let text = "I spent the bank holiday at the funfair.";
      let locale = "british-to-american";
      let translation = {
        text: text,
        translation:
          'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
    test("I had a bicky then went to the chippy.", (done) => {
      let text = "I had a bicky then went to the chippy.";
      let locale = "british-to-american";
      let translation = {
        text: text,
        translation:
          'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
    test("I've just got bits and bobs in my bum bag.", (done) => {
      let text = "I've just got bits and bobs in my bum bag.";
      let locale = "british-to-american";
      let translation = {
        text: text,
        translation:
          'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
    test("The car boot sale at Boxted Airfield was called off.", (done) => {
      let text = "The car boot sale at Boxted Airfield was called off.";
      let locale = "british-to-american";
      let translation = {
        text: text,
        translation:
          'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
    test("Have you met Mrs Kalyani?", (done) => {
      let text = "Have you met Mrs Kalyani?";
      let locale = "british-to-american";
      let translation = {
        text: text,
        translation:
          'Have you met <span class="highlight">Mrs.</span> Kalyani?',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
    test("Prof Joyner of King's College, London.", (done) => {
      let text = "Prof Joyner of King's College, London.";
      let locale = "british-to-american";
      let translation = {
        text: text,
        translation:
          '<span class="highlight">Prof.</span> Joyner of King\'s College, London.',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
    test("Tea time is usually around 4 or 4.30.", (done) => {
      let text = "Tea time is usually around 4 or 4.30.";
      let locale = "british-to-american";
      let translation = {
        text: text,
        translation:
          'Tea time is usually around 4 or <span class="highlight">4:30</span>.',
      };
      let result = translator.translate(text, locale);
      assert.deepEqual(result, translation);
      done();
    });
  });
  suite("Highlight translation in", () => {
    test("Mangoes are my favorite fruit.", (done) => {
      let text = "Mangoes are my favorite fruit.";
      let locale = "american-to-british";
      let result = translator.translate(text, locale);
      assert.include(
        result.translation,
        '<span class="highlight">favourite</span>',
      );
      done();
    });
    test("I ate yogurt for breakfast.", (done) => {
      let text = "I ate yogurt for breakfast.";
      let locale = "american-to-british";
      let result = translator.translate(text, locale);
      assert.include(
        result.translation,
        '<span class="highlight">yoghurt</span>',
      );
      done();
    });
    test("We watched the footie match for a while.", (done) => {
      let text = "We watched the footie match for a while.";
      let locale = "british-to-american";
      let result = translator.translate(text, locale);
      assert.include(
        result.translation,
        '<span class="highlight">soccer</span>',
      );
      done();
    });
    test("Paracetamol takes up to an hour to work.", (done) => {
      let text = "Paracetamol takes up to an hour to work.";
      let locale = "british-to-american";
      let result = translator.translate(text, locale);
      assert.include(
        result.translation,
        '<span class="highlight">Tylenol</span>',
      );
      done();
    });
  });
});
