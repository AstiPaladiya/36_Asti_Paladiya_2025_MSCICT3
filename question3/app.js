const readline = require("readline");
const chat = require("./chatbot");

const rl = readline.createInterface({
    input: process.stdin,
     output: process.stdout
});
rl.setPrompt("Your message: ");
rl.prompt();

rl.on('line', line => {
    console.log('Bot:', chat.Chatbot(line));
    rl.prompt();
})