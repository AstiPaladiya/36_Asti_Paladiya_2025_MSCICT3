function capitalizeWords(text) {
  if (typeof text !== 'string') return '';
  return text
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

module.exports = { capitalizeWords };
