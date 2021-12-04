let input = document.querySelector('input')
let textarea = document.querySelector('textarea')

input.addEventListener('change', () => {
	let files = input.files;

	if (files.length == 0) return;

	const file = files[0];

	let reader = new FileReader();

	reader.onload = (e) => {
		const file = e.target.result;
		const lines = file.split(/\r\n|\n/);
		textarea.value = lines.join('\n');
	}
	

	

	reader.onerror = (e) => alert(e.target.error.name);
	reader.readAsText(file);
	import textgears from 'textgears-api';

const textgearsApi = textgears('JjfNDjpKeGfDmpnF', {language: 'en-US'});
textgearsApi.checkGrammar('My mother are a doctor, but my father is a angeneer. I has a pet.')
    .then((data) => {
        for (const error of data.errors) {
            console.log('Error: %s. Suggestions: %s', error.bad, error.better.join(', '));
        }
    })
    .catch((err) => {});
d


	
});