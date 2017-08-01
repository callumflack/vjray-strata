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

const PdfSheet = new keystone.List('PdfSheet', {
  autokey: {
    path: 'slug',
    from: 'title',
    unique: true
  },
  defaultSort: '-createdAt',
});

PdfSheet.add({
  headline: {
    type: String,
    initial: true,
  },
  subheadline: {
    type: String,
  },
  file: {
    type: Types.File,
    storage,
  },
  type: {
    type: Types.Select,
    options: ['Form', 'Fact Sheet'],
    initial: true,
    required: true,
  },
  createdAt: {
    type: Types.Date,
    default: Date.now,
  },
});


// Registration
// -----------------

PdfSheet.defaultColumns = 'headline, createdAt';
PdfSheet.register();
