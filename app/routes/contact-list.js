import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 'margaret-gonzalez',
      fn: 'Margaret',
      ln: 'Gonzalez',
      p: '2139893898',
      email: 'margonzo@hotmail.com',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Michelle_Borromeo_Actor_Headshots_30.jpg',
      bio: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    }, {
      type: 'contact',
      id: 'gary-owens',
      fn: 'Gary',
      ln: 'Owens',
      p: '2138739275',
      email: 'gowens1979@gmail.com',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Jamie_Marsh_Headshot.jpg',
      bio: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
    }, {
      id: 'melissa-morris',
      fn: 'Melissa',
      ln: 'Morris',
      p: '2138398468',
      email: 'mmorris@yahoo.com',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Alissa_Moreno.jpg',
      bio: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
    }]
  }
});
