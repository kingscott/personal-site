import Head from 'next/head';
import Link from 'next/link';
import { getLayout } from '../../components/sidebar';
import s3 from '../../lib/aws';
import { getImageFolders } from '../../lib/getImageFolders';

export default function Photos() {
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

export async function getStaticProps() {
  let res = await getImageFolders();

  return {
    props: {
      menuItems: res?.folders,
      error: res?.error,
    }
  };
}

Photos.getLayout = getLayout;
