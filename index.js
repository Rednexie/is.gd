const request = require("request")
setInterval(() => {
  const random = String(Math.random() * 10).replace(".","")
  const url = "https://github.com/Rednexie/is.gd" + random;
  request({
    url: "https://is.gd/create.php?format=simple&url=" + url,
    json: true
  }, (err, res, body) => {
    console.log(body)
  })
},50)
