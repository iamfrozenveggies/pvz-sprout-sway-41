import React from 'react';
import { PlantSprout } from './PlantSprout';
import { Tree } from './Tree';
import { Button } from '@/components/ui/button';
import { Copy, Download, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

export const AnimationShowcase = () => {
  const copyCSS = () => {
    const cssCode = `/* Plants vs Zombies Style Sprout Animation */
.sprout-container {
  position: relative;
  display: inline-block;
  animation: sprout-sway 3s ease-in-out infinite;
  transform-origin: bottom center;
}

.sprout-stem {
  position: relative;
  background: linear-gradient(180deg, #4ade80, #16a34a);
  border: 3px solid #166534;
  border-radius: 20px 20px 8px 8px;
  box-shadow: 
    inset 4px 0 0 rgba(255, 255, 255, 0.6),
    0 4px 8px rgba(22, 101, 52, 0.3);
}

.sprout-leaf {
  position: absolute;
  background: linear-gradient(135deg, #65a30d, #4ade80);
  border: 3px solid #166534;
  border-radius: 50% 0 50% 0;
  box-shadow: 
    inset 2px -2px 0 rgba(255, 255, 255, 0.7),
    0 3px 6px rgba(22, 101, 52, 0.2);
  transform-origin: bottom right;
}

.sprout-leaf-left {
  animation: leaf-bounce-left 3s ease-in-out infinite;
}

.sprout-leaf-right {
  animation: leaf-bounce-right 3s ease-in-out infinite;
}

@keyframes sprout-sway {
  0%, 100% { 
    transform: rotate(0deg) scale(1);
  }
  25% { 
    transform: rotate(-8deg) scale(1.02);
  }
  50% { 
    transform: rotate(0deg) scale(1);
  }
  75% { 
    transform: rotate(8deg) scale(1.02);
  }
}

@keyframes leaf-bounce-left {
  0%, 100% { 
    transform: rotate(-15deg) scale(1);
  }
  25% { 
    transform: rotate(-20deg) scale(1.05);
  }
  50% { 
    transform: rotate(-15deg) scale(1);
  }
  75% { 
    transform: rotate(-10deg) scale(1.05);
  }
}

@keyframes leaf-bounce-right {
  0%, 100% { 
    transform: rotate(15deg) scale(1);
  }
  25% { 
    transform: rotate(10deg) scale(1.05);
  }
  50% { 
    transform: rotate(15deg) scale(1);
  }
  75% { 
    transform: rotate(20deg) scale(1.05);
  }
}`;

    navigator.clipboard.writeText(cssCode);
    toast.success('CSS animation code copied to clipboard!');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Header */}
      <div className="text-center mb-12 max-w-2xl">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-8 h-8 text-primary" />
          <h1 className="text-5xl font-bold text-foreground">
            Plant Animations
          </h1>
          <Sparkles className="w-8 h-8 text-primary" />
        </div>
        <p className="text-xl text-muted-foreground mb-6">
          Plants vs. Zombies inspired animations with cartoonish charm - sprout and tree
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={copyCSS}
            className="pvz-button"
            size="lg"
          >
            <Copy className="w-5 h-5 mr-2" />
            Copy CSS Code
          </Button>
          <Button 
            variant="outline"
            className="pvz-button bg-accent hover:bg-accent/80"
            size="lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Export SVG
          </Button>
        </div>
      </div>

      {/* Animation Showcase */}
      <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-12 border-4 border-border shadow-2xl mb-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-4">
            Plant Animation Collection
          </h2>
          <p className="text-muted-foreground">
            Gentle swaying motions with PvZ-style cartoon aesthetics
          </p>
        </div>
        
        <div className="flex justify-center gap-12">
          <div className="text-center">
            <PlantSprout />
            <p className="mt-4 text-lg font-medium text-muted-foreground">Sprout Animation</p>
          </div>
          <div className="text-center">
            <Tree />
            <p className="mt-4 text-lg font-medium text-muted-foreground">Tree Animation</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
        <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-border text-center">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🌱</span>
          </div>
          <h3 className="text-lg font-bold text-card-foreground mb-2">
            PvZ Aesthetic
          </h3>
          <p className="text-sm text-muted-foreground">
            Bold outlines, glossy highlights, and vibrant cartoonish styling
          </p>
        </div>

        <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-border text-center">
          <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">💨</span>
          </div>
          <h3 className="text-lg font-bold text-card-foreground mb-2">
            Gentle Sway
          </h3>
          <p className="text-sm text-muted-foreground">
            Smooth side-to-side motion like a soft breeze
          </p>
        </div>

        <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-border text-center">
          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔄</span>
          </div>
          <h3 className="text-lg font-bold text-card-foreground mb-2">
            Seamless Loop
          </h3>
          <p className="text-sm text-muted-foreground">
            Continuous, smooth animation with no jarring transitions
          </p>
        </div>
      </div>
    </div>
  );
};