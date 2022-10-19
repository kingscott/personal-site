import Head from 'next/head';
import Link from 'next/link';
import s3 from '../../lib/aws';
import Favicon from "../../components/favicon";

export default function Photos({ folders }) {
  return folders?.length > 0 && (
    <>
      <Head>
        <title>SK - Photography</title>
        <meta name="description" content="Photography works by Scott King" />
        <Favicon />
      </Head>

      <main>
        {folders.map((e, i) => {
          return (
            <div key={`folder-${i}`} className={`block transform transition-colors duration-200 hover:text-neutral-900 dark:hover:text-white text-base capitalize cursor-pointer`}>
              <Link href={{
                pathname: `${e.path}`,
              }}>
                <h2 className='capitalize'>{e.name}</h2>
              </Link>
            </div>
          )
        })}
      </main>
    </>
  )
}

export async function getStaticProps() {
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

  return {
    props: {
      folders: res?.folders,
    }
  };
}
