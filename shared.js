// Shared JSON data (initializing as an empty array)
let jsonData = [];

// Function to fetch JSON data from a file
async function fetchJsonData(filePath) {
  try {
    const response = await fetch(filePath);
    jsonData = await response.json();
  } catch (error) {
    console.error('Error fetching JSON data:', error);
  }
}

// You can set the file path based on your actual file location
const jsonFilePath = 'path/to/your/json/file.json';
fetchJsonData(jsonFilePath);
