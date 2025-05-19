let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function addExpense() {
  const desc = document.getElementById('desc').value.trim();
  const amount = parseFloat(document.getElementById('amount').value);

  if (!desc || isNaN(amount)) return alert("Please enter valid data.");

  const expense = {
    id: Date.now(),
    desc,
    amount,
  };

  expenses.push(expense);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  renderExpenses();
}

function deleteExpense(id) {
  expenses = expenses.filter(exp => exp.id !== id);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  renderExpenses();
}

function renderExpenses() {
  const list = document.getElementById('expenseList');
  const total = document.getElementById('total');
  list.innerHTML = '';

  let totalAmount = 0;
  expenses.forEach(exp => {
    totalAmount += exp.amount;
    const li = document.createElement('li');
    li.className = 'flex justify-between bg-gray-50 p-2 rounded shadow-sm';
    li.innerHTML = `
      <span>${exp.desc} - $${exp.amount.toFixed(2)}</span>
      <button onclick="deleteExpense(${exp.id})" class="text-red-500 hover:text-red-700">&times;</button>
    `;
    list.appendChild(li);
  });

  total.textContent = totalAmount.toFixed(2);
}

renderExpenses();
