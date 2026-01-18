const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

module.exports.validatePassword = (password) => {
  if (!password) return false;
  return PASSWORD_REGEX.test(password);
};
