/*
Good Morning Challenge - Rock, Paper, Scissors, Lizard, Spock using es6 and served by a simple node server (http module), no peaking at your past R,P,S code and push to Github. Please wait until 10am to start and take 90mins. Get as far as you can and please work alone.

Scissors cuts paper. Paper covers rock. Rock crushes lizard. Lizard poisons Spock. Spock smashes scissors. Scissors decapitates lizard. Lizard eats paper. Paper disproves Spock. Spock vaporizes rock. Rock crushes scissors.
*/
const http = require('http');

const server = http.createServer(function(req, res) {
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/css/style.css') {
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  } else if (page == '/js/main.js') {
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {
        'Content-Type': 'text/javascript'
      });
      res.write(data);
      res.end();
    });
  }

});
server.listen(3000);
