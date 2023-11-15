// export const validateEmail = (email) => {
//   if (
//     String(email)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       ) === null
//   ) {
//     return false;
//   } else {
//     return true;
//   }
// };

// export const validatePassword = (password) => {
//   if (password.length < 5) {
//     return false;
//   }
//   return true;
// };

export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  return password.length >= 5; // Adjust the minimum length as needed
};
