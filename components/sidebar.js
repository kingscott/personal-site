import Link from 'next/link';
import { useRouter } from 'next/router';

export const Sidebar = ({ children, menuItems }) => { 
  let router = useRouter();

  return menuItems?.length > 0 && (
    <div className='flex xs:flex-col md:flex-row lg:flex-row xs:justify-center md:justify-between m-4 overflow-hidden'>
      <div className='flex flex-col xs:items-center md:items-baseline xs:mb-2 md:mr-2  xs:w-full md:w-2/5 md:max-w-xs'>
        <Link href="/">Scott King</Link>
        {menuItems.map((e, i) => {
          let isFolderSelected = e.path === router.asPath;
          let href = null;
          if (e?.href) {
            href = e.href;
          } 

          if (e?.path) {
            href = { pathname: e.path };
          }
          return (
            <div 
              key={`folder-${i}`} 
              className={`block transform transition-colors duration-200 hover:text-neutral-900 dark:hover:text-white ${isFolderSelected ? 'text-neutral-900' : 'text-base'} 
                          ${isFolderSelected ? 'dark:text-white' : 'text-base'} capitalize cursor-pointer`}>
              <Link href={href}>
                <h2 className='capitalize'>{e.name}</h2>
              </Link>
            </div>
          )
        })}
      </div>
      <>{children}</>
    </div>    
  );
};

export const getLayout = (page, { menuItems }) => {
  return (<Sidebar menuItems={menuItems}>{page}</Sidebar>);
}

