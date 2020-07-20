const form = document.querySelector("form");
const loading = document.querySelector(".loading");

loading.style.display = "none";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.style.display = "none";
  loading.style.display = "";

  let formInputs = new FormData(form);

  const woofs = {
    name: formInputs.get("name"),
    content: formInputs.get("content"),
  };

  console.log(woofs);
});
