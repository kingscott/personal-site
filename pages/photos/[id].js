import s3 from '../../lib/aws';
import Image from 'next/image';

export default function ImageGallery({ images }) {
  let xsImageDimentions = 'xs:h-96';
  let smImageDimensions = 'sm:h-96';
  let mdImageDimensions = 'md:h-52';  
  let lgImageDimensions = 'lg:h-48';
  let xlImageDimensions = 'xl:h-48';
  let doXlImageDimensions = '2xl:h-72';
  let trXlImageDimensions = '3xl:h-84';
  let quXlImageDimensions = '4xl:h-96';

  let responsiveImageDimensions = `${xsImageDimentions} ${smImageDimensions} ${mdImageDimensions} ${lgImageDimensions} ${xlImageDimensions} ${doXlImageDimensions} ${trXlImageDimensions} ${quXlImageDimensions}`;

  return (
    <div 
      className='grid gap-4 ml-2 xs:mt-2 xs:justify-items-center w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
    >
      {images.map((e, i) => (        
        <div key={i} className={`relative w-full ${responsiveImageDimensions}`}>          
          <Image key={i} src={e} className={`w-full ${responsiveImageDimensions}`} layout='fill' objectFit='contain' quality={100} width={0} height={0} />
        </div>        
      ))}
    </div>
  );
};

export async function getServerSideProps(context) {    
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
      images
    }
  }
}

