import s3 from './aws';

export const getImageFolders = async () => {
  let res = await new Promise((resolve, reject) => { 
    s3.listObjects({Delimiter: '/'}, (err, data) => {
      if (err) {
        reject({ folders: null, error: err });
      } else {
        let folders = data.CommonPrefixes.map(commonPrefix => {
        let prefix = commonPrefix.Prefix.replace('/', '');
        let folderName = decodeURIComponent(prefix);
        let parsedFolderName = folderName.split('-').join(' ');
        return { path: `/photos/${folderName}`, name: parsedFolderName };
        });         

        resolve({ folders, error: null });
      }  
   });
  });

  return res;
};

