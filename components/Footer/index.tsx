import Link from 'next/link';
// Components
import SocialIcon from './SocialIcon';
// Svg
import Logo from '../../assets/logo.svg';

const socials = [
  { name: 'twitter', link: 'https://twitter.com/defichain' },
  { name: 'github', link: 'https://github.com/DeFiCh' },
  { name: 'youtube', link: 'https://www.youtube.com/DeFiChain' },
  { name: 'linkedIn', link: 'https://www.linkedin.com/company/defichain/' },
  { name: 'reddit', link: 'https://www.reddit.com/r/defiblockchain/' },
  { name: 'facebook', link: 'https://www.facebook.com/defichain.official' },
  { name: 'telegram', link: 'https://t.me/defiblockchain' },
  { name: 'discord', link: 'https://discord.com/invite/py55egyaGy' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="text-[0.875rem] px-4 sm:px-6 md:w-5/6 m-auto text-gray">
        <nav className="flex flex-col md:flex-row gap-y-6">
          <div className="md:basis-2/4">
            <Logo className="mb-3 origin-top-left scale-[.85]" />
            <p className="md:w-[90%]">
              DeFi Blockchain&apos;s primary vision is to enable decentralized finance with Bitcoin-grade security, strength and immutability. It&apos;s a blockchain dedicated to fast, intelligent and transparent financial services, accessible by everyone. For more info, visit
              <Link href="https://defichain.com/"><a className="text-pink-primary"> DeFiChain.com</a></Link>
            </p>
          </div>

          <div className="md:basis-1/4">
            <p className="text-[1rem] text-black font-bold mb-3">Scan</p>
            <ul className="grid grid-cols-2">
              {['Dex', 'Blocks', 'Vaults', 'Auctions', 'Oracles', 'Tokens', 'MasterNodes'].map((item) => (
                <li key={item} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>

          <div className="md:basis-1/4">
            <p className="text-[1rem] text-black font-bold mb-3">Social</p>
            <ul className="grid grid-cols-2">
              {socials.map(({ name, link }: { name: string, link: string }) => (
                <li key={name} className="mb-2 hover:text-pink-primary">
                  <Link href={link} >
                    <a target="_blank" className="flex items-center gap-x-2">
                      <SocialIcon name={name} className="w-[1.125rem] fill-gray" />
                      <span className="capitalize">{name}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>


        <section className="font-bold flex flex-col md:flex-row md:items-center gap-y-2 md:gap-x-6 my-10">
          <p>White Paper</p>
          <p>Privacy Policy</p>
          <p className="md:ml-auto text-black bg-blue-light px-2.5 py-1 rounded w-fit">DeFiChain Node v2.5.0</p>
        </section>
      </div>
    </footer>
  )
}
