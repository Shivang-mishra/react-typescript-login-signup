export const validateSignup = (name: string,email: string,password: string,confirmPassword: string) => {
  let valid = true;

  let errors = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  if (name === "") {
    errors.name = "Name is required";
    valid = false;
  }

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

  if (confirmPassword === "") {
    errors.confirmPassword = "Confirm Password is required";
    valid = false;
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
    valid = false;
  }

  return { valid, errors };
};