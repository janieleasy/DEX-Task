// context hook
import { useDexState } from '../../context';
// Svg
import ChevronDown from '../../assets/dex/chevron-down.svg';
import Switch from '../../assets/dex/switch.svg';
import Tip from '../../assets/dex/tip.svg';

type Props = {
  sort: string,
  setSort: (a: string) => void;
}
export default function TableHeader() {

  const { defaultSort, setDefaultSort } = useDexState();

  const handleSort = () => {
    setDefaultSort((defaultSort) => !defaultSort);
  };

  return (
    <div className="flex justify-between text-gray py-4 pr-3 md:pr-6 lg:pr-10">
      <p className="flex-none">PAIR</p>

      <div className="hidden md:flex grow">

        <button className="basis-[37%] xl:basis-[47%] shrink flex items-center justify-end gap-x-1 " onClick={handleSort}>
          <span className={defaultSort ? 'text-pink-primary' : 'text-gray'}>TOTAL LIQUIDITY</span>
          <ChevronDown className={!defaultSort ? 'fill-gray' : undefined} />

        </button>

        <p className="basis-[20.5%] xl:basis-[18.5%] shrink-0 text-right">LIQUIDITY</p>

        <p className="basis-[29.5%] xl:basis-[23%] shrink-0 text-right">PRICE RATIO</p>

        <button className="basis-[12.5%] xl:basis-[12%] shrink flex items-center justify-end gap-x-1" onClick={handleSort}>
          <div className="group relative">
            <Tip className="group-hover:cursor-help table-head-tip" />
            <div className="group-hover:visible invisible absolute top-7 right-[-450%] bg-white rounded-xl drop-shadow-[0_20px_46px_rgba(0,0,0,0.1)] z-10">
              <p className="text-[0.875rem] text-black text-left py-6 px-9 w-96">On defiscan.live, only block rewards are included in the APR calculation. With commission, the expected APR is much higher. We will update this soon.</p>
            </div>
          </div>
          <span className={!defaultSort ? 'text-pink-primary' : 'text-gray'}>APR</span>
          <ChevronDown className={defaultSort ? 'fill-gray' : undefined} />

        </button>
      </div>

      <button className="md:hidden" onClick={handleSort}>
        <span className={defaultSort ? 'text-pink-primary' : 'text-gray'}>TOTAL LIQUIDITY</span>

        <span className="mx-2">/</span>
        <span className={!defaultSort  ? 'text-pink-primary' : 'text-gray'}>APR</span>

        <Switch className="inline-block ml-2" />
      </button>
    </div>
  )
}