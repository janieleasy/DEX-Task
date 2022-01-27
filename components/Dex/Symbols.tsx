import DAAPL from '../../assets/token/dAAPL.svg';
import DARKK from '../../assets/token/dARKK.svg';
import DBABA from '../../assets/token/dBABA.svg';
import DBCH from '../../assets/token/dBCH.svg';
import DBTC from '../../assets/token/dBTC.svg';
import DDOGE from '../../assets/token/dDOGE.svg';
import DETH from '../../assets/token/dETH.svg';
import DFIIcon from '../../assets/token/DFI.svg';
import DGLD from '../../assets/token/dGLD.svg';
import DGME from '../../assets/token/dGME.svg';
import DGOOGL from '../../assets/token/dGOOGL.svg';
import DLTC from '../../assets/token/dLTC.svg';
import DPDBC from '../../assets/token/dPDBC.svg';
import DPLTR from '../../assets/token/dPLTR.svg';
import DQQQ from '../../assets/token/dQQQ.svg';
import DSLV from '../../assets/token/dSLV.svg';
import DSPY from '../../assets/token/dSPY.svg';
import DTLT from '../../assets/token/dTLT.svg';
import DTSLA from '../../assets/token/dTSLA.svg';
import DURTH from '../../assets/token/dURTH.svg';
import DUSDIcon from '../../assets/token/DUSD.svg';
import DUSDC from '../../assets/token/dUSDC.svg';
import DUSDT from '../../assets/token/dUSDT.svg';
import DVNQ from '../../assets/token/dVNQ.svg';

export default function Symbols({ tokenA, tokenB }: { tokenA: string, tokenB: string }) {
  return (
    <div className="flex items-center">
      <Icon name={tokenA} />
      <Icon name={tokenB} className="ml-[-4px]" />
    </div>
  )
}

type iconTypes = {
  [key: string] : any
}

const iconTypes: iconTypes = {
  dAAPL: DAAPL,
  dARKK: DARKK,
  dBABA: DBABA,
  dBCH: DBCH,
  dBTC: DBTC,
  dDOGE: DDOGE,
  dETH: DETH,
  DFI: DFIIcon,
  dGLD: DGLD,
  dGME: DGME,
  dGOOGL: DGOOGL,
  dLTC: DLTC,
  dPDBC: DPDBC,
  dPLTR: DPLTR,
  dQQQ: DQQQ,
  dSLV: DSLV,
  dSPY: DSPY,
  dTLT: DTLT,
  dTSLA: DTSLA,
  dURTH: DURTH,
  DUSD: DUSDIcon,
  dUSDC: DUSDC,
  dUSDT: DUSDT,
  dVNQ: DVNQ,
}

const Icon = ({ name, className, ...rest }: { name: string, className?: string }) => {
  const IconName = iconTypes[name];
  return <IconName className={className} {...rest} />;
}
  