import Head from 'next/head';
import Link from 'next/link';
import s3 from '../lib/aws';

function Home({ data }) {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>Scott King Photography</title>
        <meta name="description" content="Photography works by Scott King" />
        {/* TODO update favicon */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>        
            {/* {data.map((e, i) => {
              return (
                <div key={`folder-${i}`} className={`block transform transition-colors duration-200 hover:text-neutral-900 dark:hover:text-white text-base capitalize cursor-pointer`}>
                  <Link href={{
                    pathname: `/photos/${e.path}`,
                  }}>
                    <h2 className='capitalize'>{e.name}</h2>
                  </Link>
                </div>    
              )
            })} */}
      </main>
    </div>
  )
}

export async function getServerSideProps() {
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

export default Home;
