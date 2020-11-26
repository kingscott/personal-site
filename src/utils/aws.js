import AWS from 'aws-sdk';

AWS.config.region = 'ca-central-1';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ca-central-1:1b0ee55b-730f-473f-93c9-12abc39a2946',
});

const BUCKET_NAME = 'scottkingphotos';

class awsApi {
  #s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {Bucket: BUCKET_NAME},
  });

  async listAvailableFolders() {
    return new Promise((resolve, reject) => {
      return this.#s3.listObjects({Delimiter: '/'}, (err, data) => {
        if (err) {
          // TODO
        } else {
          let folders = data.CommonPrefixes.map(commonPrefix => {
            let prefix = commonPrefix.Prefix.replace('/', '');
            let folderName = decodeURIComponent(prefix);

             return folderName;
          });

          resolve(folders);
        }
      });
    });
  }

  async getImagesInFolder(folderName) {
    let photoKey = `${encodeURIComponent(folderName)}/`;

    return new Promise((resolve, reject) => {
      this.#s3.listObjects({Prefix: photoKey}, (err, data) => {
        if (err) {
          // TODO
        } else {
          let bucketUrl = `${this.request.httpRequest.endpoint.href}/`;

          // Return all the image URLs
          let images = data.Contents.map(image => {
            return `${bucketUrl}${encodeURIComponent(image.Key)}`;
          });
        }
      });
    });
  }
}

export default new awsApi();
