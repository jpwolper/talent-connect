import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
          id: 'grand-old-mansion',
          fn: 'Grand Old Mansion',
          ln: 'Veruca Salt',
          email: 'San Francisco',
          p: 'Estate',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
          bio: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
        }, {
          id: 'urban-living',
          fn: 'Urban Living',
          ln: 'Mike TV',
          email: 'Seattle',
          p: 'Condo',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
          bio: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
        }, {
          id: 'downtown-charm',
          fn: 'Downtown Charm',
          ln: 'Violet Beauregarde',
          email: 'Portland',
          p: 'Apartment',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          bio: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        }];
      }
});
