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
    .post("/login?useCookies=true", {
      email: input.email,
      password: input.password
    })
    .catch(function (error) {
      alert("Error logging in");
      console.log("Error logging in:", error);
    });
  return response;
}

export async function logout() {
  const response = await axios.post("/logout", {}).catch(function (error) {
    alert("Error logging out");
    console.log("Error logging out:", error);
  });
  return response;
}

export async function getMe() {
  const me = await axios.get("/manage/info").catch(function (error) {
    alert("Error getting user info");
    console.log("Error getting user info:", error);
  });

  const email = me.data.email;

  const response = await axios
    .get(`api/users/${email}`)
    .catch(function (error) {
      alert("Error getting user info");
      console.log("Error getting user info:", error);
    });
  const currentUser = response.data;
  return currentUser;
}

export async function updateMe(input) {
  console.log("input", input);
  const response = await axios
    .put(`/api/users/update/${input.id}`, {
      userId: input.id,
      userName: input.userName,
      profilePicturePath: input.profilePicturePath,
      description: input.description
    })
    .catch(function (error) {
      alert("Error updating user info");
      console.log("Error updating user info:", error);
    });
  return response;
}
