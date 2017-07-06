const keystone = require('keystone');
const Types = keystone.Field.Types;


const pages = [
  'Who we are',
];


// Model
// -----------------

const Page = new keystone.List('Page', {
});

Page.add({
  page: {
    type: Types.Select,
    initial: true,
    options: pages,
  },
  'who': {
    post: {
      type: Types.Html,
      wysiwyg: true,
      dependsOn: {
        page: 'Who we are',
      }
    }
  }
});


// Registration
// -----------------

Page.defaultColumns = 'page';
Page.register();
