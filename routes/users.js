const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require("bcrypt"); // Подключаем модель User

router.get('/', async (req, res) => {
  try {
    const users = await User.find(); // Получаем всех пользователей из базы данных
    console.log(users); // Выводим всех пользователей в консоль
    res.send(users); // Отправляем ответ клиенту с массивом пользователей
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/user', async (req, res) => {
  try {
    const id = req.headers.id
    console.log(id)
    const users = await User.find({_id: `${id}`}); // Получаем всех пользователей из базы данных
    console.log(users); // Выводим всех пользователей в консоль
    res.send(users); // Отправляем ответ клиенту с массивом пользователей
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})
router.post('/addnewuser', async (req,res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(`${req.body.password}`, salt);
    const username = req.body.username
    const name = req.body.name
    const phone = req.body.phone
    console.log("BCRYPT NOW")
    const user = new User({
      id: `${phone}_${username}`,
      username: username,
      name: name,
      phone: phone,
      password: `${hash}`,
    });
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
    console.log(error)
  }
})

module.exports = router;
