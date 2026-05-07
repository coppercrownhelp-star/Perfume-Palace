function openOrder() {
  document.getElementById('orderModal').style.display = 'block';
}

function closeOrder() {
  document.getElementById('orderModal').style.display = 'none';
}

function submitOrder(e) {
  e.preventDefault();
  alert('Order placed successfully!');
  closeOrder();
}
