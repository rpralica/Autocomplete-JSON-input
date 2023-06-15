
let suggestions = [];
async function fetchData() {
 
 await fetch(`/world-cities.json`)
    .then(res => res.json())
    .then(data => {
      suggestions.push(...data);
    });
}
fetchData()
// Retrieve the input and results elements
const input = document.getElementById('autocomplete-input');
const resultsContainer = document.getElementById('autocomplete-results');

// Event listener for input changes
input.addEventListener('input', function () {
  const inputValue = this.value.toLowerCase();
  const filteredSuggestions = suggestions.filter(function (suggestion) {
    return suggestion.name.toLowerCase().startsWith(inputValue);
  });

  // Clear previous results
  resultsContainer.innerHTML = '';

  // Display filtered suggestions
  filteredSuggestions.forEach(function (suggestion) {
    const item = document.createElement('div');
    item.textContent = suggestion.name;
    item.classList.add('autocomplete-item');
    item.addEventListener('click', function () {
      input.value = suggestion.name;
      resultsContainer.innerHTML = '';
    });
    resultsContainer.appendChild(item);
  });
});

