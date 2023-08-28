const fetch = require("node-fetch") // npm install node-fetch@2.6.1

setInterval(() => {
  const random = String(Math.random() * 10).replace(".","")
  const url = "https://github.com/Rednexie/is.gd?" + random;
  fetch("https://is.gd/create.php?format=simple&url=" + url)
    .then(res => res.text())
    .then(data => console.log(data))
    .catch(error => console.error(error));
},1)
