import http from "http"

const server = http.createServer((req,res)=>
{
    res.writeHead(200,{"content-type":"text/json"});

     console.log("Client ULR:",req.url);
    const product=
   [ {
        "name": "Iphone",
        "price": 85000,
        "qty" : 2,
        "discount" : 15,
    },
    {

        "name":"android",
        "price": 430000,
        "qty": 2,
        "discount": 15,
    },
    {
        "name":"samsung",
        "price": 43000,
        "qty": 2,
        "discount": 15,

    }

    ];
    res.end(JSON.stringify(product));
      });

      server.listen(3000,()=>console.log("server is running at 30000..."));
