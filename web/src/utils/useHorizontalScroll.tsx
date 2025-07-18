import { useEffect, useRef } from "react";

export function useHorizontalScroll<T extends HTMLDivElement>() {
    
    const scrollSpeed = 500;
    const scrollBehavior = 'smooth'

    const elementRef = useRef<T>(null)

    useEffect(() => {
        const element = elementRef.current

        if (element) {
            const onWheel = (event: WheelEvent) => {
                if (event.deltaY == 0) return

                event.preventDefault()

                element.scrollBy({
                    left: event.deltaY < 0 ? -scrollSpeed : scrollSpeed,
                    behavior: scrollBehavior,
                })
            }

            element.addEventListener('wheel', onWheel)
            
            return () => element.removeEventListener('wheel', onWheel)
        }

    }, [])

    return elementRef
}