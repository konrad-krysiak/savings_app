const { payment } = require('../../db/models/payment_model.js');

export const createPayment = {
  function(req, res) {
    const newNote = new payment({
      paymentCash: 13,
      paymentAccount: 10,
    });
    newNote.save().then(() => {
      console.log('notatka zostala zapisana');
    });

    res.send('strona dziala');
  },
};
