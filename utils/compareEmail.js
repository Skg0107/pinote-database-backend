export const compareEmail = (userEmail, storedEmail) => {
  return new Promise((resolve, reject) => {
    if (userEmail !== storedEmail) {
      resolve(true);
    } else {
      reject(false);
    }
  });
};
