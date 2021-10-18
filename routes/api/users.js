const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// @route   POST api/users
// @desc    Register route
// @access  Public

router.post(
  '/',
  [
    check('name', 'Name is requried').not().isEmpty(),
    check('email', 'Please include valid email').isEmail(),
    check('password', 'Please enter more than 6 characters').isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send(req.body);
  }
);

module.exports = router;
