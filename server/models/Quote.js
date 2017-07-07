const keystone = require('keystone');
const Types = keystone.Field.Types;


// Model
// -----------------

const Quote = new keystone.List('Quote', {
  defaultSort: '-createdAt',
});

Quote.add(
  'Personal Details', {
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
    email: String,
  },
  'Strata Details', {
    address: String,
    postcode: String,
    unitsInScheme: Number,
    comments: String,
  },
  'Misc', {
    createdAt: {
      type: Types.Date,
      default: Date.now,
    },
  }
);


// Registration
// -----------------

Quote.defaultColumns = 'name, createdAt';
Quote.register();
