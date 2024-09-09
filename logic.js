// const URL = "https://the-personal-quotes.p.rapidapi.com/quotes/tags/happiness";
// const url = 'https://the-personal-quotes.p.rapidapi.com/quotes/tags/happiness';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': '8473b677damshe6f955af99415f1p12161ajsn961f82d6575a',
//         'x-rapidapi-host': 'the-personal-quotes.p.rapidapi.com'
//     }
// };
// let result;
// async function mycall() {
//     try {
//         const response = await fetch(url, options);
//         result = await response.json();
//         console.log(result);
//         const container = document.querySelector("#main_quotes");
//         const text = document.createElement("p");
//         text.innerText = result[0].quote;
//         container.appendChild(text);
//     } catch (error) {
//         console.log(error);
//     }
// }


// mycall();

const url = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8473b677damshe6f955af99415f1p12161ajsn961f82d6575a',
		'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
	}
};
async function mycall(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.text);
} catch (error) {
	console.error(error);
}
}
mycall()