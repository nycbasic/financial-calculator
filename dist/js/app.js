const salaryInput = document.querySelector('.form-control'),
	monthly = document.getElementById('monthly'),
	expenseSelectors = document.querySelectorAll('.expense'),
	notification = document.querySelector('.notification');

const alert = `<div class="alert alert-danger" role="alert">
                 <p>Enter a valid number!!!</p>
              </div>`;

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
	total: function (id) {
		let selector = document.getElementById(id);
		selector.innerText =
			'$' +
			(this.salary * this[id]).toLocaleString(undefined, {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			});
	},
};

salaryInput.addEventListener('keydown', (e) => {
	if (e.keyCode === 13) {
		if (salaryInput.value.match(/^\d+(\.\d+)?$/)) {
			e.preventDefault();
			expenses.salary = Number(salaryInput.value);
			salaryInput.value = '';
			notification.innerHTML = '';

			setTimeout(
				() =>
					(monthly.innerText =
						'$' +
						expenses.salary.toLocaleString(undefined, {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2,
						}))
			);

			for (let val of expenseSelectors) {
				expenses.total(val.id);
			}
		} else {
			e.preventDefault();
			salaryInput.value = '';
			notification.innerHTML = alert;
		}
	}
});
