const keystone = require('keystone');
const Types = keystone.Field.Types;


// Model
// -----------------

const Guide = new keystone.List('Guide', {
  autokey: {
    path: 'slug',
    from: 'title',
    unique: true
  },
  defaultSort: '-createdAt',
});

Guide.add({
  title: {
    type: String,
    initial: true,
  },
  featureImage: Types.CloudinaryImage,
  //file: Types.LocalFile,
  createdAt: {
    type: Types.Date,
    default: Date.now,
  },
});


// Registration
// -----------------

Guide.defaultColumns = 'title, createdAt';
Guide.register();
