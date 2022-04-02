const post = (req, res) => {
    const query = req.body.query;
    const data = [];
    data.filter((c) =>
      c.name
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g, ''))
    );
    res.send(data);
  };

module.exports = {
  post,
};