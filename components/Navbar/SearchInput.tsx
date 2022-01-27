import Search from '../../assets/navbar/search.svg';

export default function SearchInput() {

  return (
    <>
      <li className="flex-auto bg-gray-light p-2.5 rounded-xl flex items-center w-full">
        <Search />
        <input className="md:hidden ml-2 bg-transparent outline-none w-[80%]" placeholder="Search Block / Txn / Vault ID ..." />
        <input className="hidden md:block ml-2 bg-transparent outline-none w-[60%]" placeholder="Search" />
      </li>
    </>
  )
}