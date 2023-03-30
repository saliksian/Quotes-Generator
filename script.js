const quoteText = document.getElementById("quote");
const generateBtn = document.getElementById("generate-btn");
const tweetBtn = document.getElementById("tweet-btn");

function generateQuote() {
	fetch("https://api.quotable.io/random")
		.then(response => response.json())
		.then(data => {
			quoteText.innerHTML = `"${data.content}" - ${data.author}`;
			tweetBtn.href = `https://twitter.com/intent/tweet?text="${encodeURIComponent(data.content)}" - ${encodeURIComponent(data.author)}`;
			tweetBtn.style.display = "inline-block";
		})
		.catch(error => console.log(error));
}

generateBtn.addEventListener("click", generateQuote);
