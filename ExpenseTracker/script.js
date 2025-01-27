// DOM Elements
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseCategoryInput = document.getElementById("expense-category");
const addExpenseBtn = document.getElementById("add-expense-btn");
const expenseList = document.getElementById("expense-list");
const filterCategoryInput = document.getElementById("filter-category");
const totalExpenseElement = document.getElementById("total-expense");

let expenses = [];

// Add Expense
function addExpense() {
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);
    const category = expenseCategoryInput.value;

    if (!name || isNaN(amount) || amount <= 0) {
        alert("Please enter valid expense details.");
        return;
    }

    const expense = { name, amount, category, id: Date.now() };
    expenses.push(expense);
    updateExpenseList();
    updateTotalExpense();

    // Clear inputs
    expenseNameInput.value = "";
    expenseAmountInput.value = "";
}

// Update Expense List
function updateExpenseList() {
    const selectedCategory = filterCategoryInput.value;
    expenseList.innerHTML = "";

    expenses
        .filter(expense => selectedCategory === "All" || expense.category === selectedCategory)
        .forEach(expense => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${expense.name} - $${expense.amount.toFixed(2)} (${expense.category})
                <button onclick="deleteExpense(${expense.id})">Delete</button>
            `;
            expenseList.appendChild(li);
        });
}

// Delete Expense
function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    updateExpenseList();
    updateTotalExpense();
}

// Update Total Expense
function updateTotalExpense() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalExpenseElement.textContent = `$${total.toFixed(2)}`;
}

// Event Listeners
addExpenseBtn.addEventListener("click", addExpense);
filterCategoryInput.addEventListener("change", updateExpenseList);
