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

const validateEditProfileData = (req) => {
  const { age, gender, photoURL, about, skills } = req.body;

  const allowedUpdates = [
    "fistName",
    "lastName",
    "emailId",
    "age",
    "gender",
    "photoURL",
    "about",
    "skills",
  ];

  if (!validator.isInt(age)) {
    throw new Error("Age is not valid");
  } else if (!validator.isLength(gender, { min: 3, max: 6 })) {
    throw new Error("Enter a valid gender");
  } else if (!validator.isURL(photoURL)) {
    throw new Error("Photo URL is not valid");
  } else if (!validator.isLength(about, { min: 4, max: 50 })) {
    throw new Error("Enter something about yourself");
  } else if (skills.length === 0) {
    throw new Error("Enter atleast 1 skill");
  }

  const isUpdateAllowed = Object.keys(req.body).every((field) =>
    allowedUpdates.includes(field)
  );
  return isUpdateAllowed;
};

const validateUpdatedPassword = (req) => {
  const { password } = req.body;
  if (!validator.isStrongPassword(password)) {
    throw new Error("Enter a strong password");
  }
};

module.exports = {
  validateSignUpData,
  validateEditProfileData,
  validateUpdatedPassword,
};
