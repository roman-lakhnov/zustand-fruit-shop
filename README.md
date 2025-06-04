# Fruit Shop with Zustand + React + TypeScript

This project was created as a Zustand study. It provides a simple example of
implementing state management logic using Zustand and demonstrates the usage of
the Immer library.

This page preview is available on
[GitHub Pages](https://roman-lakhnov.github.io/zustand-fruit-shop/)

## Overview

The project demonstrates how to:

- Set up a Zustand store with create function
- Define state interfaces and actions
- Create and use store selectors
- Implement cart functionality with Zustand state management
- Use Immer for immutable state updates (in UserStore)

## Project Structure

The main components include:

- `/src/store/CartStore.ts` - Zustand store for managing the shopping cart
- `/src/store/UserStore.ts` - Example store using Immer for immutable updates
- `/src/store/createSelectors.ts` - Utility for creating store selectors
- `/src/Cart.tsx` - Shopping cart component
- `/src/ProductLits.tsx` - Product listing component
- `/src/products.ts` - Product data

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Technologies Used

- React
- Zustand
- Immer
- TypeScript
- Vite
