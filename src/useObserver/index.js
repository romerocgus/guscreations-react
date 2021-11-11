import React from "react";

function useObserver(ref){
    const [observed, setObserved] = React.useState(false);
    const options ={
        rootMargin: "0px 0px 100px 0px"
    }

    React.useEffect(function(){
        const observer = new IntersectionObserver(entries =>{
            const {isIntersecting} = entries[0];
            if (isIntersecting){
                setObserved(true);
                observer.disconnect();
            }
        }, options)
        observer.observe(ref.current);
    })
    return [observed, setObserved]
};

export {useObserver};