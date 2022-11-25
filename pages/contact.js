import Head from 'next/head';
import Favicon from "../components/favicon";

export default function Contact() {
  return (
    <>
      <Head>
        <title>SK - Contact</title>
        <meta name="description" content="Scott King contact information" />
        <Favicon />
      </Head>
      <main>
        <div>
          {"If you'd like to get a hold of me, shoot me an email "}
          <a href={'mailto:me@kingscott.ca?subject=👋'} className='underline'>here</a>
          {'.'}
          <br />
          <code>
            me@kingscott.ca
          </code>
          <br /><br />
          <div>
            <p>{'Otherwise, you can find me here:'}</p>
            <ul>
              <li>
                <a href='https://mstdn.ca/@kingscott' className='underline' target='_blank' rel='noreferrer'>Mastodon</a>
              </li>
              <li>
                <a href='https://github.com/kingscott' className='underline' target='_blank' rel='noreferrer'>GitHub</a>
              </li>
              <li>
                <a href='https://linkedin.com/in/kingscott22' className='underline' target='_blank' rel='noreferrer'>LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}