export default function() {
  this.namespace = '/api';

  this.get('/contacts', function() {
    return {
      data: [{
        type: 'contact-list',
        id: 'grand-old-mansion',
        attributes: {
          fn: 'Grand Old Mansion',
          ln: 'Veruca Salt',
          p: 'San Francisco',
          email: 'Estate',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }, {
        type: 'contact-list',
        id: 'urban-living',
        attributes: {
          fn: 'Urban Living',
          ln: 'Mike Teavee',
          p: 'Seattle',
          email: 'Condo',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      }, {
        type: 'contact-list',
        id: 'downtown-charm',
        attributes: {
          fn: 'Downtown Charm',
          ln: 'Violet Beauregarde',
          p: 'Portland',
          email: 'Apartment',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }
      }]
    };
  });
}