import { useState } from 'react'

function AddItem({ onAddItem }) {
  const [itemName, setItemName] = useState('')
  const [itemAmount, setItemAmount] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (itemName.trim() === '') {
      alert('Palun sisesta toote nimi!')
      return
    }

    if (itemAmount < 1) {
      alert('Kogus peab olema vähemalt 1!')
      return
    }

    const newItem = {
      id: Date.now(), // Simple ID generation
      name: itemName.trim(),
      amount: parseInt(itemAmount),
      inBasket: false
    }

    onAddItem(newItem)
    
    // Reset form
    setItemName('')
    setItemAmount(1)
  }

  return (
    <div className="add-item-container">
      <h3>Lisa uus toode</h3>
      <form onSubmit={handleSubmit} className="add-item-form">
        <div className="form-group">
          <label htmlFor="itemName">Toote nimi:</label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Sisesta toote nimi..."
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="itemAmount">Kogus:</label>
          <input
            type="number"
            id="itemAmount"
            value={itemAmount}
            onChange={(e) => setItemAmount(e.target.value)}
            min="1"
            className="form-input"
          />
        </div>
        
        <button type="submit" className="add-button">
          Lisa toode
        </button>
      </form>
    </div>
  )
}

export default AddItem
