describe('Test of finding songs', function() {
    it('Should open correct addres', function() {
      browser.get('https://cloud-player.io/#/search');
      expect(browser.getCurrentUrl()).toBe('https://cloud-player.io/#/search');
    });
});