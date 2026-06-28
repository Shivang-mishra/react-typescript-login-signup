export const validateLogin = ( email: string,password: string) => {
  let valid = true;

  let errors = {
    email: "",
    password: "",
  };

  if (email === "") {
    errors.email = "Email is required";
    valid = false;
  } else if (!email.includes("@")) {
    errors.email = "Enter a valid email";
    valid = false;
  }

  if (password === "") {
    errors.password = "Password is required";
    valid = false;
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters";
    valid = false;
  }

  return { valid, errors };
};