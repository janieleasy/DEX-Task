import React, { useMemo } from 'react';
import Meta from '../components/Meta';
// context hook
import { useDexState } from '../context';
// components
import TableHeader from '../components/Dex/TableHeader';
import TableItem from '../components/Dex/TableItem';

export interface PairType {
  id: string,
  symbol: string,
  displaySymbol: string,
  name: string,
  status: boolean,
  totalLiquidity: {
    token: string,
    usd: string,
  },
  apr: {
    reward: number,
    total: number,
  },
  rewardPtc: string,
  tokenA: {
    id: string,
    symbol: string,
    displaySymbol: string,
    reserve: string,
    blockCommission: string,
  },
  tokenB: {
    id: string,
    symbol: string,
    displaySymbol: string,
    reserve: string,
    blockCommission: string,
  }
  priceRatio: {
    ab: string,
    ba: string,
  },
  ownerAddress: string,
  commission: string,
  creation: {
    tx: string,
    height: number,
  },
  tradeEnable: boolean,
}

export default function Dex ({ data }: { data: PairType[] }) {

  const { defaultSort } = useDexState();

  const pairs = useMemo(() => {
    if (!defaultSort) {
      return data.sort((a, b) => b.apr.total - a.apr.total);
    }

    return data.sort((a, b) => Number(b.totalLiquidity.usd) - Number(a.totalLiquidity.usd));
  }, [data, defaultSort]);

  return (
    <>
      <Meta
        title="DEX ・ " 
        keywords="DEX Pool Pairs" 
        description="Supply liquidity to BTC, ETH, USDT, USDC and many other pool pairs to power the Decentralized Exchange."
      />

      <div className="w-full px-4 sm:px-6 md:w-5/6 m-auto mb-24">
        <h1 className="text-[1.25rem] font-bold my-5">DEX Pool Pairs</h1>
        <div className="rounded-2xl shadow-[0_20px_46px_rgba(0,0,0,0.1)] pl-4">
          <TableHeader />
          <ul>
            {pairs.map((item) => (
              <li key={item.id}>
                <TableItem {...item} />
              </li> 
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await(await fetch('https://ocean.defichain.com/v0/mainnet/poolpairs')).json();
  const data = res.data;

  return {
    props: {
      data,
    },
  };
}
