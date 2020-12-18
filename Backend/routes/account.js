const router = require("express").Router();
const { check, validationResult } = require("express-validator");

router.post(
  "/register",
  [
    check("u_username").not().isEmpty(),
    check("u_password").not().isEmpty(),
    check("u_firstname").not().isEmpty(),
    check("u_lastname").not().isEmpty(),
  ],
  (req, res) => {
    try {
      validationResult(req).throw();
      res.json({ message: req.body });
    } catch (ex) {
      res.status(400).json({ message: ex.message });
    }
  }
);

module.exports = router;
