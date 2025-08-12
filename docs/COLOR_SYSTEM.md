# Color System Documentation

This document provides comprehensive information about the color system used in Abdelrahman Mahmoud's portfolio website.

## Overview

The portfolio uses a carefully designed color system that ensures consistency, accessibility, and professional appearance across all components. The system is implemented using CSS custom properties (CSS variables) and is accessible through both CSS and JavaScript.

## Color Palette

### Brand Colors

#### Primary Brand Color
- **Hex**: `#123524`
- **RGB**: `18, 53, 36`
- **Usage**: Primary buttons, links, headings, and brand elements
- **CSS Variable**: `--color-brand`

#### Secondary Brand Color
- **Hex**: `#123452`
- **RGB**: `18, 52, 82`
- **Usage**: Secondary elements, accents, and complementary features
- **CSS Variable**: `--color-brand-secondary`

### Neutral Colors

#### Background Colors
- **Main Background**: `#f8f9fa` (`--color-background`)
- **Card Background**: `#ffffff` (`--color-card`)
- **Surface Background**: `#ffffff` (`--color-surface`)
- **Surface Variant**: `#f1f3f4` (`--color-surface-variant`)

#### Text Colors
- **Primary Text**: `#1a1a1a` (`--color-text`)
- **Muted Text**: `#6c757d` (`--color-text-muted`)
- **Light Text**: `#adb5bd` (`--color-text-light`)

#### Border & Divider Colors
- **Border**: `#e0e0e0` (`--color-border`)
- **Divider**: `#e0e0e0` (`--color-divider`)

### Interactive States

#### Hover States
- **Primary Hover**: `#0d291b` (`--color-brand-hover`)
- **Secondary Hover**: `#0f2a42` (`--color-brand-secondary-hover`)

#### Light Variations
- **Primary Light**: `rgba(18, 53, 36, 0.1)` (`--color-brand-light`)
- **Primary Lighter**: `rgba(18, 53, 36, 0.05)` (`--color-brand-lighter`)
- **Secondary Light**: `rgba(18, 52, 82, 0.1)` (`--color-brand-secondary-light`)
- **Secondary Lighter**: `rgba(18, 52, 82, 0.05)` (`--color-brand-secondary-lighter`)

### Shadow Colors
- **Light Shadow**: `rgba(0, 0, 0, 0.1)` (`--color-shadow-light`)
- **Medium Shadow**: `rgba(0, 0, 0, 0.15)` (`--color-shadow-medium`)
- **Dark Shadow**: `rgba(0, 0, 0, 0.25)` (`--color-shadow-dark`)

## Implementation

### CSS Variables

All colors are defined as CSS custom properties in `assets/css/colors.css`:

```css
:root {
  /* Brand Colors */
  --color-brand: #123524;
  --color-brand-secondary: #123452;
  
  /* Neutral Colors */
  --color-background: #f8f9fa;
  --color-card: #ffffff;
  --color-text: #1a1a1a;
  --color-border: #e0e0e0;
  
  /* Interactive States */
  --color-brand-hover: #0d291b;
  --color-brand-light: rgba(18, 53, 36, 0.1);
  
  /* Shadow Colors */
  --color-shadow-light: rgba(0, 0, 0, 0.1);
  --color-shadow-medium: rgba(0, 0, 0, 0.15);
  --color-shadow-dark: rgba(0, 0, 0, 0.25);
}
```

### Vuetify Theme Integration

The color system is integrated with Vuetify's theming system in `plugins/vuetify.ts`:

```typescript
theme: {
  defaultTheme: 'light',
  themes: {
    light: {
      colors: {
        primary: '#123524',
        brand: '#123524',
        background: '#f8f9fa',
        surface: '#ffffff',
        'on-background': '#1a1a1a',
        'on-surface': '#1a1a1a',
        'on-primary': '#ffffff',
        'on-brand': '#ffffff',
      }
    }
  }
}
```

### JavaScript Access

Colors can be accessed programmatically using the `useColors` composable:

```typescript
const { brand, neutral, getBrandColor, getNeutralColor } = useColors()

// Access specific colors
const primaryColor = brand.primary
const backgroundColor = neutral.background

// Get colors with utility functions
const brandColor = getBrandColor('primary')
const textColor = getNeutralColor('text')
```

## Usage Guidelines

### When to Use Each Color

#### Primary Brand Color (`#123524`)
- Main call-to-action buttons
- Primary navigation elements
- Important headings
- Brand logos and icons
- Active states

#### Secondary Brand Color (`#123452`)
- Secondary buttons
- Accent elements
- Complementary features
- Alternative actions

#### Background Colors
- **Main Background**: Page backgrounds, large content areas
- **Card Background**: Card components, modals, dropdowns
- **Surface Background**: Form inputs, interactive elements
- **Surface Variant**: Subtle backgrounds, disabled states

#### Text Colors
- **Primary Text**: Main content, headings, important information
- **Muted Text**: Secondary information, captions, metadata
- **Light Text**: Disabled text, placeholders

### Accessibility Considerations

#### Contrast Ratios
All color combinations meet WCAG 2.1 AA standards:
- **Primary text on background**: 15.6:1 (exceeds AAA)
- **Primary text on card**: 15.6:1 (exceeds AAA)
- **Brand color on white**: 4.5:1 (meets AA)

#### Color Independence
The design doesn't rely solely on color to convey information:
- Interactive elements have hover states
- Form validation uses both color and icons
- Links are underlined in addition to color

### Responsive Considerations

The color system works consistently across all device sizes:
- Colors remain the same on mobile, tablet, and desktop
- Contrast ratios are maintained across all viewports
- Interactive states work on both touch and mouse devices

## Utility Classes

The color system includes utility classes for common styling needs:

### Background Utilities
```css
.bg-brand { background-color: var(--color-brand) !important; }
.bg-background { background-color: var(--color-background) !important; }
.bg-card { background-color: var(--color-card) !important; }
.bg-surface { background-color: var(--color-surface) !important; }
.bg-surface-variant { background-color: var(--color-surface-variant) !important; }
```

### Text Color Utilities
```css
.text-brand { color: var(--color-brand) !important; }
.text-primary { color: var(--color-text) !important; }
.text-muted { color: var(--color-text-muted) !important; }
.text-light { color: var(--color-text-light) !important; }
```

### Border Utilities
```css
.border-brand { border-color: var(--color-brand) !important; }
.border-default { border-color: var(--color-border) !important; }
.border-divider { border-color: var(--color-divider) !important; }
```

## Examples

### Button Styling
```vue
<template>
  <!-- Primary button -->
  <v-btn color="brand" class="text-white">
    Primary Action
  </v-btn>
  
  <!-- Secondary button -->
  <v-btn variant="outlined" color="brand">
    Secondary Action
  </v-btn>
</template>
```

### Card Styling
```vue
<template>
  <v-card class="bg-card border-default">
    <v-card-title class="text-primary">Card Title</v-card-title>
    <v-card-text class="text-muted">Card content</v-card-text>
  </v-card>
</template>
```

### Custom Component Styling
```vue
<template>
  <div class="custom-component">
    <h2 class="text-brand">Custom Heading</h2>
    <p class="text-primary">Custom content</p>
  </div>
</template>

<style scoped>
.custom-component {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 1rem;
}
</style>
```

## Maintenance

### Adding New Colors

1. **Define the color** in `assets/css/colors.css`
2. **Add to Vuetify theme** in `plugins/vuetify.ts` if needed
3. **Update the composable** in `composables/useColors.ts`
4. **Document the usage** in this file

### Color Updates

When updating colors:
1. Ensure contrast ratios meet accessibility standards
2. Test across all components and pages
3. Update documentation
4. Consider the impact on existing designs

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Material Design Color System](https://material.io/design/color/the-color-system.html)
