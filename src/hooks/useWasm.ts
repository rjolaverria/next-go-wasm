import { useRef, useEffect, useState } from 'react';

export const useWasm = (url: string) => {
  const [loading, setLoading] = useState(false);
  const goModule = useRef<WebAssembly.Instance | null>(null);

  useEffect(() => {
    if (goModule?.current) return;

    const initWasm = async () => {
      try {
        setLoading(true);

        const go = new Go();
        const res = await WebAssembly.instantiateStreaming(
          fetch(url),
          go.importObject
        );

        go.run(res.instance);
        goModule.current = res.instance;
      } catch (e: unknown) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    initWasm();
  }, [url]);

  return { module: goModule?.current, loading };
};
