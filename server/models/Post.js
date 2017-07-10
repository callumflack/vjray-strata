const keystone = require('keystone');
const Types = keystone.Field.Types;


// Model
// -----------------

const Post = new keystone.List('Post', {
  autokey: {
    path: 'slug',
    from: 'title',
    unique: true
  },
  defaultSort: '-createdAt',
});

Post.add({
  title: {
    type: String,
    initial: true,
  },
  featureImage: Types.CloudinaryImage,
  author: {
    type: Types.Relationship,
    ref: 'User',
  },
  state: {
    type: Types.Select,
    options: 'draft, published, archived',
    default: 'draft',
  },
  description: Types.Textarea,
  content: Types.Markdown,
  createdAt: {
    type: Types.Date,
    default: Date.now,
  },
});


// Registration
// -----------------

Post.defaultColumns = 'title, author, state';
Post.register();
