type Props = {
  text: string, 
  custom: string, 
  children?: React.ReactElement,
}

export default function Button({ text, custom, children }: Props) {
  return (
    <button className={`${custom} font-bold rounded-xl flex justify-center items-center py-3`}>
      {children}
      <span>{text}</span>
    </button>
  )
}