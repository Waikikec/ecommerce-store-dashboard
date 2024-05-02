import { useEffect, useState } from "react";

const useOrigin = () => {

  const [isMounted, setIsMounted] = useState<boolean>(false);

  const origin = typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : ""

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return origin;
}

export default useOrigin