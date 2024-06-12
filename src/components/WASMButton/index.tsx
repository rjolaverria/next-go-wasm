'use client';

import { useWasm } from '@/hooks/useWasm';
import React from 'react';

const WASMButton = () => {
  const { module, loading } = useWasm('./main.wasm');
  const handleClick = () => {
    if (module && !loading) {
      wasmFunctionFromGo();
    }
  };
  return (
    <button disabled={loading} onClick={handleClick}>
      WASMButton
    </button>
  );
};

export default WASMButton;
