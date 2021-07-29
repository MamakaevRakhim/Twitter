const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json())

mongoose.connect('mongodb+srv://salman:4321@cluster0.s9wpy.mongodb.net/twitter?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  app.listen(3000, () => {
    console.log('Локалхост работает')
  })
  console.log('Сервер успешно подключился к MongoDb')
}).catch((e) => {
  console.log('Ошибка с подключением к MongoDB')
})