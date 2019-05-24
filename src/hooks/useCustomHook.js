import { useState } from 'react';

export default function useCustomHook() {
  const [greeting] = useState('Hello World');

  return greeting;
}
