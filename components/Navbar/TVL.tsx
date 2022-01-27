export default function TVL({ className }: { className: string }) {
  return (
    <div className={className}>
      <div className="px-4 sm:px-6 md:w-5/6 m-auto">
        <p className="sm:hidden inline-block text-gray mr-3 py-2">TVL in Pool Pairs</p>
        <p className="hidden sm:inline-block text-gray mr-3 py-2">Total Value Locked in Pool Pairs</p>
        <p className="inline-block font-bold py-2">$421,875,591 USD</p>
      </div>
    </div>
  )
}