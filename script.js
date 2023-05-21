"use strict";
const btn = document.querySelector('#btn'),
	inputText = document.querySelector('#text'),
	inputRange = document.querySelector('#range'),
	eBtn = document.querySelector('#e_btn'),
	circule = document.querySelector('#circle'),
 colors = [
	'red',
	'green',
	'blue',
	'black',
	'yellow',
	'orange'
	];

const makeBackground = (color, elem) => {
	
	elem.style.backgroundColor = `${color}`;
};

btn.addEventListener('click', () => { 
	colors.forEach(el => { 
		if (inputText.value.trim().toLowerCase() != 0 && inputText.value.trim().toLowerCase() === el) {
			makeBackground(inputText.value,btn);
		} else { 
			inputText.placeholder  = "введите название цвета";
		}
		

	});
});

inputRange.addEventListener('input', () => {
	const inputValue = inputRange.value;
	circule.style.width = `${inputValue}%`;
	circule.style.height = `${inputValue}%`;
 });

eBtn.style.display = 'none';

