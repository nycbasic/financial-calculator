const salaryInput      = document.querySelector('.form-control'),
      monthly          = document.getElementById('monthly'),
      expenseSelectors = document.querySelectorAll('.expense');

let salary = 0;

const expenses = {
    housing: 0.35,
    utilities: 0.05,
    food: 0.15,
    transportation: 0.1,
    medical: 0.03,
    clothing: 0.05,
    personal: 0.07,
    savings: 0.1,
    debt: 0.1,
    total: function(id) {
        let selector     = document.getElementById(id),
            expenseTotal = salary * this[id];
    
        selector.innerText = "$" + expenseTotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    }
}

salaryInput.addEventListener('keydown', (e) => {
    let keyEvent = e.keyCode === 13;
    if(keyEvent) {
        e.preventDefault();
        salary = Number(salaryInput.value);
        salaryInput.value = "";
        
        setTimeout(() => monthly.innerText = "$" + salary.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));

        for(let val of expenseSelectors) {
            expenses.total(val.id);
         }
    } 
}) 



