/* ==========================================================================
   VOYAGECRAFT EXPENDITURE & BUDGET TRACKER
   Chart.js Analytics, Budget Health Indicator & Custom Expense Logger
   ========================================================================== */

import { store } from './store.js';

let chartInstance = null;

export function initExpenditureView() {
  renderBudgetDashboard();
  setupExpenseForm();
  setupBudgetTargetEditor();

  // Re-render when store updates
  store.subscribe(() => {
    renderBudgetDashboard();
  });
}

export function renderBudgetDashboard() {
  const summary = store.getExpenditureBreakdown();

  // Update Hero Metrics
  const budgetValEl = document.getElementById('budget-target-val');
  const spentValEl = document.getElementById('budget-spent-val');
  const remainingValEl = document.getElementById('budget-remaining-val');
  const burnRateEl = document.getElementById('budget-burn-rate');

  if (budgetValEl) budgetValEl.textContent = store.formatPrice(summary.targetBudget);
  if (spentValEl) spentValEl.textContent = store.formatPrice(summary.totalSpent);
  if (remainingValEl) {
    remainingValEl.textContent = store.formatPrice(summary.remaining);
    remainingValEl.style.color = summary.remaining < 0 ? 'var(--accent-coral)' : 'var(--accent-emerald)';
  }
  if (burnRateEl) {
    burnRateEl.textContent = `${summary.percentUsed}% of budget spent`;
  }

  // Update Health Progress Bar
  const progressFill = document.getElementById('budget-progress-fill');
  const healthBadge = document.getElementById('budget-health-badge');

  if (progressFill) {
    progressFill.style.width = `${Math.min(100, summary.percentUsed)}%`;
    progressFill.className = 'progress-fill ' + summary.health;
  }

  if (healthBadge) {
    if (summary.health === 'safe') {
      healthBadge.innerHTML = '<i class="fa-solid fa-circle-check" style="color:var(--accent-emerald);"></i> <span style="color:var(--accent-emerald);">Budget Healthy</span>';
    } else if (summary.health === 'warning') {
      healthBadge.innerHTML = '<i class="fa-solid fa-triangle-exclamation" style="color:var(--accent-gold);"></i> <span style="color:var(--accent-gold);">Approaching Limit</span>';
    } else {
      healthBadge.innerHTML = '<i class="fa-solid fa-circle-exclamation" style="color:var(--accent-coral);"></i> <span style="color:var(--accent-coral);">Budget Exceeded</span>';
    }
  }

  renderChart(summary.categories);
  renderExpensesTable(summary.expenses);
}

function renderChart(categories) {
  const canvas = document.getElementById('budget-breakdown-chart');
  if (!canvas || typeof Chart === 'undefined') return;

  const dataValues = [
    categories.flights,
    categories.hotels,
    categories.packages,
    categories.activities,
    categories.dining,
    categories.transit,
    categories.misc
  ];

  const total = dataValues.reduce((a, b) => a + b, 0);

  // If no expenses yet, show empty placeholder slice
  const chartData = total === 0 ? [1] : dataValues;
  const backgroundColors = total === 0 ? ['#1f293d'] : [
    '#00e5ff', // Flights (cyan)
    '#8b5cf6', // Hotels (purple)
    '#f59e0b', // Packages (amber)
    '#10b981', // Activities (emerald)
    '#f43f5e', // Dining (coral)
    '#06b6d4', // Transit (light blue)
    '#94a3b8'  // Misc (slate)
  ];

  if (chartInstance) {
    chartInstance.data.datasets[0].data = chartData;
    chartInstance.data.datasets[0].backgroundColor = backgroundColors;
    chartInstance.update();
  } else {
    chartInstance = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: total === 0 ? ['No Expenses Yet'] : ['Flights', 'Stays', 'Packages', 'Activities', 'Dining', 'Transit', 'Misc'],
        datasets: [{
          data: chartData,
          backgroundColor: backgroundColors,
          borderWidth: 2,
          borderColor: '#111827',
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#94a3b8',
              font: { family: "'Plus Jakarta Sans', sans-serif", size: 12, weight: 600 },
              padding: 14
            }
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                if (total === 0) return 'No expenses logged';
                return ` ${context.label}: ${store.formatPrice(context.raw)}`;
              }
            }
          }
        },
        cutout: '72%'
      }
    });
  }
}

function renderExpensesTable(expenses) {
  const tbody = document.getElementById('expenses-table-body');
  if (!tbody) return;

  if (expenses.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; padding: 30px; color: var(--text-muted);">
          No expenses recorded yet. Book flights, hotels, packages, or log custom expenses above.
        </td>
      </tr>
    `;
    return;
  }

  // Reverse copy so most recent expenses show first
  const reversed = [...expenses].reverse();

  tbody.innerHTML = reversed.map(exp => {
    return `
      <tr>
        <td><strong>${exp.date}</strong></td>
        <td>
          <span class="expense-category-pill cat-${exp.category}">
            ${capitalize(exp.category)}
          </span>
        </td>
        <td>${exp.title}</td>
        <td style="font-weight: 700; color: var(--text-primary); font-family: 'Outfit', sans-serif;">
          ${store.formatPrice(exp.amount)}
        </td>
        <td style="text-align: right;">
          <button class="btn-icon btn-delete-expense" data-id="${exp.id}" title="Remove Expense" style="width: 32px; height: 32px; font-size: 0.8rem; margin-left: auto;">
            <i class="fa-solid fa-trash-can" style="color: var(--accent-coral);"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  tbody.querySelectorAll('.btn-delete-expense').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      store.removeExpense(id);
      window.showToast?.('Expense item removed and budget recalculated', 'info');
    });
  });
}

function setupExpenseForm() {
  const form = document.getElementById('add-expense-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleInput = document.getElementById('expense-title-input');
    const amountInput = document.getElementById('expense-amount-input');
    const catInput = document.getElementById('expense-category-input');
    const dateInput = document.getElementById('expense-date-input');

    const title = titleInput?.value.trim();
    const amount = Number(amountInput?.value);
    const category = catInput?.value || 'misc';
    const date = dateInput?.value || new Date().toISOString().split('T')[0];

    if (!title || !amount || amount <= 0) {
      window.showToast?.('Please enter a valid description and positive amount', 'warning');
      return;
    }

    store.addCustomExpense({
      title,
      amount,
      category,
      date
    });

    // Reset inputs
    if (titleInput) titleInput.value = '';
    if (amountInput) amountInput.value = '';

    window.showToast?.(`Logged expense: ${title} (${store.formatPrice(amount)})`, 'success');
  });
}

function setupBudgetTargetEditor() {
  const editBtn = document.getElementById('btn-edit-budget-target');
  if (!editBtn) return;

  editBtn.addEventListener('click', () => {
    const current = store.getState().activeTrip.targetBudget;
    const newBudget = prompt('Enter your total trip budget goal (USD):', current);
    if (newBudget && !isNaN(Number(newBudget)) && Number(newBudget) > 0) {
      store.setTargetBudget(Number(newBudget));
      window.showToast?.(`Trip budget updated to ${store.formatPrice(Number(newBudget))}`, 'success');
    }
  });

  const exportBtn = document.getElementById('btn-export-budget-csv');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportBudgetCSV);
  }
}

function exportBudgetCSV() {
  const summary = store.getExpenditureBreakdown();
  let csv = "Date,Category,Description,Amount (USD)\n";

  summary.expenses.forEach(exp => {
    csv += `"${exp.date}","${exp.category}","${exp.title.replace(/"/g, '""')}",${exp.amount}\n`;
  });

  csv += `\n"TOTAL BUDGET",,"",${summary.targetBudget}\n`;
  csv += `"TOTAL SPENT",,"",${summary.totalSpent}\n`;
  csv += `"REMAINING",,"",${summary.remaining}\n`;

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `voyagecraft_budget_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.showToast?.('Budget CSV report downloaded successfully', 'success');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
