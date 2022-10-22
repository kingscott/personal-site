import Head from 'next/head';
import Image from 'next/image';
import s3 from '../../lib/aws';
import Favicon from "../../components/favicon";

export default function ImageGallery({ images, folder }) {
  let xsImageDimensions = 'xs:h-72';
  let smImageDimensions = 'sm:h-60';
  let mdImageDimensions = 'md:h-52';  
  let lgImageDimensions = 'lg:h-48';
  let xlImageDimensions = 'xl:h-60';

  let responsiveImageDimensions = `${xsImageDimensions} ${smImageDimensions} ${mdImageDimensions} ${lgImageDimensions} ${xlImageDimensions}`;

  return (
    <>
      <Head>
        <title>{`SK - ${folder}`}</title>
        <meta name='description' content={`${folder} series by Scott King`} />
        <Favicon />
      </Head>
      <main>
        <div
          className='grid gap-4 xs:grid-cols-1 md:grid-cols-3 w-full'
        >
          {images.map((e, i) => (
            <div key={i} className={`relative w-full ${responsiveImageDimensions}`}>
              <Image key={i} src={e} className={`w-full ${responsiveImageDimensions}`} layout='fill' objectFit='contain' quality={100} width={0} height={0} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps(context) {    
  let currentFolder = context.query.id;
  let photoKey = `${encodeURIComponent(context.query.id)}/`;

  let images = await new Promise((resolve, reject) => {
    s3.listObjects({Prefix: photoKey}, (err, data) => {
      if (err) {
        reject({ error: err });
      } else {
        let bucketUrl = `https://${s3.config.params.Bucket}.s3.${s3.config.region}.amazonaws.com`;

        // Return all the image URLs
        let images = data.Contents
          .filter(e => e.Key.includes('.png') || e.Key.includes('.jpg') || e.Key.includes('.JPG'))
          .map(image => {
            return `${bucketUrl}/${encodeURIComponent(image.Key)}`;
          });

        resolve(images);
      }
    });
  });

  return {
    props: {
      images,
      folder: currentFolder.split('-').join(' ')
    }
  }
};
