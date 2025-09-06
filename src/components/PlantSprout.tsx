import React from 'react';

interface PlantSproutProps {
  className?: string;
}

export const PlantSprout: React.FC<PlantSproutProps> = ({ 
  className = '' 
}) => {
  return (
    <div className={`sprout-container w-24 h-32 ${className}`}>
      {/* Stem */}
      <div className="sprout-stem w-6 h-16 mx-auto relative">
        {/* Left Leaf - connected but extending from stem */}
        <div 
          className="sprout-leaf sprout-leaf-left w-12 h-8 absolute"
          style={{
            top: '-14px',
            right: '-36px',
            transformOrigin: 'left center',
          }}
        />
        
        {/* Right Leaf - connected but extending from stem */}
        <div 
          className="sprout-leaf sprout-leaf-right w-12 h-8 absolute"
          style={{
            top: '12px',
            left: '-40px',
            transformOrigin: 'right center',
          }}
        />
      </div>
    </div>
  );
};