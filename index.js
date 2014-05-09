var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get('/opera', function(request, response) {
  response.attachment('https://github.com/vk-x/vk-x/releases/download/v0.5.0/vk-x-0.5.0-opera.oex')
  response.type('application/x-opera-extension')
  response.send()
})

app.get('/opera-update', function(request, response) {
  response.type('xml')
  response.send('<update-info xmlns="http://www.w3.org/ns/widgets" ' +
    'src="https://github.com/vk-x/vk-x/releases/download/v0.5.0/vk-' +
    'x-0.5.0-opera.oex" version="0.5.0"></update-info>')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
