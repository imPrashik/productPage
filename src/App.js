import logo from './logo.svg';
import './App.css';
import Product from './Product';
import { useEffect, useState } from 'react';

export default function App() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);
  return (
    <>
      <Product bigScreen={matches} />
    </>
  )
}