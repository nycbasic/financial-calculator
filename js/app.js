const salaryInput      = document.querySelector('.form-control'),
      monthly          = document.getElementById('monthly'),
      expenseSelectors = document.querySelectorAll('.expense');

let salary = 0;

salaryInput.addEventListener('keydown', (e) => {
    if(e.keyCode === 13) {
        e.preventDefault();
        salary = Number(salaryInput.value);
        salaryInput.value = "";
        
        setTimeout(() => monthly.innerText = "$" + salary.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));

        for(let val of expenseSelectors) {
            expenses(val.id);
         }
    } 
}) 

function expenses(id) {
    let percent        = expensePercent(id),
        selector       = document.getElementById(id),
        expenseTotal = salary * percent;

    selector.innerText = "$" + expenseTotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function expensePercent(id) {
    const expense = {
        housing: 0.35,
        utilities: 0.05,
        food: 0.15,
        transportation: 0.1,
        medical: 0.03,
        clothing: 0.05,
        personal: 0.07,
        savings: 0.1,
        debt: 0.1
    }
    return expense[id];
}

// const testObj = {
//     housing: 0.35,
//     utilities: 0.05,
//     food: 0.15,
//     transportation: 0.1,
//     medical: 0.03,
//     clothing: 0.05,
//     personal: 0.07,
//     savings: 0.1,
//     debt: 0.1,
//     expenseTotal: function(id) {
//        return salary*this[id];
//     }
// }





