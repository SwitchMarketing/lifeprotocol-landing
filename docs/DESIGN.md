---
name: Clinical Precision
colors:
  surface: '#f4fbfd'
  surface-dim: '#d4dbdd'
  surface-bright: '#f4fbfd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef5f7'
  surface-container: '#e8eff1'
  surface-container-high: '#e2e9eb'
  surface-container-highest: '#dde4e6'
  on-surface: '#161d1e'
  on-surface-variant: '#3f484d'
  inverse-surface: '#2a3233'
  inverse-on-surface: '#ebf2f4'
  outline: '#6f787e'
  outline-variant: '#bec8ce'
  surface-tint: '#006684'
  primary: '#005974'
  on-primary: '#ffffff'
  primary-container: '#037394'
  on-primary-container: '#d4f0ff'
  inverse-primary: '#80d1f5'
  secondary: '#944a00'
  on-secondary: '#ffffff'
  secondary-container: '#fe933a'
  on-secondary-container: '#693300'
  tertiary: '#7b4500'
  on-tertiary: '#ffffff'
  tertiary-container: '#985c19'
  on-tertiary-container: '#ffe7d5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bee9ff'
  primary-fixed-dim: '#80d1f5'
  on-primary-fixed: '#001f2a'
  on-primary-fixed-variant: '#004d64'
  secondary-fixed: '#ffdcc5'
  secondary-fixed-dim: '#ffb784'
  on-secondary-fixed: '#301400'
  on-secondary-fixed-variant: '#713700'
  tertiary-fixed: '#ffdcbf'
  tertiary-fixed-dim: '#ffb874'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#6b3b00'
  background: '#f4fbfd'
  on-background: '#161d1e'
  surface-variant: '#dde4e6'
  clinical-teal: '#037394'
  emergency-amber: '#E57F27'
  surface-mist: '#F0F7F9'
  white: '#FFFFFF'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max-width: 1280px
---

## Brand & Style

This design system embodies a professional medical-technology aesthetic, balancing clinical authority with innovative digital care. The personality is reliable, systematic, and life-affirming, designed to evoke trust among healthcare professionals and patients alike.

The visual style is **Corporate / Modern**, leaning heavily into high-clarity layouts and a structured information hierarchy. It utilizes a "Clean-Tech" approach: ample whitespace, a crisp palette, and subtle depth to guide the user through complex clinical data without cognitive fatigue. The interaction model should feel deliberate and stable, avoiding unnecessary flourishes in favor of functional elegance.

## Colors

The palette is anchored by **Clinical Teal**, a deep, trustworthy blue-green that represents medical stability and technological depth. This is used for primary actions, navigation, and structural branding. 

**Emergency Amber** serves as a high-visibility accent color, reserved for critical alerts, primary CTAs, and highlighting life-saving information or key metrics. 

The background system utilizes **Surface Mist**, a very soft, cool-toned neutral that reduces eye strain compared to pure white, providing a sophisticated backdrop for data-heavy interfaces. Pure white is reserved for cards and input fields to create a clear "layering" effect.

## Typography

The design system uses **Hanken Grotesk** as its primary typeface across all levels. This variable-width-inspired sans-serif offers the sharp precision required for technical data while remaining approachable and highly legible in clinical settings.

- **Headlines:** Use Semi-Bold to Bold weights with tighter letter spacing for a confident, authoritative presence.
- **Body:** Standardized on 16px for optimal readability of medical text. Line heights are generous (1.5x) to ensure clear tracking between lines.
- **Labels:** Use Medium to Bold weights, occasionally in all-caps for small categories, to differentiate metadata from primary content.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop, centering content within a 1280px container to maintain focus and readability. The system is built on a 4px baseline grid to ensure vertical rhythm.

- **Desktop:** 12-column grid with 24px gutters.
- **Tablet:** 8-column grid with 20px gutters and 32px side margins.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.

Spacing should favor a "Breathable Information" philosophy, using larger padding within cards and sections (32px+) to prevent the clinical data from feeling cluttered or overwhelming.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and extremely soft **Ambient Shadows**. 

- **Level 0 (Base):** Surface Mist (#F0F7F9) is the canvas.
- **Level 1 (Cards):** Pure White (#FFFFFF) surfaces with a 1px border in a slightly darker tint of the base color.
- **Level 2 (Active/Floating):** Subtle, diffused shadows (Blur: 12px, Y: 4px, 5% Opacity of Clinical Teal) are used to lift active elements like modals or dropdowns.

Avoid heavy shadows; instead, use color contrast and thin, crisp borders to define boundaries between content areas.

## Shapes

The shape language is **Rounded**, using an 8px (0.5rem) base corner radius. This choice softens the "sterile" feel often associated with medical software, making the technology feel more humane and accessible.

- **Buttons & Inputs:** 8px radius.
- **Large Cards:** 16px (1rem) radius.
- **Status Tags:** Fully rounded (pill) to distinguish them from interactive buttons.

## Components

- **Buttons:** Primary buttons use Clinical Teal with white text. High-priority "Action" buttons (e.g., Save, Submit) can use Emergency Amber. All buttons use 16px horizontal padding and 12px vertical padding.
- **Input Fields:** Pure white background with an 8px radius and a 1px border. The border thickens and changes to Clinical Teal on focus.
- **Chips/Status:** Use pill-shapes. Success states use a soft green tint, while warnings use a soft amber tint with Emergency Amber text.
- **Cards:** White containers with 24px - 32px internal padding. They should include a subtle 1px border to separate them from the Surface Mist background.
- **Data Tables:** Use a zebra-striping pattern with the Surface Mist color for alternate rows to maintain legibility in dense data sets. No vertical borders; only horizontal separators.
- **Progress Indicators:** Use Clinical Teal for standard progress and Emergency Amber for critical thresholds or delays.