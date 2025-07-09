
import './style.css';

document.querySelector('#app').innerHTML = `
  <div id="calculator">
    <div id="display"></div>
    <div class="buttons">
      <button data-value="7">7</button>
      <button data-value="8">8</button>
      <button data-value="9">9</button>
      <button class="operator" data-value="/">÷</button>
      <button data-value="4">4</button>
      <button data-value="5">5</button>
      <button data-value="6">6</button>
      <button class="operator" data-value="*">×</button>
      <button data-value="1">1</button>
      <button data-value="2">2</button>
      <button data-value="3">3</button>
      <button class="operator" data-value="-">-</button>
      <button data-value="0">0</button>
      <button data-value=".">.</button>
      <button class="clear" id="clear">C</button>
      <button class="operator" data-value="+">+</button>
      <button class="equal" id="equals">=</button>
    </div>
  </div>
`;

// Calculator logic
const display = document.getElementById('display');
let current = '';

function updateDisplay(val) {
  display.textContent = val;
}

document.querySelectorAll('.buttons button').forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.dataset.value;
    if (btn.id === 'clear') {
      current = '';
      updateDisplay('');
    } else if (btn.id === 'equals') {
      try {
        // Înlocuiește × și ÷ cu * și /
        const safeExpr = current.replace(/×/g, '*').replace(/÷/g, '/');
        current = eval(safeExpr).toString();
        updateDisplay(current);
      } catch {
        updateDisplay('Eroare');
        current = '';
      }
    } else {
      current += value;
      updateDisplay(current);
    }
  });
});
git remote add origin https://github.com/USERNAME/calculator-vite.git
git branch -M main
git push -u origin main