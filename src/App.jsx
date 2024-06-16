import { gsap } from "gsap";
import React, { useEffect } from "react";

function App() {
    useEffect(() => {
        gsap.from('.h1', { duration: 12, opacity: 10, x: 500, delay: 1});
    }, [])
    
    return (
        <div className="h1">
        <h1>K Portfolio</h1>
        </div>
    );
}

export default App;