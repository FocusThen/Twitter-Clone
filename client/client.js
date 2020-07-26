const form = document.querySelector("form");
const loading = document.querySelector(".loading");
let woofsElement = document.querySelector(".woofs");

const API_URL = "http://localhost:5000/woofs";

loading.style.display = "";
listAllWoofs();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.style.display = "none";
  loading.style.display = "";

  let formInputs = new FormData(form);

  const woofs = {
    name: formInputs.get("name"),
    content: formInputs.get("content"),
  };

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(woofs),
  })
    .then((res) => res.json())
    .then((createdWoofs) => {
      form.reset()
      setTimeout(() => {
        form.style.display = "";
      }, 30000)
      listAllWoofs()
    });
});


function listAllWoofs() {
  woofsElement.innerHTML = ""
  fetch(API_URL)
    .then(response => response.json())
    .then(woofs => {
      woofs.reverse();
      woofs.forEach(woof => {
        const div = document.createElement('div')

        const header = document.createElement("h3")
        header.textContent = woof.name
        const contents = document.createElement("p")
        contents.textContent = woof.content
        const date = document.createElement("small")
        date.textContent = new Date(woof.created)

        div.appendChild(header)
        div.appendChild(contents)
        div.appendChild(date)
        woofsElement.appendChild(div)
      })
      loading.style.display = "none";
    })
}
