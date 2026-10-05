/**
 * src/theme/colors.js
 * Soft pastel visual language with dark contrast
 */

export const colors = {
  background: {
    primary: '#FAF9FE',      // Soft milk lavender/white background
    secondary: '#F3F0FA',    // Slightly deeper pastel background for sections
    surface: '#FFFFFF',      // Pure white card surfaces
    overlay: 'rgba(20, 20, 22, 0.45)', // Backdrop for modals
  },

  pastel: {
    lavender: '#E5DEFF',     // Soft Lilac / Lavender
    lavenderLight: '#F3EFFF',
    lavenderDark: '#C7B8FE',
    
    yellow: '#FFF3A8',       // Warm Butter Yellow
    yellowLight: '#FFFBE6',
    yellowDark: '#FFE978',
    
    mint: '#D1F5E8',         // Soft Mint Green
    mintLight: '#EDFCF6',
    mintDark: '#A6EBD3',
    
    peach: '#FFE2D1',        // Soft Coral / Peach
    peachLight: '#FFF3EB',
    
    sky: '#D6EEFF',          // Soft Sky Blue
    skyLight: '#F0F8FF',
  },

  dark: {
    primary: '#141416',      // Jet Black for main CTAs
    secondary: '#232328',    // Deep Charcoal
    tabBar: '#121214',       // Floating Dark Pill Tab Bar
  },

  text: {
    primary: '#111827',      // Deep charcoal (high readability)
    secondary: '#4B5563',    // Slate / Dark Gray
    tertiary: '#9CA3AF',     // Subtle Muted Gray
    inverse: '#FFFFFF',      // White on dark buttons/badges
    inverseMuted: 'rgba(255, 255, 255, 0.75)',
    brand: '#7C3AED',        // Deep Violet / Purple brand accent
  },

  border: {
    subtle: 'rgba(0, 0, 0, 0.05)',
    light: '#ECE8F6',        // Soft pastel border for cards
    medium: '#D8CEEF',
    dark: '#141416',
    focus: '#7C3AED',
  },

  status: {
    success: '#10B981',      // Emerald Green (Correct answer, Passed)
    successBg: '#ECFDF5',
    
    error: '#EF4444',        // Coral Red (Wrong answer, Failed)
    errorBg: '#FEF2F2',
    
    warning: '#F59E0B',      // Amber Yellow (Timer warning, Expiry)
    warningBg: '#FFFBEB',
    
    review: '#8B5CF6',       // Purple (Mark for Review)
    reviewBg: '#F5F3FF',
  },
};

export default colors;
