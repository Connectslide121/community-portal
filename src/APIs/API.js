import axios from "axios";

export async function register(input) {
  const response = await axios
    .post("/register", {
      email: input.email,
      password: input.password
    })
    .catch(function (error) {
      alert("Error registering");
      console.log("Error registering:", error);
    });
  return response;
}

export async function login(input) {
  const response = await axios
    .post("/login", {
      email: input.email,
      password: input.password
    })
    .catch(function (error) {
      alert("Error logging in");
      console.log("Error logging in:", error);
    });
  console.log(response);

  return response;
}
