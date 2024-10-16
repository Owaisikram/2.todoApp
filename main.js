const form = document.getElementById("form");
const list = document.getElementById("mylist");

const values = JSON.parse(localStorage.getItem("mylist")) || [];
values.forEach(item => {
  list.innerHTML += `<li>${item}</li>`;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = document.getElementById("input").value;

  if (inputValue) {
    values.push(inputValue);
    localStorage.setItem("mylist", JSON.stringify(values));
    list.innerHTML += `<li>${inputValue}</li>`;
  }

  event.target.reset();
});
