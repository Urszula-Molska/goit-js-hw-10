import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const countryInfo = document.querySelector('.country-info');

function fetchCountries(countryName) {
  //countryName.toString();
  console.log(countryName);
  console.log(typeof countryName);
  return fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json().then(countries => {
        if (countries.length > 10) {
          console.log(
            'Too many matches found. Please enter a more specific name.'
          );
        }
        if (countries.length === 1) {
          for (properties of countries) {
            console.log(properties.capital);
            console.log(properties.name.official);
            console.log(properties.flags.svg);
            console.log(properties.name.official);
          }
        }
        if ((countries.length >= 2) & (countries.length <= 10)) {
          let markup = '';
          countries.forEach(country => {
            markup += `<div class="country-container">
              <img class="flag" src="${country.flags.svg}" alt= "flag of ${country.name.official}"/>
            <h2 class="country">${country.name.official}</h2>
            </div>`;
          });

          console.log(markup);
          countryInfo.insertAdjacentHTML('beforeend', markup);
        }
        //console.log(countries.length);
        // console.log(countries);
        //for (country of countries) {
        //console.log(country.flags.svg);
        // console.log(country.name.official);
        //}
      });
    })
    .catch(error => console.log(error));
}

fetchCountries('con');
