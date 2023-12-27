"use strict";
const { body, check } = require("express-validator");
const Translator = require("../components/translator.js");
const { validate } = require("../components/validate.js");
import "regenerator-runtime/runtime";

module.exports = function (app) {
  const translator = new Translator();

  app
    .route("/api/translate")
    .post(
      validate([body("locale").notEmpty(), body("text").exists()]),
      (req, res) => {
        const { text, locale } = req.body;
        let translation = translator.translate(text, locale);
        res.json(translation);
      },
    );
};
