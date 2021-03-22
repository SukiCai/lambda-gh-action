const aws = require('aws-lambda')
aws.exports.handler = (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!123'),
    };
    return response;
};
