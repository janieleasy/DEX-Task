// import React, { useEffect } from 'react';
// context hook
import { useDexState } from '../../context';
// Components
import Symbols from './Symbols';
import Button from './Button';
// Functions
import formatCurrency from '../../helpers/formatCurency';
import formatPercentage from '../../helpers/formatPercentage';
// Svgs
import Liquidity from '../../assets/dex/liquidity.svg';
import Close from '../../assets/dex/close.svg';
// Types
import { PairType } from '../../pages/index';

interface EventTarget {
  addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void;
  dispatchEvent(evt: Event): boolean;
  removeEventListener(type: string, listener?: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void;
}


export default function Modal() {
  const { pair, setPair } = useDexState();
  const { openModal, setOpenModal } = useDexState(); 


  const handleCloseModal = () => {
    setOpenModal(false); 
    setPair({} as PairType);

    if (openModal) {
      document.body.classList.remove('modal-open');
    }
  }

  // useEffect(() => {
  //   document.body.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
  //   return () => {
  //     document.body.removeEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
  //   };
  // }, []);

  return (
    <>
      <div className="flex items-center mr-5">
        <Symbols tokenA={pair.tokenA.displaySymbol} tokenB={pair.tokenB.displaySymbol} />
        <p className="font-bold ml-2 mr-auto">{pair.displaySymbol}</p>
        <button onClick={handleCloseModal}>
          <Close />
        </button>
      </div>

      <div className="my-7">
        <Item title="total liquidity">
          <p>${formatCurrency(pair.totalLiquidity.usd)}</p>
        </Item>

        <Item title="liquidity">
          <>
            <p>{formatCurrency(pair.tokenA.reserve)} {pair.tokenA.displaySymbol}</p>
            <p>{formatCurrency(pair.tokenB.reserve)} {pair.tokenB.displaySymbol}</p>
          </>
        </Item>

        <Item title="price ratio">
          <>
            <p>{formatCurrency(pair.priceRatio.ab)} {pair.tokenA.displaySymbol}/{pair.tokenB.displaySymbol}</p>
            <p>{formatCurrency(pair.priceRatio.ba)} {pair.tokenB.displaySymbol}/{pair.tokenA.displaySymbol}</p>
          </>
        </Item>
        
        <Item title="apr">
          <p>{formatPercentage(pair.apr.total)}</p>
        </Item>

      </div>

      <div className="flex gap-x-4 mr-5">
        <Button text="Add Liquidity" custom="bg-pink-secondary text-pink-primary basis-2/3"><Liquidity className="mr-2" /></Button>
        <Button text="Swap" custom="bg-pink-primary text-white basis-1/3"  />
      </div>
    </>
  )
}


function Item({ title, children }: { title: string, children: React.ReactElement}) {
  return (
    <div className="font-bold py-3 border-b border-line last:border-b-0">
      <p className="uppercase text-gray font-normal mb-1">{title}</p>
      {children}
    </div>
  )
}