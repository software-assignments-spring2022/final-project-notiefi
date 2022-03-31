module.exports = {
  get: (req, res) => {
    res.send('/profile GET');
  },

  post: (req, res) => {
    res.send('/profile POST');
  },
};
