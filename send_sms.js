



var weather = require('openweather-apis');
weather.setLang('en');
weather.setCity('Stouffville, CA');
weather.setUnits('metric');
weather.setAPPID(process.env.setAPPID);
var tmp;
const client = require('twilio')(process.env.accountSid, process.env.authToken, tmp);


const n = new Promise((resolve, reject) => {
  weather.getDescription(function (err, desc) {
    resolve('the weather right now is ' + desc + ' bring in the cushions!!!');
  });


})

n.then(tmp => {
  console.log('in a promise' + tmp)
  client.messages
    .create({
      body: tmp,
      from: '+12057367113',
      to: '+16478085469'
    })
    .then(message => console.log(message.sid));

})