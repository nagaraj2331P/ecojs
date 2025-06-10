// src/pages/index.js
import React from 'react';
import CounterComponent from '../components/CounterComponent';

export default function Home() {
  return (
    <div>
      <h1>Welcome to EcoAI Counter</h1>
      <CounterComponent />
    </div>
  );
}
