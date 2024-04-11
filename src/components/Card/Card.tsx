const Card = ({colorChoice, children}: {colorChoice: string, children: React.ReactNode}) => {
    return <div className={colorChoice}>
      {children}
    </div>
  }
  export default Card;