const express = require("express");
const router = express.Router();
const Query = require("../models/Query");
const { check, validationResult } = require("express-validator");

// @route   POST api/users/query
// @desc    Post a query
// @access  Public
router.post(
  "/query",
  [
    // add custom validations in middleware
    check("name", "Name is required").not().isEmpty(),
    check("query", "Query is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
  ],
  async (req, res) => {
    try {
      // Grab errors from validation middleware
      const errors = validationResult(req);
      console.log("hey");
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      const { name, email, subject, message, query } = req.body;
      const newQuery = await new Query({
        name,
        email,
        subject,
        message,
        query,
      });
      console.log("hey");

      await newQuery.save();
      console.log("hey");

      // Send msg to client
      res.status(201).send({ msg: "Query has been posted" });
    } catch (e) {
      console.log(e);
      res.status(500).send({ errors: [{ msg: "Server Error" }] });
    }
  }
);

module.exports = router;
