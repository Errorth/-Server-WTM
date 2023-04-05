const fs = require('fs');

const avatar = req.files.avatar; // получаем файл из запроса
const filename = `${Date.now()}-${avatar.name}`; // генерируем уникальное имя файла
const path = `./uploads/${filename}`; // указываем путь для сохранения файла

avatar.mv(path, function(err) {
    if (err) {
        console.log(err);
        return res.status(500).send(err);
    }

    console.log('File uploaded!');

    // сохраняем имя файла в базу данных
    User.findByIdAndUpdate(req.user.id, { avatar: filename }, function(err, user) {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }

        res.send('File uploaded and user updated!');
    });
});
