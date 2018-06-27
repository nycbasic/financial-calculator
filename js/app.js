const salaryInput      = document.querySelector('.form-control'),
      monthly          = document.getElementById('monthly'),
      expenseSelectors = document.querySelectorAll('.expense');

const expenses = {
    salary: 0,
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
            expenseTotal = this.salary * this[id];

        selector.innerText = "$" + expenseTotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    }
}

salaryInput.addEventListener('keydown', (e) => {
    const keyEvent = e.keyCode === 13,
          numbers  = /^\d+(\.\d+)?$/;

    if(keyEvent) {
        if(salaryInput.value.match(numbers)) {
            e.preventDefault();
            expenses.salary = Number(salaryInput.value);
            salaryInput.value = "";

            setTimeout(() => monthly.innerText = "$" + expenses.salary.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));

            for(let val of expenseSelectors) {
                expenses.total(val.id);
            }
        } else {
            e.preventDefault();
            salaryInput.value = "";
            salaryInput.setAttribute('placeholder', 'Please Enter A Valid Salary!');
        }  
    } 
})




