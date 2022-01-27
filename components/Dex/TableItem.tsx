// Types
import { PairType } from '../../pages/';
// Components
import Symbols from './Symbols';
import Button from './Button';
import Modal from './Modal';

// Functions
import formatCurrency from '../../helpers/formatCurency';
import formatPercentage from '../../helpers/formatPercentage';
// Svgs
import ChevronRight from '../../assets/dex/chevron-right.svg';
import Liquidity from '../../assets/dex/liquidity.svg';
// context hook
import { useDexState } from '../../context';


export default function TableItem({ ...item }: PairType) {

  const { openModal, setOpenModal, setPair } = useDexState();

  const handleOpenModal = () => { 
    setOpenModal(true); 
    setPair(item);

    if (!openModal) {
      document.body.classList.add('modal-open');
    }
  }

  return (
    <div className="w-full flex items-center justify-between">
      <Symbols tokenA={item.tokenA.displaySymbol} tokenB={item.tokenB.displaySymbol} />
      
      <div className="font-bold text-right hidden md:flex items-center grow border-b border-line ml-2 py-[1.125rem] pr-6 lg:pr-10 group relative">
        <p className="basis-[20%] xl:basis-[32%] shrink text-left">{item.displaySymbol}</p>

        <p className="basis-[12%] xl:basis-[12%] shrink">${formatCurrency(item.totalLiquidity.usd)}</p>

        <p className="basis-[24%] xl:basis-[20%]  shrink-0">
          <span className='block'>{formatCurrency(item.tokenA.reserve)} {item.tokenA.displaySymbol}</span>
          <span>{formatCurrency(item.tokenB.reserve)} {item.tokenB.displaySymbol}</span>
        </p>

        <p className="basis-[30%] xl:basis-[24%]  shrink-0">
          <span className='block'>{formatCurrency(item.priceRatio.ab)} {item.tokenA.displaySymbol}/{item.tokenB.displaySymbol}</span>
          <span>{formatCurrency(item.priceRatio.ba)} {item.tokenB.displaySymbol}/{item.tokenA.displaySymbol}</span>
        </p>

        <p className="basis-[14%] xl:basis-[12%] shrink">{formatPercentage(item.apr.total)}</p>



        <div className="group-hover:visible invisible absolute top-2/4 right-6 lg:right-6 translate-y-[-50%] flex gap-x-4 z-10">
          <Button text="Add Liquidity" custom="bg-pink-secondary text-pink-primary px-9"><Liquidity className="mr-2" /></Button>
          <Button text="Swap" custom="bg-pink-primary text-white px-7"  />
        </div>

        <div className="group-hover:visible invisible absolute top-0 right-0 h-full w-[100%] bg-gradient-to-l from-white to-[rgba(255,255,255,0.3)]" />
      </div>



      <div className="font-bold md:hidden grow grid grid-cols-[1fr_1fr_1.125rem] border-b border-line ml-2 py-[1.125rem] pr-1.5 cursor-pointer" onClick={handleOpenModal}>
        <p className="row-start-1 row-end-3 col-start-1 col-end-2 self-center">{item.displaySymbol}</p>

        <p className="justify-self-end">${formatCurrency(item.totalLiquidity.usd)}</p>
        <p className="justify-self-end font-normal">{formatPercentage(item.apr.total)}</p>
        <ChevronRight className="row-start-1 row-end-3 col-start-3 col-end-4 self-center justify-self-end" />
      </div>

      {openModal && 
        <div className="fixed top-0 left-0 z-30 w-full h-full overflow-y-auto overflow-x-hidden bg-[rgba(0,0,0,.03)]">
          <div className="absolute inset-x-0 top-[65px]">
            <div className="mx-4 sm:mx-6 bg-white rounded-[1.75rem] pt-5 pb-9 pl-5">
              <Modal />
            </div>
          </div>
        </div>
      }

    </div>
  )
}