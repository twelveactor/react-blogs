// 获取页面宽高
import { useState, useEffect } from 'react';
import {throttle} from 'underscore'

export const useWindowSize = () => {
  // 第一步：声明能够体现视口大小变化的状态
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // 第二步：通过生命周期 Hook 声明回调的绑定和解绑逻辑
  useEffect(() => {
    const updateSize = () => setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // 节流，使获取屏幕宽高不要这么频繁
    const newUpdateSize = throttle(updateSize,1000)
    window.addEventListener('resize', newUpdateSize);

    return () => window.removeEventListener('resize', newUpdateSize);
  }, []);

  return windowSize;
}
