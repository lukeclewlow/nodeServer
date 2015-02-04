describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000/');
  });

  it('hello worlds', function(){
    casper.then(function(){
      expect("body").to.include.text("Hello world");
    });
  });

  it('has an input form', function(){
  	casper.then(function(){
  		expect("body").to.include('<form>');
  	});
  });

});