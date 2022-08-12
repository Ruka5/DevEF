const APIURL = "https://api.github.com/users/";

getUser("Lukas");

function getUser(username) {
  //this returns a promise
  axios(APIURL + username)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
