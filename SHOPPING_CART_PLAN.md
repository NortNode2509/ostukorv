# Shopping Cart React Application - Development Plan

## Project Overview
Create a modern shopping cart application using React and Vite. The app will allow users to view a list of shopping items, add/remove items from their basket, and track their shopping progress.

## Phase 1: Project Setup & Data Structure

### 1.1 Replace Default Vite Content
- [ ] Remove default Vite + React boilerplate content
- [ ] Clean up `src/App.jsx` to start with a clean slate
- [ ] Update `src/App.css` with shopping cart specific styles
- [ ] Modify `src/index.css` for global app styling

### 1.2 Create Data Structure
- [ ] Define shopping item object structure:
  ```javascript
  {
    id: number,
    name: string,
    amount: number,
    inBasket: boolean
  }
  ```
- [ ] Create initial data array with 10 example items
- [ ] Include variety of grocery items with different quantities
- [ ] Pre-populate some items as already in basket for demonstration

## Phase 2: Core Components Development

### 2.1 ShoppingItem Component
- [ ] Create individual item display component
- [ ] Display item name and quantity
- [ ] Show visual indication of basket status
- [ ] Include add/remove from basket button (static for now)

### 2.2 ShoppingList Component
- [ ] Create container component for all items
- [ ] Map through items array to render ShoppingItem components
- [ ] Pass necessary props to child components

### 2.3 App Component (Main Container)
- [ ] Set up state management for items array
- [ ] Calculate and display basket summary
- [ ] Structure main app layout

## Phase 3: Styling & UI Design

### 3.1 Modern UI Design
- [ ] Create attractive gradient backgrounds
- [ ] Design card-based layout for items
- [ ] Implement hover effects and animations
- [ ] Use modern color schemes and typography

### 3.2 Visual Feedback
- [ ] Different styling for items in basket vs not in basket
- [ ] Button state changes (add/remove)
- [ ] Smooth transitions and animations
- [ ] Visual basket counter

### 3.3 Responsive Design
- [ ] Mobile-first approach
- [ ] Responsive breakpoints for different screen sizes
- [ ] Touch-friendly button sizes
- [ ] Optimized layout for mobile devices

## Phase 4: Basic Functionality Implementation

### 4.1 State Management
- [ ] Use React useState for items array
- [ ] Display static basket counter
- [ ] Ensure proper component structure

### 4.2 Code Quality
- [ ] Run ESLint and fix any issues
- [ ] Ensure clean, readable code
- [ ] Add comments where necessary
- [ ] Follow React best practices

## Phase 5: Future Enhancements (Optional)

### 5.1 User Interactions (Future)
- [ ] Add/remove items from basket functionality
- [ ] Real-time basket counter updates
- [ ] Visual feedback for user actions
- [ ] Smooth state transitions

### 5.2 Advanced Features (Future)
- [ ] Add item prices and total calculation
- [ ] Implement item categories/filtering
- [ ] Add search functionality
- [ ] Create checkout process

### 5.3 Data Persistence (Future)
- [ ] Consider localStorage for basket persistence
- [ ] Implement data loading/saving
- [ ] Handle page refresh scenarios

### 5.4 Testing & Optimization (Future)
- [ ] Test all user interactions
- [ ] Verify state management works correctly
- [ ] Check responsive design on different devices
- [ ] Performance optimization

## Sample Data Structure

```javascript
const initialItems = [
  { id: 1, name: 'Apples', amount: 5, inBasket: false },
  { id: 2, name: 'Bread', amount: 2, inBasket: true },
  { id: 3, name: 'Milk', amount: 1, inBasket: false },
  { id: 4, name: 'Eggs', amount: 12, inBasket: true },
  { id: 5, name: 'Bananas', amount: 8, inBasket: false },
  { id: 6, name: 'Cheese', amount: 1, inBasket: false },
  { id: 7, name: 'Tomatoes', amount: 6, inBasket: true },
  { id: 8, name: 'Potatoes', amount: 3, inBasket: false },
  { id: 9, name: 'Onions', amount: 4, inBasket: true },
  { id: 10, name: 'Chicken', amount: 2, inBasket: false }
]
```

## Technical Requirements

- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: CSS3 with modern features
- **State Management**: React useState hook
- **Browser Support**: Modern browsers (ES6+)


## Localisation
UI and data should be in Estonian

## Success Criteria

- [ ] Clean, modern UI that works on desktop and mobile
- [ ] Static display of shopping items with basket status
- [ ] Visual basket counter (static)
- [ ] Smooth animations and transitions
- [ ] Responsive design
- [ ] Clean, maintainable code
- [ ] No console errors or warnings

## Estimated Timeline

- **Phase 1**: 30 minutes
- **Phase 2**: 30 minutes
- **Phase 3**: 45 minutes
- **Phase 4**: 15 minutes
- **Total**: ~2 hours

---

*This plan provides a structured approach to building a shopping cart application with clear phases, deliverables, and success criteria.*
