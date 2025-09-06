import React from 'react';

interface PlantSproutProps {
  className?: string;
}

export const PlantSprout: React.FC<PlantSproutProps> = ({ 
  className = '' 
}) => {
  return (
    <div className={`sprout-container w-24 h-44 ${className}`}>
      {/* Stem */}
      <div className="sprout-stem w-6 h-28 mx-auto relative">
        {/* Top Left Leaf */}
        <div 
          className="sprout-leaf sprout-leaf-top-left w-10 h-6 absolute"
          style={{
            top: '-8px',
            right: '-32px',
            transformOrigin: 'left center',
          }}
        />
        
        {/* Top Right Leaf */}
        <div 
          className="sprout-leaf sprout-leaf-top-right w-10 h-6 absolute"
          style={{
            top: '2px',
            left: '-36px',
            transformOrigin: 'right center',
          }}
        />

        {/* Middle Left Leaf */}
        <div 
          className="sprout-leaf sprout-leaf-left w-12 h-8 absolute"
          style={{
            top: '17px',
            right: '-38px',
            transformOrigin: 'left center',
          }}
        />
        
        {/* Middle Right Leaf */}
        <div 
          className="sprout-leaf sprout-leaf-right w-12 h-8 absolute"
          style={{
            top: '29px',
            left: '-42px',
            transformOrigin: 'right center',
          }}
        />

        {/* Mini Tree */}
        <div 
          className="absolute"
          style={{
            top: '35px',
            right: '-50px',
            transformOrigin: 'left center',
          }}
        >
          {/* Tree trunk */}
          <div className="w-2 h-8 bg-gradient-to-b from-amber-600 to-amber-800 border border-amber-900 rounded-sm mx-auto" />
          {/* Tree foliage */}
          <div className="relative -mt-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 border-2 border-green-800 rounded-full absolute -top-2 -left-3" />
            <div className="w-6 h-6 bg-gradient-to-br from-green-300 to-green-500 border border-green-700 rounded-full absolute -top-1 -left-1" />
          </div>
        </div>
        
        {/* Bottom Right Leaf */}
        <div 
          className="sprout-leaf sprout-leaf-bottom-right w-14 h-9 absolute"
          style={{
            top: '53px',
            left: '-46px',
            transformOrigin: 'right center',
          }}
        />
      </div>
    </div>
  );
};