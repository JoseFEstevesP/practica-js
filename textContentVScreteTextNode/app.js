const h2textContent = document.getElementById('h2textContent')
console.log(h2textContent);
h2textContent.textContent = 'texto con text content'
const h2nodeText = document.getElementById('h2nodeText')
console.log(h2nodeText);
const text = document.createTextNode(' text con text node')
h2nodeText.appendChild(text)