import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | contact-listing', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.contact = EmberObject.create({
      image: 'fake.png',
      fn: 'test-first',
      ln: 'test-last',
      email: 'test-email',
      p: 'test-phone',
    });
  });

  test('should display contact details', async function(assert) {
    await render(hbs`{{contact-listing contact=contact}}`);
    assert.equal(this.$('.listing h3').text(), 'test-first test-last', 'name: test-first test-last');
  });

});
