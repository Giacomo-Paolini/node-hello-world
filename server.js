const http = require("http");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const mySecretKey = process.env.MY_SECRET_KEY
console.log(process.env.MY_SECRET_KEY)


http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
        `<html>
            <head>
                <style>
                    h1 {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <h1>${mySecretKey}</h1>
            </body>
        </html>
      `)
}).listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server running at ${serverUrl}`)
});