import React from 'react';

interface TreeProps {
  className?: string;
}

export const Tree: React.FC<TreeProps> = ({ 
  className = '' 
}) => {
  return (
    <div className={`tree-container w-32 h-48 relative ${className}`}>
      {/* Tree Crown - Multiple layers for puffy effect */}
      <div className="tree-crown absolute bottom-16 left-1/2 transform -translate-x-1/2">
        {/* Back layer circles */}
        <div className="tree-foliage-back tree-foliage w-14 h-14 absolute -top-2 -left-2" />
        <div className="tree-foliage-back tree-foliage w-12 h-12 absolute top-3 -right-1" />
        <div className="tree-foliage-back tree-foliage w-13 h-13 absolute top-6 -left-3" />
        
        {/* Middle layer circles */}
        <div className="tree-foliage-mid tree-foliage w-16 h-16 absolute -top-4 left-2" />
        <div className="tree-foliage-mid tree-foliage w-14 h-14 absolute top-1 -right-3" />
        <div className="tree-foliage-mid tree-foliage w-15 h-15 absolute top-4 left-0" />
        <div className="tree-foliage-mid tree-foliage w-12 h-12 absolute top-7 right-1" />
        
        {/* Front layer circles */}
        <div className="tree-foliage-front tree-foliage w-18 h-18 absolute -top-6 left-0" />
        <div className="tree-foliage-front tree-foliage w-16 h-16 absolute -top-1 right-0" />
        <div className="tree-foliage-front tree-foliage w-14 h-14 absolute top-3 left-3" />
        <div className="tree-foliage-front tree-foliage w-13 h-13 absolute top-8 left-1" />
      </div>
      
      {/* Tree Trunk */}
      <div className="tree-trunk w-6 h-20 absolute bottom-0 left-1/2 transform -translate-x-1/2" />
    </div>
  );
};