const Header = () => {
  return (
    <header className="d-flex justify-between align-center p-40" >
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин найкращих кросівок</p>
        </div>
      </div>
      <ul  className="d-flex">
        <li className="mr-30 cu-p">
          <img width={18} height={17} src="/img/cart.svg" alt="cart"/>
          <span>1250 грн.</span>
        </li>
        <li className="mr-20 cu-p">
          <img width={18} height={18} src="/img/user.svg" alt="user"/>
        </li>
      </ul>
    </header>
  )
}

export default Header;