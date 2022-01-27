import React, { useState, createContext, useContext } from 'react';
import { PairType } from '../pages/index';

type DexStateType = {
  defaultSort: boolean;
  setDefaultSort: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  pair: PairType;
  setPair: React.Dispatch<React.SetStateAction<PairType>>;
}

const Context = createContext<DexStateType>({} as DexStateType);

export default function DexStateProvider({ children }: { children: React.ReactElement }) {
  const [defaultSort, setDefaultSort] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [pair, setPair] = useState<PairType>({} as PairType);

  return (
    <Context.Provider value={{ defaultSort, setDefaultSort, openModal, setOpenModal, pair, setPair }}>
      {children}
    </Context.Provider>
  )
}

export function useDexState() {
  return useContext(Context);
}