import ChevronDown from '../../assets/navbar/chevron-down.svg';

const scanData = [
  { section: 'Blocks', data: '1,559,160' },
  { section: 'Tokens', data: '122' },
  { section: 'MasterNodes', data: '101,742' },
  { section: 'Price Feeds', data: '79' },
  { section: 'Total Value Locked', data: '1,279,785,565 USD' },
];

export default function ScanData({ className }: { className: string }) {
  return (
    <div className={className}>
      <div className="text-[0.875rem] md:px-6 md:w-5/6 md:m-auto flex flex-col md:flex-row-reverse justify-between items-center">
        <div className="bg-gray-light md:bg-white w-full md:w-fit mb-2.5 md:my-1.5 py-4 md:py-1 px-5 md:px-2 rounded-xl md:rounded flex items-center gap-x-2">
          <span className="bg-[#14D73B] w-2 h-2 rounded-full" />
          <span className="font-bold mr-auto md:mr-0">MainNet</span>
          <ChevronDown />
        </div>
    
        <div className="bg-blue-light w-full py-4 px-5 rounded-xl md:p-0 md:bg-transparent flex justify-between md:justify-start flex-wrap md:flex-nowrap gap-3.5 md:gap-x-2">
          {scanData.map(({ section, data }) => (
            <p key={section} className="md:last:hidden lg:last:block">
              <span className="text-gray md:text-white">{section}</span>
              <span className="text-black md:text-white md:font-bold ml-1">{data}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
