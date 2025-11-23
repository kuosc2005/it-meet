import React, {useState, useEffect} from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa';

const SwipeIndicator = () => {
    const [showIndicator, setShowIndicator] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowIndicator(false);
        }, 3000);
        return () => clearTimeout(timer);
      }, []);

      return (
        showIndicator && (
          <div className="flex flex-col items-center text-[#12dc9f] opacity-90">
            <span className="animate-swipe text-xl md:text-2xl"><FaAngleDoubleRight /></span>
            <span className=''>Next Page</span>
          </div>
        )
      );
}

export default SwipeIndicator
