/*
exports.handler = async (event, context) => {
  try {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` })
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
*/

exports.handler = function(event, context, callback) {
  console.log('work please');
	/*
	Alexa info is in event.body. It's a JSON packet contaning a lot of
	information with the primary thing we want being intent
	*/
	let intent = '';
	if(event.body.request && event.body.intent) intent = event.body.intent.name;
	console.log(`intent=${intent}`);
	callback(null, {
    response: 'sent '+intent
	});
	
}
