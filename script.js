// locations
const locations = [
    "Amsterdam", "Athens", "Auckland", "Atlanta", "Austin",   // A
    "Boston", "Barcelona", "Beijing", "Brisbane", "Budapest", // B
    "Chicago", "Cape Town", "Columbus", "Copenhagen", "Calgary", // C
    "Dubai", "Dallas", "Denver", "Dublin", "Detroit",         // D
    "Edinburgh", "El Paso", "Eindhoven", "Entebbe", "Essen",   // E
    "Frankfurt", "Fresno", "Florence", "Fort Worth", "Fukuoka", // F
    "Geneva", "Glasgow", "Guadalajara", "Gothenburg", "Graz",   // G
    "Hong Kong", "Houston", "Helsinki", "Hobart", "Honolulu",   // H
    "Istanbul", "Indianapolis", "Ithaca", "Iguaçu", "Ibiza",   // I
    "Jakarta", "Johannesburg", "Jeddah", "Jamaica", "Jacksonville", // J
    "Kyiv", "Kuala Lumpur", "Krakow", "Kitchener", "Kolkata", // K
    "Lisbon", "London", "Los Angeles", "Lima", "Luxembourg",   // L
    "Madrid", "Mexico City", "Melbourne", "Montreal", "Moscow", // M
    "New York", "Nairobi", "Naples", "Nashville", "Newcastle", // N
    "Oslo", "Orlando", "Ottawa", "Omaha", "Oporto",           // O
    "Paris", "Prague", "Perth", "Portland", "Pittsburgh",     // P
    "Quebec", "Quito", "Queretaro", "Queenstown", "Quincy",  // Q
    "Rome", "Rio de Janeiro", "Riga", "Rochester", "Riyadh",  // R
    "Seoul", "Singapore", "San Francisco", "Stockholm", "Sydney", // S
    "Tokyo", "Toronto", "Tbilisi", "Tucson", "Tehran",         // T
    "Ulaanbaatar", "Utrecht", "Urbana", "Upington", "Ushuaia", // U
    "Vancouver", "Vienna", "Valencia", "Vladivostok", "Venice", // V
    "Warsaw", "Washington D.C.", "Wellington", "Winnipeg", "Wroclaw", // W
    "Xiamen", "Xian", "Xalapa", "Xalapa", "Xining",           // X
    "Yokohama", "Yerevan", "Yogyakarta", "Yunnan", "Yellowknife", // Y
    "Zagreb", "Zurich", "Zanzibar", "Zagreb", "Zamboanga"     // Z
];

function filterLocations(query) {
    return locations.filter(location => location.toLowerCase().includes(query.toLowerCase()));
}

function updateAutocomplete(input, suggestionsContainer) {
    const query = input.value;
    suggestionsContainer.innerHTML = '';

    if (query.length > 0) {
        const suggestions = filterLocations(query);
        suggestions.forEach(location => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = location;
            suggestionItem.className = 'suggestion-item';
            suggestionItem.addEventListener('click', () => {
                input.value = location;
                suggestionsContainer.innerHTML = '';
            });
            suggestionsContainer.appendChild(suggestionItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const fromInput = document.getElementById('from');
    const toInput = document.getElementById('to');
    const fromSuggestions = document.createElement('div');
    const toSuggestions = document.createElement('div');

    fromSuggestions.className = 'suggestions';
    toSuggestions.className = 'suggestions';

    fromInput.parentElement.appendChild(fromSuggestions);
    toInput.parentElement.appendChild(toSuggestions);

    fromInput.addEventListener('input', () => updateAutocomplete(fromInput, fromSuggestions));
    toInput.addEventListener('input', () => updateAutocomplete(toInput, toSuggestions));
});
