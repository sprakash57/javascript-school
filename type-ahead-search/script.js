const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data));
const suggestions = document.querySelector('.suggestions');
const initialValues = suggestions.innerHTML;

function numberWithCommas(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function findMatches(serached, cities) {
    const regex = new RegExp(serached, 'gi');
    return cities.filter(place => {
        return place.city.match(regex) || place.state.match(regex);
    })
}

function displayMatch() {
    if (this.value.length > 2) {
        const result = findMatches(this.value, cities);
        const listItem = result.map(place => {
            const regex = new RegExp(this.value, 'gi');
            const cityName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`);
            const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`)
            return `
                <li>
                    <span>${cityName}, ${stateName}</span>
                    <span class='population'>${numberWithCommas(place.population)}</span>
                </li>
            `
        }).join('');
        suggestions.innerHTML = listItem;
    } else {
        suggestions.innerHTML = initialValues;
    }
}

const input = document.querySelector('.search');
input.addEventListener('keyup', displayMatch);
