//your code here
/* Your CSS code here. */
//your code here

// Suppose an array that contains a list of band names
let bandNames = ['The Beatles', 'Led Zeppelin', 'Aerosmith', 'The Rolling Stones', 'Queen'];

// Function to remove articles from band names for sorting
function removeArticles(name) {
  return name.replace(/^(a|an|the)\s/i, '');
}

// Sort the band names in lexicographic order
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get the ul element with the id 'band'
const bandList = document.ge

