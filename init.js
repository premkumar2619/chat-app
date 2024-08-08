const mongoose = require("mongoose");
const Chat = require("./models/chat");


main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err))

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};

let allChats = [
    {
        from: "Neha1",
        to: "Priya1",
        message: "Hello1",
        created_at: new Date()
    },
    {
        from: "Neha2",
        to: "Priya2",
        message: "Hello2",
        created_at: new Date()
    },
    {
        from: "Neha3",
        to: "Priya3",
        message: "Hello3",
        created_at: new Date()
    }
]

Chat.insertMany(allChats);