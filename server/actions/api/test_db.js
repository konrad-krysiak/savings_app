const Note = require('../../db/models/savings_app_db');

module.exports = {
    saveNote(req, res){

        const newNote = new Note({
            title: 'zrobic zakupy',
            body: 'mleko, czekolada'
        });
        newNote.save().then(() => {
            console.log('notatka zostala zapisana')
        });

        res.send('strona dziala');
    }
}