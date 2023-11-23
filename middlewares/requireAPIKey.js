const requireAPIKey = (req, res, next) => {
  if (!req.query.apiKey) {
    res.send("API Key is missing");
  } else {
    next();
  }
};

module.exports = requireAPIKey;
