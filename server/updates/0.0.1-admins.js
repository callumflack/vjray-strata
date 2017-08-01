const guideFeatureImage = {
  "public_id": "zwwyun8ziin4tavzhax6",
  "version": 1499395726,
  "signature": "b37a96168598d9aee07b82ff30861fe4c95c408a",
  "width": 600,
  "height": 927,
  "format": "png",
  "resource_type": "image",
  "url": "http://res.cloudinary.com/duniidrb8/image/upload/v1499395726/zwwyun8ziin4tavzhax6.png",
  "secure_url": "https://res.cloudinary.com/duniidrb8/image/upload/v1499395726/zwwyun8ziin4tavzhax6.png"
};

const pdfFile = {
  "mimetype": "application/pdf",
  "size": 7945,
  "filename": "OWhtwj2r4nQrwjvV.pdf",
  "url": "https://vj-ray.s3-us-west-2.amazonaws.com/assets/OWhtwj2r4nQrwjvV.pdf"
};

exports.create = {
  User: [{
    'username': 'Admin User',
    'email': 'admin@keystonejs.com',
    'password': 'admin',
    'canAccessKeystone': true,
  }],
  Post: [{
    'id': '59423f068c17ec54a16b6428',
    'title': 'Example post',
    'description': 'Dolor vitae repellat repudiandae minima qui Eos nihil vel delectus ipsum soluta Pariatur provident dolorem voluptatum aliquid corrupti illum Porro ab doloribus enim assumenda reprehenderit! Libero culpa doloribus animi blanditiis',
    'content': 'Ipsum nihil adipisicing sapiente sunt nemo Consectetur consequatur officia repudiandae ex ad deserunt Esse vero libero cumque impedit excepturi, odio Pariatur id totam enim fuga labore? Excepturi error sint magnam distinctio ipsam Facere aut deleniti ab at fugiat Repellat amet esse eum ipsam iste Dicta praesentium ipsa eveniet adipisci aperiam.',
  }],
  Guide: [{
    "title": "Example Guide",
    "isFeatured": true,
    "isPrimary": true,
    featureImage: guideFeatureImage,
    file: pdfFile,
  }, {
    "title": "Example Guide 2",
    "isFeatured": true,
    "isPrimary": false,
    featureImage: guideFeatureImage,
    file: pdfFile,
  }, {
    "title": "Example Guide 3",
    "isFeatured": true,
    "isPrimary": false,
    featureImage: guideFeatureImage,
    file: pdfFile,
  }],
  PdfSheet: [{
    "headline": "Example Form",
    "subheadline": "Say something here concisely",
    file: pdfFile,
    "type": "Form",
  }, {
    "headline": "Example Form 2",
    "subheadline": "Say something here concisely",
    file: pdfFile,
    "type": "Form",
  }, {
    "headline": "Example Form 3",
    "subheadline": "Say something here concisely",
    file: pdfFile,
    "type": "Form",
  }, {
    "headline": "Example Face Sheet",
    "subheadline": "Say something here concisely",
    file: pdfFile,
    "type": "Fact Sheet",
  }, {
    "title": "Example Face Sheet 2",
    "subheadline": "Say something here concisely",
    file: pdfFile,
    "type": "Fact Sheet",
  }],
  Page: [{
    'page': 'Who we are',
    'who': {
      'post': '<div class="sc-hmzhuo hTVUPX sc-htpNat eLQHN sc-bdVaJa gweHcU" data-reactid="47">\r\n<div class="sc-jTzLTM jFynkw" data-reactid="48">\r\n<p class="sc-EHOje chrmem" data-reactid="49">Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</p>\r\n<p class="sc-EHOje chrmem" data-reactid="50">Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</p>\r\n<p class="sc-EHOje chrmem" data-reactid="51">Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</p>\r\n<p class="sc-EHOje chrmem" data-reactid="52">Dolore ipsa qui rerum veniam exercitationem Facilis earum excepturi fugit ratione nam officia! Dicta quos mollitia aspernatur sapiente nostrum corrupti Veritatis rerum a quod consectetur rem eaque Non hic cum tenetur voluptatem laborum. Natus exercitationem id ipsum odit voluptates. Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</p>\r\n<p class="sc-EHOje chrmem" data-reactid="53">Eius asperiores facilis quasi veniam nihil laborum! Nihil suscipit accusantium facilis eum earum. Dolore ipsa qui rerum veniam exercitationem Facilis earum excepturi fugit ratione nam officia! Dicta quos mollitia aspernatur sapiente nostrum corrupti Veritatis rerum a quod consectetur rem eaque Non hic cum tenetur voluptatem laborum. Natus exercitationem id ipsum odit voluptates. Sint quis odio odit obcaecati ut doloribus? Culpa praesentium sunt cumque sapiente adipisci cum ipsum blanditiis Quibusdam cum omnis tenetur corporis recusandae Laudantium optio sit id consequuntur expedita Neque nesciunt debitis voluptate debitis.</p>\r\n</div>\r\n</div>',
    },
  }],
};




