const result = document.getElementById("result");
const filte = document.getElementById("filter");
const listItem = [];

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");

  const data = await res.json(); // promise response

  console.log(data);
}
