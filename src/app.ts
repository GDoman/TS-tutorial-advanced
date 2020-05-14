const button = document.querySelector('button'); // you can also add ! at the end of this line to avoid if statement below

if (button) {
	button.addEventListener('click', () => {
		console.log('Clicked!');
	})
}