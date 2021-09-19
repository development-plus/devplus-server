const app = require('../../src/app');

describe('\'follow\' service', () => {
  it('registered the service', () => {
    const service = app.service('follow');
    expect(service).toBeTruthy();
  });
});
