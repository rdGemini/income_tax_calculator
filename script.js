document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('taxForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        calculateTax();
    });

    const modal = document.getElementById('resultModal');
    const span = document.getElementsByClassName('close')[0];
    span.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});

function isNumeric(value) {
    return /^-?\d*\.?\d+$/.test(value);
}

function calculateTax() {
    let tax = 0;
    let overallIncome = 0;
  
    const grossIncomeInput = document.getElementById('grossIncome');
    const extraIncomeInput = document.getElementById('extraIncome');
    const deductionInput = document.getElementById('deduction');
  
    const grossIncome = parseFloat(grossIncomeInput.value.replace(/,/g, '').trim());
    const extraIncome = parseFloat(extraIncomeInput.value.replace(/,/g, '').trim());
    const deduction = parseFloat(deductionInput.value.replace(/,/g, '').trim());
  
    let errorFound = false;
  
    if (!isNumeric(grossIncome)) {
      showError(grossIncomeInput, 'Please enter a valid number');
      errorFound = true;
    } else {
      hideError(grossIncomeInput);
    }
  
    if (!isNumeric(extraIncome)) {
      showError(extraIncomeInput, 'Please enter a valid number');
      errorFound = true;
    } else {
      hideError(extraIncomeInput);
    }
  
    if (!isNumeric(deduction)) {
      showError(deductionInput, 'Please enter a valid number');
      errorFound = true;
    } else {
      hideError(deductionInput);
    }
  
    if (errorFound) {
      return;
    }
  
    const totalIncome = grossIncome + extraIncome - deduction;
    if (totalIncome <= 8) {
      tax = 0;
      overallIncome = totalIncome;
    } else {
      const taxableIncome = totalIncome - 8;
      switch (document.getElementById('ageGroup').value) {
        case '<40':
          tax = taxableIncome * 0.3;
          break;
        case '>=40&<60':
          tax = taxableIncome * 0.4;
          break;
        case '>=60':
          tax = taxableIncome * 0.1;
          break;
        default:
          break;
      }
      overallIncome = totalIncome - tax;
    }
  
    const modal = document.getElementById('resultModal');
    const result = document.getElementById('taxResult');
    result.innerHTML = `Tax Amount: ${tax.toFixed(2)} Lakhs<br>Overall Income After Tax: ${overallIncome.toFixed(2)} Lakhs`;
    modal.style.display = 'block';

    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.add('reduce-width');
  }
  
  
function showError(input, message) {
    const errorIcon = input.nextElementSibling;
    errorIcon.style.display = 'inline-block';
  
    let errorElement = input.parentNode.querySelector('.error-message');
    if (!errorElement) {
      errorElement = document.createElement('span');
      errorElement.classList.add('error-message');
      errorElement.style.color = 'red';
      input.parentNode.appendChild(errorElement);
    }
  
    errorElement.textContent = message;
    input.classList.add('error');
    input.focus();
  }
  
  function hideError(input) {
    const errorIcon = input.nextElementSibling;
    errorIcon.style.display = 'none';
    
    const errorElement = input.parentNode.querySelector('.error-message');
    if (errorElement) {
      errorElement.remove();
    }
  
    input.classList.remove('error');
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('taxForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      calculateTax();
    });
  
    const modal = document.getElementById('resultModal');
    const span = document.getElementsByClassName('close')[0];
    span.onclick = function() {
      modal.style.display = 'none';
    };
  
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  });

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('taxForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        calculateTax();
    });

    const modal = document.getElementById('resultModal');
    const span = document.getElementsByClassName('close')[0];
    span.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
