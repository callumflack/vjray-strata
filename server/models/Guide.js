const keystone = require('keystone');
const Types = keystone.Field.Types;


// File Storage
// -----------------

const storage = new keystone.Storage({
  adapter: require('keystone-storage-adapter-s3'),
  s3: {
    key: process.env.S3_KEY,
    secret: process.env.S3_SECRET,
    bucket: process.env.S3_BUCKET,
    path: '/assets',
    region: 'us-west-2',
    headers: {
      'x-amz-acl': 'public-read',
    }
  },
  schema: {
    url: true, // (optional) generate & store a public URL
  }
})


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
