import React from 'react';

import '../css/colors-collection.css';

const tints = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const getTextColor = (tint, lightTextStart) =>
  tint < lightTextStart ? 'var(--color-moon-1000)' : 'var(--color-space-100)';

const ColorSwatch = ({ family, tint, textColor }) => (
  <div
    className='color-palette__swatch'
    style={{
      backgroundColor: `var(--color-${family}-${tint})`,
      color: textColor
    }}
  >
    <span>{tint}</span>
  </div>
);

export const ColorPalette = ({ family, lightTextStart }) => (
  <div className='color-palette'>
    {tints.map(tint => (
      <ColorSwatch
        key={`${family}${tint}`}
        family={family}
        tint={tint}
        textColor={getTextColor(tint, lightTextStart)}
      />
    ))}
  </div>
);

export const GradientSwatch = ({ gradient, darkText = false }) => (
  <div
    className='gradient-collection__swatch'
    style={{
      backgroundImage: `var(--gradient-${gradient})`,
      color: darkText ? 'var(--color-moon-900)' : 'var(--color-space-100)'
    }}
  >
    <span>{gradient}</span>
  </div>
);

export const GradientCollection = ({ children }) => (
  <div className='gradient-collection'>{children}</div>
);
