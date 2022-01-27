import { useState } from 'react';
import Link from 'next/link';
// Components
import ScanData from './ScanData';
import TVL from './TVL';
import NavbarItems from './NavbarItems';
import SearchInput from './SearchInput';
// Svgs
import Logo from '../../assets/logo.svg';
import Menu from '../../assets/navbar/menu.svg';
import Close from '../../assets/navbar/close.svg';

export default function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu((toggleMenu) => !toggleMenu)

    if (toggleMenu) {
      document.body.classList.remove('modal-open');
    } else {
      document.body.classList.add('modal-open');
    }
  }

  return (
    <>
      <ScanData className="hidden md:block w-full bg-pink-primary" />

      <nav className="w-full bg-white border-b border-line fixed md:sticky top-0 left-0 z-20">
        <div className="px-4 sm:px-6 md:w-5/6 m-auto">
          <div className="flex justify-between items-center gap-x-2">
            <div>
              <Link href="/">
                <a><Logo /></a>
              </Link>
            </div>

            <div className="cursor-pointer md:hidden py-5">
              {toggleMenu ? <Close onClick={handleToggleMenu} /> : <Menu onClick={handleToggleMenu} />}
              {toggleMenu &&
                // <div className={`md:hidden absolute top-[65px] inset-x-0 w-screen h-[calc(100%-65px)] bg-white overflow-y-scroll z-20`}>
                <div className="fixed bg-white top-[65px] left-0 z-30 w-full h-full overflow-y-auto overflow-x-hidden">
                  <div className="px-4 sm:px-6 flex flex-col gap-y-2 mt-2 mb-32">
                    <SearchInput />
                    <ul className="py-1">
                      <NavbarItems />
                    </ul>
                    <ScanData className="w-full" />
                  </div>
                </div>
              }
            </div>

            <ul className="hidden md:flex items-center grow xl:grow-0 xl:w-[60%]">
              <NavbarItems />
            </ul>

            <div className="hidden md:block w-[15%] xl:w-[20%]">
              <SearchInput />
            </div>
          </div>
        </div>
      </nav>

      <TVL className="w-full bg-white border-b border-line mt-[65px] md:mt-0" />
    </>
  );
}
