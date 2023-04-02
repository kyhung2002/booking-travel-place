import { useEffect, useRef, useState } from "react";

export default function useClickOutside() {
    const [showComponent, setShowComponent] = useState(false);
    const componentRef = useRef(null);
    useEffect(() => {
        function handleClickOutComponent(e) {
            if (componentRef.current && !componentRef.current.contains(e.target))
                setShowComponent(false)
        }
        document.addEventListener("click", handleClickOutComponent)
        return () => {
            document.removeEventListener("click", handleClickOutComponent)
        }
    }, []);
    return {
        showComponent, setShowComponent, componentRef
    }
}