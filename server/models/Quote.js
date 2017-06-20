const keystone = require('keystone');
const Types = keystone.Field.Types;


// Model
// -----------------

const Quote = new keystone.List('Quote', {
  defaultSort: '-createdAt',
});

Quote.add({
  name: {
    type: String,
    required: true,
    initial: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    initial: true,
  },
  createdAt: {
    type: Types.Date,
    default: Date.now,
  },
});


// Registration
// -----------------

Quote.defaultColumns = 'title, createdAt';
Quote.register();
