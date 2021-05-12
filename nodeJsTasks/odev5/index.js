const http=require("http");
const port=5000;


const server = http.createServer((req,res)=>{
    const url=req.url;
    if(url === "/"){
        res.writeHead(200, {"Content-type": "text/html"})
        res.write("<h2>Index sayfasina hosgeldiniz</h2>")
    } else if (url === "/hakkimda") {
        res.writeHead(200, {"Content-type": "text/html"})
        res.write("<h2>Hakkimda sayfasina hosgeldiniz</h2>")
    } else if (url === "/iletisim") {
        res.writeHead(200, {"Content-type": "text/html"})
        res.write("<h2>Iletisim sayfasina hosgeldiniz</h2>")
    } else {
        res.writeHead(404, {"Content-type": "text/html"})
        res.write("<h2>Sayfa bulunamadi</h2>")
    }
    res.end();
})

server.listen(port, ()=>{
    console.log(`Sunucu Başlatıldı. Port No:${port}`)
})