const URL = "https://jsonplaceholder.typicode.com/todos/1";

fetch(URL)
  .then((response) => response.json())
  .then((json) => console.log(json));
