const fileInput = document.getElementById('fileInput');
const fileNameDisplay = document.getElementById('fileName');

fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    fileNameDisplay.textContent = `Selected file: ${fileInput.files[0].name}`;
  } else {
    fileNameDisplay.textContent = ''; 
  }
});