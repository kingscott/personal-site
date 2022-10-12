import AWS from 'aws-sdk';

const BUCKET_NAME = 'scottkingphotos';

AWS.config.region = 'ca-central-1';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ca-central-1:1b0ee55b-730f-473f-93c9-12abc39a2946',
});

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: {Bucket: BUCKET_NAME},
});

export default s3;
