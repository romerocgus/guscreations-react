import React from "react";

function useObserver(ref){
    const [observed, setObserved] = React.useState(false);

    React.useEffect(function(){
        const observer = new IntersectionObserver(entries =>{
            const {isIntersecting} = entries[0];
            if (isIntersecting){
                setObserved(true);
                observer.disconnect();
            }
        })
        observer.observe(ref.current);
    })
    return [observed, setObserved]
};

export {useObserver};