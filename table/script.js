const map = ["_id", "name", "isActive", "balance"];
const users = [
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 },
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    balance: 1464.63,
    age: 38,
    name: "Rosalie Smith",
    gender: "female",
    company: "KATAKANA",
    email: "rosaliesmith@katakana.com",
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 },
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    balance: 2823.39,
    age: 40,
    name: "Estrada Davenport",
    gender: "male",
    company: "EBIDCO",
    email: "estradadavenport@ebidco.com",
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 },
  },
];
sum = 0;
n = 1;
users.forEach(({ balance }) => (sum += balance));
let objLength = users.length;
let html =
  "<table>" +
  "<tr>" +
  "<th>#</th>" +
  "<th>Name</th>" +
  "<th>Email</th>" +
  "<th>Balance</th>" +
  "</tr>";

for (let i = 0; i < objLength; i++) {
  html +=
    "<td>" +
    n++ +
    "<td>" +
    users[i].name +
    "</td>" +
    "<td>" +
    users[i].email +
    "</td>" +
    "<td>" +
    users[i].balance +
    "</th>" +
    "</tr>";
}
// html + ;

document.getElementById("container").innerHTML =
  html + `<tr><td><td><td><td>Total balance ${sum}</td></tr> </table>`;
/*const tableSchema = {
    index: '#',
    name: 'Name',
    email: 'Email',
    balance: 'Balance',   
}

function generateThead(tableSchema) {
    const thead = document.createElement('thead');
    const tr = generateTr(tableSchema, 'th');
    thead.appendChild(tr);
    return thead;
}

function generateTr(tableSchema, tagName = 'td') {
    const tr = document.createElement('tr');
    Object.values(tableSchema).forEach(val => {
        const td = document.createElement(tagName);
        td.textContent = val;
        tr.appendChild(td);
    });
    
    return tr;
}

function generateTbody(tableSchema, items) {
    const tbody = document.createElement('tbody');
    items.forEach((item, index) => {
        item.index = index + 1;
        const itemSchema = generateItemsSchema(tableSchema, item);
        const tr = generateTr(itemSchema, 'td');
        tbody.appendChild(tr);
    });

    return tbody;
}

function generateItemsSchema(tableSchema, item) {
    const itemSchema = Object.keys(tableSchema).reduce((acc, key) => {
        if (key in item) {
            acc[key] = item[key];
        } 

        return acc;
    }, {});

    return itemSchema;
}

function generateTableTemplate() {
    const table = document.createElement('table');
    table.classList.add('table');
    return table;
}

function generateTotalBalance(tableSchema, items) {
    const total = items.reduce((acc, item) => acc + parseFloat(item.balance), 0);
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const columnCounts = Object.keys(tableSchema).length;

    td.insertAdjacentHTML('beforeend', `Total balance: <b>${total}</b>`);
    td.setAttribute('colspan', columnCounts);
    td.setAttribute('align', 'right');

    tr.appendChild(td);

    return tr;
}

function initTable(tableSchema, items) {
    const container = document.querySelector('.table-container');
    const table = generateTableTemplate();
    const header = generateThead(tableSchema);
    const body = generateTbody(tableSchema, items);
    const total = generateTotalBalance(tableSchema, items)

    table.appendChild(header);
    table.appendChild(body);
    table.appendChild(total);

    container.appendChild(table);
}

initTable(tableSchema, users);*/
