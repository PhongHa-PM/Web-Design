let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
let items = document.querySelectorAll('.item')
document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
let items = document.querySelectorAll('.item')
document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


// admin
let orders = [
    {name: 'Châu Đức Toàn', cccd: '123456789', checkin: '2023-05-18 10:00', checkout: '2023-05-20 12:00', address: 'Ho Tram', quantity: 2},
    {name: 'Phạm Minh Tuấn', cccd: '987654321', checkin: '2023-05-19 11:00', checkout: '2023-05-21 13:00', address: 'Ho Tieng', quantity: 3}
];

let currentEditIndex = -1;

function loadOrders() {
    let tableBody = document.getElementById('orderTableBody');
    tableBody.innerHTML = '';
    orders.forEach((order, index) => {
        let row = `<tr>
            <td>${order.name}</td>
            <td>${order.cccd}</td>
            <td>${order.checkin}</td>
            <td>${order.checkout}</td>
            <td>${order.address}</td>
            <td>${order.quantity}</td>
            <td>
                <button class="btn btn-warning" onclick="editOrder(${index})">Edit</button>
                <button class="btn btn-danger" onclick="deleteOrder(${index})">Delete</button>
            </td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function addOrder() {
    let newOrder = {name: 'New Order', cccd: '000000000', checkin: '2023-01-01 00:00', checkout: '2023-01-02 00:00', address: 'Ho Tram', quantity: 1};
    orders.push(newOrder);
    loadOrders();
}

function editOrder(index) {
    let order = orders[index];
    currentEditIndex = index;
    document.getElementById('editName').value = order.name;
    document.getElementById('editCCCD').value = order.cccd;
    document.getElementById('editCheckin').value = order.checkin;
    document.getElementById('editCheckout').value = order.checkout;
    document.getElementById('editAddress').value = order.address;
    document.getElementById('editQuantity').value = order.quantity;
    $('#editModal').modal('show');
}

function saveEdit() {
    if (currentEditIndex >= 0) {
        orders[currentEditIndex].name = document.getElementById('editName').value;
        orders[currentEditIndex].cccd = document.getElementById('editCCCD').value;
        orders[currentEditIndex].checkin = document.getElementById('editCheckin').value;
        orders[currentEditIndex].checkout = document.getElementById('editCheckout').value;
        orders[currentEditIndex].address = document.getElementById('editAddress').value;
        orders[currentEditIndex].quantity = document.getElementById('editQuantity').value;
        loadOrders();
        $('#editModal').modal('hide');
    }
}

function deleteOrder(index) {
    orders.splice(index, 1);
    loadOrders();
}

function sortTable(column) {
    orders.sort((a, b) => {
        if (sortDirection[column] === 'asc') {
            return a[column] > b[column] ? 1 : -1;
        } else {
            return a[column] < b[column] ? 1 : -1;
        }
    });
    sortDirection[column] = sortDirection[column] === 'asc' ? 'desc' : 'asc';
    loadOrders();
}

let sortDirection = {
    name: 'asc',
    checkin: 'asc'
};

document.addEventListener('DOMContentLoaded', loadOrders);

// link animation


// admin
