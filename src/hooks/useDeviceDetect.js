import React from 'react';

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if ('maxTouchPoints' in navigator) {
      setIsMobile(navigator.maxTouchPoints > 0 && 'ontouchstart' in window);
      // setIsMobile(navigator.maxTouchPoints > 0);
    } else if ('msMaxTouchPoints' in navigator) {
      setIsMobile(navigator.msMaxTouchPoints > 0);
    } else {
      var mQ = window.matchMedia && matchMedia('(pointer:coarse)');
      if (mQ && mQ.media === '(pointer:coarse)') {
        setIsMobile(!!mQ.matches);
      } else if ('orientation' in window) {
        // deprecated, but good fallback
        setIsMobile(true);
      } else {
        // Only as a last resort, fall back to user agent sniffing
        let UA = navigator.userAgent;
        setIsMobile(
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
        );
      }
    }
  }, [isMobile]);

  return isMobile;
};

export default useDeviceDetect;
