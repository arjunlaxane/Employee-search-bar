let employees = [
  {
    id: 1,
    first_name: 'Suresh',
    last_name: 'Kumar',
    email: 'suresh@gmail.com',
    gender: 'male',
    ip_address: '160.192.178.23',
  },

  {
    id: 2,
    first_name: 'Sourav',
    last_name: 'Das',
    email: 'sourav@gmail.com',
    gender: 'male',
    ip_address: '160.192.168.23',
  },

  {
    id: 3,
    first_name: 'Jhansi',
    last_name: 'Das',
    email: 'jhansi@gmail.com',
    gender: 'female',
    ip_address: '160.192.128.23',
  },

  {
    id: 4,
    first_name: 'John',
    last_name: 'Paul',
    email: 'john@gmail.com',
    gender: 'male',
    ip_address: '160.192.198.23',
  },
  {
    id: 5,
    first_name: 'Lavish',
    last_name: 'paul',
    email: 'lavish@gmail.com',
    gender: 'male',
    ip_address: '161.192.148.23',
  },

  {
    id: 6,
    first_name: 'Sourav',
    last_name: 'Paul',
    email: 'sourav@gmail.com',
    gender: 'male',
    ip_address: '160.192.128.23',
  },
  {
    id: 7,
    first_name: 'Sangeetha',
    last_name: 'Paul',
    email: 'sangeetha@gmail.com',
    gender: 'female',
    ip_address: '160.193.178.23',
  },

  {
    id: 8,
    first_name: 'Pavan',
    last_name: 'Sai',
    email: 'pavan@gmail.com',
    gender: 'male',
    ip_address: '160.172.178.23',
  },
  {
    id: 9,
    first_name: 'Pavni',
    last_name: 'Das',
    email: 'pavni@gmail.com',
    gender: 'female',
    ip_address: '160.162.178.23',
  },
  {
    id: 10,
    first_name: 'Jenny',
    last_name: 'Paul',
    email: 'jenny@gmail.com',
    gender: 'female',
    ip_address: '160.182.178.23',
  },
];

//solution:-

//All employee data
let allEmpButton = document.querySelector('#all-emp-btn');
allEmpButton.addEventListener('click', function () {
  displayEmployess(employees);
});

//All male employee

let allmaleEmpButton = document.querySelector('#male-emp-btn');
allmaleEmpButton.addEventListener('click', function () {
  let allMaleEmployee = employees.filter(function (employee) {
    return employee.gender === 'male';
  });
  // console.log(allMaleEmployee);
  // console.table(allMaleEmployee);
  displayEmployess(allMaleEmployee);
});

//all female employees

let allfemaleEmpButton = document.querySelector('#female-emp-btn');
allfemaleEmpButton.addEventListener('click', function () {
  let allfemaleEmployee = employees.filter(function (employee) {
    return employee.gender === 'female';
  });
  // console.log(allMaleEmployee);
  // console.table(allMaleEmployee);
  displayEmployess(allfemaleEmployee);
});

//search functionality logic

let searchBox = document.querySelector('#search-box');
//use keyup or keydown event-keyboard events
searchBox.addEventListener('keyup', function () {
  let textEntered = searchBox.value; //user entered text
  //console.log(textEntered);

  let filteredEmployees = [];
  if (textEntered != '') {
    //populate data on search box

    filteredEmployees = employees.filter(function (employee) {
      return (
        employee.first_name.toLowerCase().includes(textEntered.toLowerCase()) ||
        employee.last_name.toLowerCase().includes(textEntered.toLowerCase()) ||
        employee.gender.toLowerCase() == textEntered.toLowerCase() ||
        employee.ip_address.includes(textEntered)
      );
    });
    displayEmployess(filteredEmployees);
  }
});

//create Display data function to get the data if user click on button
let displayEmployess = employees => {
  //select the table
  let tableBody = document.querySelector('#table-body');

  //Initially the data in table will be empty so, clear the table body
  let tableRows = ''; //it will keep row empty before new data to display after clicking button otherwise it will display 1 data over another.
  for (let employee of employees) {
    tableRows += `
      <tr>
      <td>${employee.id}</td>
      <td>${employee.first_name}</td>
      <td>${employee.last_name}</td>
      <td>${employee.email}</td>
      <td>${employee.gender}</td>
      <td>${employee.ip_address}</td>
      </tr>
      `;
    tableBody.innerHTML = tableRows;
    // tableBody.append(tableRows);
  }
};
//appendchild-takes only node
//append-takes node,string

/*
https://github.com/lavishjain36/empdommani
*/
