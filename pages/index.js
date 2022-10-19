import Head from 'next/head';
import Favicon from '../components/favicon';

export async function getStaticProps() {
  return {
    props: {
      menuItems: [
        {
          href: 'mailto:me@kingscott.ca?subject=👋',
          name: 'Email',
        },
        {
          href: 'https://github.com/kingscott',
          name: 'GitHub',    
        },
        {
          href: 'https://linkedin.com/in/kingscott22',
          name: 'LinkedIn'
        },
        {
          path: '/photos',
          name: 'Photography'
        }
      ]
    }
   };
}

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Scott King</title>
        <meta name="description" content="Photography works by Scott King" />
        <Favicon />
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
};
