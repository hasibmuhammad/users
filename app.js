const getUsers = (url) => {
  const info = document.getElementById("info");

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.map((d) => {
        const { name, website, company } = d;

        info.innerHTML += `<div class="user">
                                <h2 id="name">${name}</h2>
                                <p id="website">${website}</p>
                                <p id="company">${company.name}</p>
                            </div>`;
      });
    });
};

document.addEventListener(
  "load",
  getUsers("https://jsonplaceholder.typicode.com/users")
);
