const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let text = markdownInput.value;

  const h3Regex = /^### (.*)$/gm;
  text = text.replace(h3Regex, "<h3>$1</h3>");

  const h2Regex = /^## (.*)$/gm;
  text = text.replace(h2Regex, "<h2>$1</h2>");

  const h1Regex = /^# (.*)$/gm;
  text = text.replace(h1Regex, "<h1>$1</h1>");

  const boldRegex = /\*\*(.*?)\*\*|__(.*?)__/g;
  text = text.replace(boldRegex, "<strong>$1$2</strong>");

  const italicRegex = /\*(.*?)\*|_(.*?)_/g;
  text = text.replace(italicRegex, "<em>$1$2</em>");

  const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
  text = text.replace(imageRegex, '<img alt="$1" src="$2">');

  const linkRegex = /\[(.*?)\]\((.*?)\)/g;
  text = text.replace(linkRegex, '<a href="$2">$1</a>');

  const quoteRegex = /^> (.*)$/gm;
  text = text.replace(quoteRegex, "<blockquote>$1</blockquote>");

  return text;
}

markdownInput.addEventListener("input", () => {
  const convertedHTML = convertMarkdown();

  htmlOutput.innerText = convertedHTML;

  preview.innerHTML = convertedHTML;
});
