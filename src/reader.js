const { Reader, Reader: { ask } } = require('akh');
const { merge } = require('ramda');

module.exports = merge(Reader, {
  new: f => ask.map(f),
});
