const aws = require('aws-lambda')
aws.exports.handler = async(event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!Why API not working????'),
    };
    return response;
};
