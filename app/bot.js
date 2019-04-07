const Bot = function () {};

Bot.response = function(msg) {
  response = 'I understand you "' + msg + '".';
  console.log(response);
  return(response);
};

module.exports = Bot;
