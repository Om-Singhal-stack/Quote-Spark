

const url = 'https://get-quotes-api.p.rapidapi.com/random';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8473b677damshe6f955af99415f1p12161ajsn961f82d6575a',
		'x-rapidapi-host': 'get-quotes-api.p.rapidapi.com'
	}
};
async function mycall() {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		const container = document.querySelector("#main_quotes");
		const container2 = document.querySelector("#main_aut_name");
		const text = document.createElement("p");
		const auth_text = document.createElement("p");
		text.style.marginTop = "20px";
		text.innerText = result.quote.quote;
		auth_text.innerText = "---"+result.quote.author;
		auth_text.style.marginTop = "10px";
		container.appendChild(text);
		container2.appendChild(auth_text);
	} catch (error) {
		console.error(error);
	}
}
mycall()