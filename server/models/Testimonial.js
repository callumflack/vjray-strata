const keystone = require("keystone");
const Types = keystone.Field.Types;

// Model
// -----------------

const Testimonial = new keystone.List("Testimonial", {
  autokey: {
    path: "slug",
    from: "name",
    unique: true
  },
  defaultSort: "-createdAt"
});

Testimonial.add({
  name: {
    type: String,
    initial: true,
    unique: true
  },
  quote: {
    type: String,
    initial: true,
    unique: true
  },
  location: {
    type: String,
    initial: true
  },
  date: {
    type: String,
    initial: true
  },
  createdAt: {
    type: Types.Date,
    default: Date.now
  },
  isFeatured: Types.Boolean
});

// Registration
// -----------------

Testimonial.defaultColumns = "name, quote, location, date, createdAt, isFeatured";
Testimonial.register();
