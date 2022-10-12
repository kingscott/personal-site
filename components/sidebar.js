import Link from 'next/link';
import s3 from '../lib/aws';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


const withFolderData = WrappedComponent => {
  const WithFolderData  = () => {
    const [folders, setFolders] = useState(null);

      useEffect(() => {
        (async () => {
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

          if (folders?.folders.length > 0) {
            setFolders(folders.folders);
          } 
          // TODO handle error
        })();        
      }, []);

      return (
        <WrappedComponent folders={folders} />
      )
  }

  return WithFolderData;  
};

const Sidebar = ({ folders }) => { 
  let router = useRouter();

  return folders?.length > 0 && (
    <div className='flex flex-col xs:items-center md:items-baseline mr-2 xs:mb-2 xs:w-full md:w-2/5 max-w-xs'>
      <div>Scott King</div>
      {folders.map((e, i) => {
        let isFolderSelected = e.path === router.query.id;
        return (
          <div 
            key={`folder-${i}`} 
            className={`block transform transition-colors duration-200 hover:text-neutral-900 dark:hover:text-white ${isFolderSelected ? 'text-neutral-900' : 'text-base'} 
                        ${isFolderSelected ? 'dark:text-white' : 'text-base'} capitalize cursor-pointer`}>
            <Link href={{
              pathname: `/photos/${e.path}`,
            }}>
              <h2 className='capitalize'>{e.name}</h2>
            </Link>
          </div>
        )
      })}
    </div>
  );
};

export default withFolderData(Sidebar);


