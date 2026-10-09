// ========== CANVAS COMPONENTS ==========
// Renders a single sprite from an atlas using canvas drawImage

import { AtlasSubsystem } from './AtlasSubsystem.jsx';

const tileImageCache = {};
const tileImagePromises = {};

export const loadTileImage = (src) => {
  if (!src) return Promise.resolve(null);
  if (tileImagePromises[src]) return tileImagePromises[src];

  const img = new Image();
  img.crossOrigin = 'anonymous';
  const promise = new Promise((resolve) => {
    img.onload = () => resolve(img);
    img.onerror = () => resolve(img);
    img.src = src;
  });

  tileImageCache[src] = img;
  tileImagePromises[src] = promise;
  return promise;
};

export const SpriteCanvas = React.memo(({ pokemon, atlasKey, sprite, animation, direction, frame, color, text, width = 40, height = 40, style = {}, className }) => {
  const canvasRef = React.useRef(null);
  
  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    let atlasData;
    if (atlasKey) {
      // Item atlas
      atlasData = AtlasSubsystem.getItemAtlasData(atlasKey);
    } else if (animation && direction && frame !== undefined) {
      // Vaporeon atlas
      atlasData = AtlasSubsystem.getPokemonAtlasData(pokemon, animation, direction, frame);
    }
    else if (sprite && direction && frame !== undefined){
      atlasData = AtlasSubsystem.getVfxAtlasData(sprite, direction, frame);
    }
    else if (sprite === 'DMG1' && frame !== undefined){
      atlasData = AtlasSubsystem.getDMGAtlasData(sprite, frame);
    }
    else if (color && text){
      atlasData = AtlasSubsystem.getTextAtlasData(color, text);
    }

    if (!atlasData) {
      console.log('SpriteCanvas missing atlasData', { color, text });
      return;
    }
    
    const render = async () => {
      try {
        const atlasImg = await AtlasSubsystem.loadAtlasImage(atlasData.sheet);
        const ctx = canvas.getContext('2d', { willReadFrequently: false });
        
        // Set canvas size
        canvas.width = width;
        canvas.height = height;
        
        // Draw the sprite from atlas using drawImage with source and destination rects
        ctx.drawImage(
          atlasImg,
          atlasData.x,      // source x
          atlasData.y,      // source y
          atlasData.w,      // source width
          atlasData.h,      // source height
          0,                // destination x
          0,                // destination y
          width,            // destination width
          height            // destination height
        );
      } catch (err) {
        console.error('Error rendering sprite:', err);
      }
    };
    
    render();
  }, [atlasKey, pokemon, sprite, animation, direction, frame, width, height, color, text]);
  
  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        imageRendering: 'smooth',
        imageResolution: 'from-image 300dpi',
        objectFit: 'contain',
        zIndex: 20,
        ...style
      }}
    />
  );
});

export const TileCanvas = React.memo(({ src, alt, className, style = {}, width = 40, height = 40 }) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    let cancelled = false;
    const canvas = canvasRef.current;
    if (!canvas || !src) return;

    const render = async () => {
      const img = await loadTileImage(src);
      if (cancelled || !canvas || !img) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, width, height);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(img, 0, 0, width, height);
    };

    render();
    return () => {
      cancelled = true;
    };
  }, [src, width, height]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      alt={alt}
      style={{
        display: 'block',
        imageRendering: 'pixelated',
        width,
        height,
        ...style,
      }}
    />
  );
});