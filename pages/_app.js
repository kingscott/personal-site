import '../styles/globals.css'
import Sidebar from '../components/sidebar';

function PhotoGallery({ Component, pageProps }) {
  return (
    <div className='flex xs:flex-col md:flex-row lg:flex-row xs:justify-center md:justify-between m-4 overflow-hidden'>
      <Sidebar />
      <Component {...pageProps} />
    </div>    
  );
}

export async function getStaticProps() {
  let folders = await new Promise((resolve, reject) => { 
    s3.listObjects({Delimiter: '/'}, (err, data) => {
      if (err) {
        reject({ folders: null, error: err });
      } else {
        let folders = data.CommonPrefixes.map(commonPrefix => {
          let prefix = commonPrefix.Prefix.replace('/', '');
          let folderName = decodeURIComponent(prefix);
          let parsedFolderName = folderName.split('-').join(' ');
          return { path: folderName, name: parsedFolderName };
        });         

        resolve({ folders, error: null });
      }
    });
  });

  return {
    props: {
      data: folders
    }
  };
}


export default PhotoGallery;
