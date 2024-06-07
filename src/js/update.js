const cardsEl = document.querySelector(".cards");

export const createCountries = (countries) => {
  countries.forEach((country) => {
    const name = country.name.common;
    const population = country.population;
    const region = country.region;
    const capital = country.capital ? country.capital[0] : "NO capital";
    const flag = country.flags.svg ? country.flags.svg : country.flags.png;

    // li
    const li = document.createElement("li");
    li.classList.add("cards__item");
    li.innerHTML = `   
       <a href="./about.html">
              <img
                src=${flag}
                alt=${name}
                width="267"
                height="160"
              />
              <div class="cards__item-inner">
                <h3 class="cards__title">${name}</h3>
                <p class="population">Population: <span>${population}</span></p>
                <p class="region">Region: <span>${region}</span></p>
                <p class="capital">Capital: <span>${capital}</span></p>
              </div>
            </a>
    `;
    // ul
    cardsEl.appendChild(li);
  });
};
