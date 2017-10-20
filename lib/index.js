/**
 * Returns a string that has been URL-encoded exactly once.
 * @param  {String} uri A string that has been URL encoded an unknown number of times.
 * @returns {String} A string that has been URL encoded exactly once.
 */
module.exports = function encodeOnce(uri) {
  /**
   * Check a string to see if it's unencoded by decoding it and comparing decoded value to original.
   * @param {String} uri A string to check to see if it's unencoded.
   * @returns {String|Boolean} If the string is unencoded, return it; otherwise return false.
   */
  function isUnencoded(uri) {
    var decoded = decodeURI(uri);

    return decoded === uri && decoded;
  }

  /**
   * Recursively decode a string until it is determined to be unencoded.
   * @param {String} uri A string to remove all URL encoding from.
   * @returns {String} A string that has been completely un-URL encoded.
   */
  function completelyDecode(uri) {
    return isUnencoded(uri) || completelyDecode(decodeURI(uri));
  }

  return encodeURI(completelyDecode(uri));
};
