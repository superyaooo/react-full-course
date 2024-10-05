import { useEffect } from "react";

export function useDocumentClick() {
    console.log('useDocumentClick used!');
    useEffect(() => {
        const handleDocumentClick = (e) => {
            console.log('clicked document');
        }
        document.addEventListener('click', handleDocumentClick);

        // clean up function
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        }
    }, []);
}