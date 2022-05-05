const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const btn = document.querySelector('.btn')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const showBill = (e) => {
	if (price.value == '' || (people.value == '' && tip.value == 0)) {
		error.textContent = 'Wypełnij wszystkie pola!'
		costInfo.style.display = 'none'
	} else {
		countBill()
		error.textContent = ''
	}
}

const countBill = () => {
	const newPrice = parseFloat(price.value)
	const newPeople = parseInt(people.value)
	const newTip = parseFloat(tip.value)

	const sum = (newPrice + newPrice * newTip) / newPeople
	costInfo.style.display = 'block'
	cost.textContent = sum.toFixed(2)
}

btn.addEventListener('click', showBill)
