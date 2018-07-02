import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | contact list', function(hooks) {
  setupApplicationTest(hooks);

  test('should show Contact List as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/contact-list', 'should redirect automatically');
  });

  test('should list 3 contacts', async function (assert) {  await visit('/');
    assert.equal(this.element.querySelectorAll('.listing').length, 4, 'should display 3 listings');
  });
  
  test('should link to New Contact route', async function (assert) {
    await visit('/');
    await click(".menu-new-contact");
    assert.equal(currentURL(), '/new-contact', 'should navigate to New Contact');
  });
});
