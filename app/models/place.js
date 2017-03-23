import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('text'),
  photo: DS.attr('string'),
  lat: DS.attr('number'),
  lng: DS.attr('number'),
  tags: DS.attr()
});
