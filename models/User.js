const keystone = require('keystone');
const Types = keystone.Field.Types;


// Model
// -----------------

const User = new keystone.List('User', {
  autokey: {
    path: 'slug',
    from: 'username',
    unique: true
  },
});

User.add({
  username: {
    type: String,
    initial: true,
    unique: true,
  },
  email: {
    type: Types.Email,
    initial: true,
    unique: true,
  },
  password: {
    type: Types.Password,
    initial: true
  },
}, 'Permissions', {
  canAccessKeystone: Boolean
});


// Registration
// -----------------

User.defaultColumns = 'username, email, canAccessKeystone';
User.register();
