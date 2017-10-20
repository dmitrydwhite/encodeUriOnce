var expect = require('chai').expect;
var uriOnce = require('../lib/index');

describe('encodeUriOnce', function () {
  var uriThatNeedsNoEncoding = 'https://www.encodeurionce.com/multi/pass?uri=valid';
  var uriThatNeedsEncoding = 'https://www.encodeurionce.com/複数のパス/uri=有効なインスタンス';
  var uriThatIsEncodedOnce = 'https://www.encodeurionce.com/%E8%A4%87%E6%95%B0%E3%81%AE%E3%83%91%E3%82%B9/uri=%E6%9C%89%E5%8A%B9%E3%81%AA%E3%82%A4%E3%83%B3%E3%82%B9%E3%82%BF%E3%83%B3%E3%82%B9';
  var uriThatIsEncodedTooMuch = 'https://www.encodeurionce.com/%2525E8%2525A4%252587%2525E6%252595%2525B0%2525E3%252581%2525AE%2525E3%252583%252591%2525E3%252582%2525B9/uri=%2525E6%25259C%252589%2525E5%25258A%2525B9%2525E3%252581%2525AA%2525E3%252582%2525A4%2525E3%252583%2525B3%2525E3%252582%2525B9%2525E3%252582%2525BF%2525E3%252583%2525B3%2525E3%252582%2525B9';

  it('for a valid URI that needs no encoding, returns it unchanged', function () {
    expect(uriOnce(uriThatNeedsNoEncoding)).to.equal(uriThatNeedsNoEncoding);
  });

  it('for a URI that needs encoding, it correctly encodes it', function () {
    expect(uriOnce(uriThatNeedsEncoding)).to.equal(encodeURI(uriThatNeedsEncoding));
  });

  it('for a URI that is already encoded once, returns it unchaged', function () {
    expect(uriOnce(uriThatIsEncodedOnce)).to.equal(encodeURI(uriThatNeedsEncoding));
  });

  it('for a URI that has been encoded more than once, returns it reduced to as if it were encoded once', function () {
    expect(uriOnce(uriThatIsEncodedTooMuch)).to.equal(encodeURI(uriThatNeedsEncoding));
  });
});