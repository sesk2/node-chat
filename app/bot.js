const Bot = function () {};

var word_list = [
  {
    'key': 'test',
    'res': 'fuck yourself!'
  },
  {
    'key': 'hello',
    'res': 'shut the fuck up!',
  },
  {
    'key': 'bye',
    'res': 'dont go...'
  }
]


Bot.response = function(msg) {
  ///response = 'I understand you "' + msg + '".';
  response = Bot.deal(msg);
  console.log(response);
  return(response);
};

Bot.deal = function(msg) {
  var check = 0;
  word_list.forEach(function(word){
    if(msg == word.key){
      check++;
      console.log(word.res);
      response = word.res;
    }
  });
  if(check == 0){
    response = 'I dont understand you.';
  }
  return(response);
};

module.exports = Bot;
