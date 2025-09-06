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
            top: '-6px',
            right: '-32px',
            transformOrigin: 'left center',
          }}
        />
        
        {/* Top Right Leaf */}
        <div 
          className="sprout-leaf sprout-leaf-top-right w-10 h-6 absolute"
          style={{
            top: '6px',
            left: '-36px',
            transformOrigin: 'right center',
          }}
        />

        {/* Middle Left Leaf */}
        <div 
          className="sprout-leaf sprout-leaf-left w-12 h-8 absolute"
          style={{
            top: '22px',
            right: '-38px',
            transformOrigin: 'left center',
          }}
        />
        
        {/* Middle Right Leaf */}
        <div 
          className="sprout-leaf sprout-leaf-right w-12 h-8 absolute"
          style={{
            top: '36px',
            left: '-42px',
            transformOrigin: 'right center',
          }}
        />

        {/* Bottom Left Leaf */}
        <div 
          className="sprout-leaf sprout-leaf-bottom-left w-14 h-9 absolute"
          style={{
            top: '52px',
            right: '-42px',
            transformOrigin: 'left center',
          }}
        />
        
        {/* Bottom Right Leaf */}
        <div 
          className="sprout-leaf sprout-leaf-bottom-right w-14 h-9 absolute"
          style={{
            top: '66px',
            left: '-46px',
            transformOrigin: 'right center',
          }}
        />
      </div>
    </div>
  );
};