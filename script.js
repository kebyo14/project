const fileInput = document.getElementById('fileInput');
    const resultCells = document.querySelectorAll('.result-cell');

    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          
          const emptyCell = Array.from(resultCells).find(cell => !cell.hasChildNodes());
          if (emptyCell) {
           
            const img = document.createElement('img');
            img.src = e.target.result;
            emptyCell.appendChild(img);
          } else {
            alert('No empty cells available!');
          }
        };
        reader.readAsDataURL(file);
      }
    });