import { useRef, useCallback } from 'react'

const TextGlitch = ({children}) => {
    const observer = useRef();

    const textElement = useCallback(node => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            entries[0].isIntersecting ? node.classList.remove('glitch') : node.classList.add('glitch')
        });
        if (node) observer.current.observe(node);
    }, []);

    return (
        <div ref={textElement}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, labore.
        </div>
    )
}

export default TextGlitch