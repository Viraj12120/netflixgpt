export const checkValidateData = (email, password) => {
  // eslint-disable-next-line
  const isEmailvalidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const isPwdValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailvalidate) return "Email is invalid";
  if (!isPwdValidate) return "Password is invalid";

  return null;
};
