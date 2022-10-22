import Link from 'next/link';
import Logo from './logo';
import ChevronDown from '../public/icon-cheveron-down.svg';
import IconClose from '../public/icon-close.svg';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MobileMenu = ({ onClick, isOpen }) => {
  return (
    <button
      className={`group flex items-center rounded-full px-4 py-2 text-sm font-medium text-neutral-800 dark:text-white dark:bg-neutral-800 shadow-lg shadow-neutral-800/5 ring-1 dark:ring-neutral-700 hover:dark:ring-neutral-500`}
      onClick={onClick}
    >
      {isOpen ?
        <>
          {'Close'}
          <IconClose className='ml-3 h-auto w-4 fill-neutral-700 dark:fill-neutral-700 dark:group-hover:fill-neutral-500'></IconClose>
        </>
        :
        <>
          {'Menu'}
          <ChevronDown className='ml-3 h-auto w-4 fill-neutral-700 dark:fill-neutral-700 dark:group-hover:fill-neutral-500'></ChevronDown>
        </>
      }
    </button>
  );
};

const NavItem = ({ identifier, item, href, isSelected }) => {
  return (
    <li>
      <div
        key={`folder-${identifier}`}
        className={`block xs:mx-0 md:mx-8 my-2 transform transition-colors duration-200 hover:text-neutral-900 dark:hover:text-white ${isSelected ? 'text-neutral-900' : 'text-base'} 
            ${isSelected ? 'dark:text-white' : 'text-base'} capitalize cursor-pointer`}>
        <Link href={href}>
          <h2 className='capitalize'>{item.label}</h2>
        </Link>
      </div>
    </li>
  );
};

const NavItems = ({ className, menuItems, router }) => {
  return (
    <ul className={`flex ${className}`}>
      {menuItems.map((e, i) => {
        let isMenuItemSelected = router.asPath.includes(e.name);
        let href = null;
        if (e?.href) {
          href = e.href;
        }

        if (e?.path) {
          href = { pathname: e.path };
        }
        return (
          <NavItem item={e} href={href} key={i} identifier={i} isSelected={isMenuItemSelected} />
        )
      })}
    </ul>
  );
};

export default function Navbar({ children }) {
  let router = useRouter();
  let [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      path: '/',
      label: 'Home',
      name: 'home',
    },
    {
      path: '/contact',
      label: 'Contact',
      name: 'contact,'
    },
    {
      path: '/scott-king-cv.pdf',
      label: 'CV',
      name: 'cv',
    },
    {
      path: '/photos',
      label: 'Photography',
      name: 'photos',
    },
    {
      href: 'https://kingscott.substack.com',
      label: 'Subscribe',
      name: 'subscribe',
    },
    {
      path: '/other',
      label: 'Other Works',
      name: 'other',
    }
  ];

  const mobileMenuOnClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className='flex h-full flex-col xs:px-8'>
      <div className='flex w-full max-w-5xl self-center mb-8'>
        <header className='flex flex-row w-full relative items-center justify-between overflow-hidden'>
          <div className='m-2'>
            <Logo />
          </div>
          <div className='md:hidden xs:px-4'>
            <MobileMenu onClick={mobileMenuOnClick} isOpen={mobileMenuOpen} />
          </div>
          <nav className='hidden md:block'>
            <NavItems className='items-center' menuItems={menuItems} router={router} />
          </nav>
          <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-neutral-800 h-auto fixed inset-x-4 top-20 z-50 origin-top rounded-md p-8 opacity-100 scale-100 `}>
            <NavItems className={'flex-col justify-start'} menuItems={menuItems} router={router} />
          </nav>
        </header>
      </div>
      <div className='w-full self-center max-w-5xl'>
        {children}
      </div>
    </div>
  );
};
