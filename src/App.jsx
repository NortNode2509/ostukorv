import { useState } from 'react'
import './App.css'

// Estonian shopping cart items data
const initialItems = [
  { id: 1, name: 'Õunad', amount: 5, inBasket: false },
  { id: 2, name: 'Leib', amount: 2, inBasket: true },
  { id: 3, name: 'Piim', amount: 1, inBasket: false },
  { id: 4, name: 'Munad', amount: 12, inBasket: true },
  { id: 5, name: 'Banaanid', amount: 8, inBasket: false },
  { id: 6, name: 'Juust', amount: 1, inBasket: false },
  { id: 7, name: 'Tomatid', amount: 6, inBasket: true },
  { id: 8, name: 'Kartulid', amount: 3, inBasket: false },
  { id: 9, name: 'Sibulad', amount: 4, inBasket: true },
  { id: 10, name: 'Kana', amount: 2, inBasket: false }
]

function ShoppingItem({ item }) {
  return (
    <div className={`shopping-item ${item.inBasket ? 'in-basket' : ''}`}>
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

function ShoppingList({ items }) {
  return (
    <div className="shopping-list">
      {items.map(item => (
        <ShoppingItem 
          key={item.id} 
          item={item} 
        />
      ))}
    </div>
  )
}

function App() {
  const [items] = useState(initialItems)
  const itemsInBasket = items.filter(item => item.inBasket).length
  const totalItems = items.length

  return (
    <div className="app">
      <header className="app-header">
        <h1>🛒 Ostukorv</h1>
        <p className="basket-summary">
          {itemsInBasket} {totalItems}-st tootest ostukorvis
        </p>
      </header>
      
      <main className="app-main">
        <h2>Ostunimekiri</h2>
        <ShoppingList items={items} />
      </main>
    </div>
  )
}

export default App
