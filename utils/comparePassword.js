export const comparePassword = (enteredPassword, storedPassword) => {
  return new Promise((resolve, reject) => {
    if (enteredPassword == storedPassword) {
      resolve(true);
    } else {
      reject(false);
    }
  });
};
