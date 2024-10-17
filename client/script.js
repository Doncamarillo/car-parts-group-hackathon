const image = document.querySelectorAll('.parts')
const getParts = async (parts) => {
    const response = await axios.get(`http://localhost:3001/api/parts`)
    const partData = response.data;
    console.log ('Parts DataBase', partData)
}

const searchBar = document.querySelector('.search-bar');
const partsGrid = document.querySelector('.parts-grid');


// function renderCarParts(parts) {
//     partsGrid.innerHTML = ''; 
//     parts.forEach(part => {
//         const partDiv = document.createElement('div');
//         partDiv.className = 'car-part';
//         partDiv.innerHTML = `<img src="${part.image}" alt="${part.name}" style="width: 230px; height: 230px;">
//             <h3>${part.name}</h3>
//             <p>Brand: ${part.brand}</p>`;
 
//     });
// }
// renderCarParts(partsGrid);

searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    const filteredParts = carParts.filter(part => 
        part.name.toLowerCase().includes(searchTerm) ||
        part.brand.toLowerCase().includes(searchTerm)
    );
    renderCarParts(filteredParts);
});

const brandButtons = document.querySelectorAll('.brands button');

// brandButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const brand = button.textContent;
//         const filteredParts = carParts.filter(part => part.brand === brand);
//         renderCarParts(filteredParts);
//     });
// });

const emailInput = document.querySelector('#email');
const subscribeButton = document.querySelector('#emailSubmit');

subscribeButton.addEventListener('click', () => {
    const email = emailInput.value;
    if (email) {
        alert(`Subscribed with: ${email}`);
        emailInput.value = ''; // Clear the input
    } else {
        alert('Please enter a valid email address.');
    }
});
