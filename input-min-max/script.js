const inputMin = document.querySelector('#min');
const inputMax = document.querySelector('#max');
const costMin = document.querySelector('.cost-min');
const costTextMin = document.querySelector('.cost-text-min');
const costTextMax = document.querySelector('.cost-text-max');


inputMin.addEventListener('change', () => {
	costTextMin.innerHTML = inputMin.value;

})

inputMax.addEventListener('change', () => {
	costTextMax.innerHTML = inputMax.value;

})
