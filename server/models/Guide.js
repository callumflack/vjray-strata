const keystone = require('keystone');
const Types = keystone.Field.Types;


// File Storage
// -----------------

var storage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: '/tmp/vjrayfiles',
  },
});


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
  // Types.LocalFile has been removed from keystone
  // Documentation - https://github.com/keystonejs/keystone/tree/master/lib/storage/adapters/fs
  // Upgrade Guide - https://github.com/keystonejs/keystone/wiki/File-Fields-Upgrade-Guide
  file: {
    type: Types.File,
    storage,
  },
  createdAt: {
    type: Types.Date,
    default: Date.now,
  },
  isPrimary: Types.Boolean,
  isFeatured: Types.Boolean,
});


// Registration
// -----------------

Guide.defaultColumns = 'title, isPrimary, isFeatured';
Guide.register();
