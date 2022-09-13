const limiterText = (text) => {
  if (text.length > 50) {
    const stringFormatted = `${text.substring(0, 48)}...`
    return stringFormatted
  }
  return text
};

module.exports = {limiterText};
