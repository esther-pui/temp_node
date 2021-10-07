const http = require('http');

const server = http.createServer((req, res) =>{
    console.log(req)
    if(req.url === '/'){
        res.end('Welcome to here')
    }
    else if(req.url === '/about'){ //create new page
        res.end('here is our short history')
    }
    else{
        res.end(`
    <h1>opps!!!</h1>
    <p> we can't seems to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
    }
   
    // res.write('welcome to our homepage');
    // res.end()
})

//localhost:5000
server.listen(5000)