import http from "http";

const server = http.createServer((req,res)=>
{
    if(req.url=="/")
    {
        res.end("<h1>Home Page </h1>");
    }
    else if (req.url=="/product")
    {
         res.write(`
            <h1>iphone xl </h1>
            <h2>price: 90000</h2>
            <h3>discount : 30%</h3>`);
            res.end();

    }
    else if (req.url === "/contact"){
        res.end("<h1>contact us");
    }
    else{
        res.statusCode=404;
        res.end(`
            <h1>page not found </h1>
            <a href="/>home</a>`
        );
    }
});

server.listen(3000,()=> console.log("server runs in 3000...."))