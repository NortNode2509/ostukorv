function ShoppingItem({ item, handleToggleItem }) {
    const handleClick = () => {
        console.log('Item clicked', item)
        handleToggleItem(item.id)
    }
  return (
    <div onClick={handleClick} className={`shopping-item ${item.inBasket ? 'in-basket' : ''}`}>
      <div className="item-info">
        <span className="item-name">{item.name}</span>
        <span className="item-amount">Kogus: {item.amount}</span>
      </div>
      <div className={`basket-status ${item.inBasket ? 'in-basket' : 'not-in-basket'}`}>
        {item.inBasket ? 'Ostukorvis' : 'Pole ostukorvis'}
      </div>
    </div>
  )
}

export default ShoppingItem
