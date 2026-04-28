// 1. Meaningful Data: A list of characters for a game project
const characters = [
    { name: "Star Skipper", class: "Pilot", level: 12 },
    { name: "Nebula Knight", class: "Warrior", level: 45 },
    { name: "Void Walker", class: "Mage", level: 30 },
    { name: "Luna Rogue", class: "Scout", level: 22 }
];

// 2. Function to generate the table
function generateTable() {
    const container = document.getElementById('table-container');
    
    // Create the table element
    let table = document.createElement('table');
    
    // Create the Header Row
    let headerHTML = `<tr>
        <th>Character Name</th>
        <th>Class</th>
        <th>Level</th>
    </tr>`;
    table.innerHTML = headerHTML;

    // 3. The Loop: Creating at least 4 rows of data
    characters.forEach(char => {
        let row = table.insertRow(); // Create a new <tr>
        
        // Insert 3 columns (cells) per row
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        
        // Add the data to the cells
        cell1.textContent = char.name;
        cell2.textContent = char.class;
        cell3.textContent = char.level;
    });

    // Append the finished table to the page
    container.appendChild(table);
}

// Run the function when the script loads
generateTable();