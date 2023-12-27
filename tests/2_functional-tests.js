const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);
const requester = chai.request(server).keepOpen();
let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
  suite("POST request to /api/translate -> Translation with", () => {
    test("text and locale fields:", (done) => {
      done();
    });
    test("text and invalid locale field:", (done) => {
      requester
        .post("/api/translate")
        .send({ text: "here we are", locale: "spanish-to-french" })
        .end(function (err, res) {
          if (err) {
            console.error({ error: err });
            done(err);
          }
          assert.deepEqual(res.body, {
            error: "Invalid value for locale field",
          });
          assert.equal(res.status, 200);
          done();
        });
    });
    test("missing text field:", (done) => {
      requester
        .post("/api/translate")
        .send({ locale: "american-to-british" })
        .end(function (err, res) {
          if (err) {
            console.error({ error: err });
            done(err);
          }
          assert.deepEqual(res.body, {
            error: "Required field(s) missing",
          });
          assert.equal(res.status, 200);
          done();
        });
    });
    test("missing locale field:", (done) => {
      requester
        .post("/api/translate")
        .send({ text: "Mangoes are my favorite fruit." })
        .end(function (err, res) {
          if (err) {
            console.error({ error: err });
            done(err);
          }
          assert.deepEqual(res.body, {
            error: "Required field(s) missing",
          });
          assert.equal(res.status, 200);
          done();
        });
    });
    test("empty text:", (done) => {
      requester
        .post("/api/translate")
        .send({ text: "", locale: "american-to-british" })
        .end(function (err, res) {
          if (err) {
            console.error({ error: err });
            done(err);
          }
          assert.deepEqual(res.body, {
            error: "No text to translate",
          });
          assert.equal(res.status, 200);
          done();
        });
    });
    test("text that needs no translation:", (done) => {
      done();
    });
  });
});
