import {  useRef, useEffect, RefObject } from 'react';
function useEventListener<T extends HTMLElement = HTMLDivElement>(
  eventName: string,
  handler: Function,
  element?: RefObject<T>,
) {
  // Create a ref that stores handler
  const savedHandler = useRef<Function>();
  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }
    if (savedHandler.current !== handler) {
      savedHandler.current = handler
    }
    const eventListener = (event: Event) => {
      // eslint-disable-next-line no-extra-boolean-cast
      if (!!savedHandler?.current) {
        savedHandler.current(event)
      }
    }
    targetElement.addEventListener(eventName, eventListener)
    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element, handler])
}

  export default useEventListener;