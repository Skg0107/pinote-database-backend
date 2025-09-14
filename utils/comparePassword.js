export const comparePassword = (enteredPassword, storedPassword) => {
  if (enteredPassword !== storedPassword) {
    return {
      msg: "password not matched, please try again",
      isPasswordMatch: false,
    };
  } else {
    return {
      msg: "password match",
      isPasswordMatch: true,
    };
  }
};
