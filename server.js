const phrases = [
    "Il successo è la somma di piccoli sforzi ripetuti giorno dopo giorno.",
    "Le sfide sono opportunità travestite da problemi.",
    "Credi in te stesso e tutto è possibile.",
    "Il fallimento è il trampolino di lancio per il successo.",
    '"Sii il cambiamento che vuoi vedere nel mondo." - Mahatma Gandhi',
    "Il segreto per ottenere ciò che desideri è iniziare.",
    'Il tuo tempo è limitato, non sprecarlo vivendo la vita di qualcun altro." - Steve Jobs',
    "Il successo non è definito dalle cadute, ma dalla capacità di risollevarsi ogni volta che cadi.",
    "Le tue sfide presenti preparano il terreno per le tue vittorie future.",
    '"Il solo modo per fare un ottimo lavoro è amare ciò che fai." - Steve Jobs'
];

const http = require("http");

const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.PORT)
console.log(process.env.HOST)
console.log(process.env.MY_SECRET_KEY)

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const mySecretKey = process.env.MY_SECRET_KEY

function inspoPhrases() {
    const randomNumber = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomNumber];
    console.log(randomNumber);

    return randomPhrase;
}


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
                    p {
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <h1>${inspoPhrases()}</h1>
                <p>${mySecretKey}</p>
            </body>
        </html>
      `)
}).listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server running at ${serverUrl}`)
});