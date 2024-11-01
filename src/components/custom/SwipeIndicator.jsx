import { MousePointerClick } from 'lucide-react';
import { Pointer } from 'lucide-react';
import { ArrowBigRightDash } from 'lucide-react';
import React, {useState, useEffect} from 'react'

const SwipeIndicator = () => {
    const [showIndicator, setShowIndicator] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
          setShowIndicator(false);
        }, 4000);
        return () => clearTimeout(timer);
      }, []);

      return (
        showIndicator && (
          <div className="flex flex-col items-center text-[#12dc9f] opacity-90">
            <span className="animate-swipe text-2xl"><Pointer /></span>
            {/* <span className='animate-swipe'>Tap</span> */}
          </div>
        )
      );
}

export default SwipeIndicator
