exports.handler = function(event, context, callback) {
  const num = Math.random()
  callback(null, {
    statusCode: 200,
    body: `Hello, World ${num}`
  });
}