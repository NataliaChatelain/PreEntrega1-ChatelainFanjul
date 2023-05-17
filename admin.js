const form = document.getElementById('registerForm');
const clientsDiv = document.getElementById('clients');
const clientsTable = document.getElementById('clientsTable');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const user = document.getElementById('user').value;
  const password = document.getElementById('password').value;

  if (user === 'admin' && password === 'asd123') {

    form.style.display = 'none';

    // Fetch client data from API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const clientsData = await response.json();


    // table 
    const tableHeader = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const nameHeader = document.createElement('th');
    const emailHeader = document.createElement('th');
    const addressHeader = document.createElement('th');
    nameHeader.textContent = 'Name';
    emailHeader.textContent = 'Email';
    addressHeader.textContent = 'Address';
    headerRow.appendChild(nameHeader);
    headerRow.appendChild(emailHeader);
    headerRow.appendChild(addressHeader);
    tableHeader.appendChild(headerRow);
    clientsTable.appendChild(tableHeader);

    // table body 
    const tableBody = document.createElement('tbody');
    clientsData.forEach(client => {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      const emailCell = document.createElement('td');
      const addressCell = document.createElement('td');
      nameCell.textContent = client?.name;
      emailCell.textContent = client?.email;
      addressCell.textContent = `${client.address.street}, ${client.address.suite}, ${client?.address.city}, ${client.address.zipcode}`;
      row.appendChild(nameCell);
      row.appendChild(emailCell);
      row.appendChild(addressCell);
      tableBody.appendChild(row);
    });
    clientsTable.appendChild(tableBody);

    clientsDiv.style.display = 'block';
  } else {
    swal({
      text: "Wrong username and/or password!",
      icon: "warning"
    });
  }
});
