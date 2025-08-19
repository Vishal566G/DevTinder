const validator = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;
  const REQUIRED_FIELDS = ["firstName", "lastName", "emailId", "password"];

  // Required fields validation
  const isSignUpTrue = REQUIRED_FIELDS.every((field) =>
    Object.keys(req.body).includes(field)
  );
  if (!isSignUpTrue) {
    throw new Error("Required field is missing");
  }

  //   Data validation for required fields
  if (!firstName || !lastName) {
    throw new Error("Name is not valid: " + firstName || lastName);
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid: " + emailId);
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Weak password, please enter a strong password");
  }
};

module.exports = {
  validateSignUpData,
};
