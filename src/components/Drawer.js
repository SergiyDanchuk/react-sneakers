const Drawer = ({ onClose, onRemoveAtCart, items = [] }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">Кошик
          <img onClick={ onClose } className="cu-p" src="/img/btn-remove.svg" alt="Remove"/>
        </h2>
        <div className="items flex">
          {
            items.map((obj) => (
              <div className="cartItem d-flex align-center mb-20">
                <div
                style={{ backgroundImage: `url(${ obj.imageUrl })` }}
                className="cartItemImg">
               </div>
              <div className="mb-20">
                <p className="m-5">{ obj.title }</p>
                <b>{ obj.price } грн.</b>
              </div>
                <img onClick={ () => onRemoveAtCart( obj.id ) } className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
              </div>
            ))
          }
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Всього:</span>
              <div></div>
              <b>10 000 грн.</b>
            </li>
            <li>
              <span>Податок 5%:</span>
              <div></div>
              <b>400 грн.</b>
            </li>
          </ul>
          <button  className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Drawer;