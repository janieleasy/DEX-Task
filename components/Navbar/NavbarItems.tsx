import Link from 'next/link';

export default function Items() {
  return (
    <>
      <li className="flex-auto text-center py-4 sm:py-5">
        <Link href="/">
          <a className="text-[1.125rem] md:text-[1rem] text-pink-primary hover:text-[#CF008E] font-bold link-bottom">DEX</a>
        </Link>
      </li>
      {['Blocks', 'Vaults', 'Auctions', 'Oracles', 'Tokens', 'MasterNodes'].map((item) => (
        <li key={item} className="flex-auto text-center py-4 sm:py-5 cursor-default">
          <p className="text-[1.125rem] md:text-[1rem]">{item}</p>
        </li>
      ))}
    </>
  );
}