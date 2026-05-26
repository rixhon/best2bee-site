const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    screens: {
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      wide: "1560px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "var(--b2b-container-pad-m)",
        tablet: "var(--b2b-container-pad-t)",
        laptop: "64px",
        desktop: "var(--b2b-container-pad-d)",
        wide: "var(--b2b-container-pad-d)",
      },
      screens: {
        desktop: "1280px",
        wide: "1280px",
      },
    },
    extend: {
      colors: {
        background: "var(--b2b-bg-base)",
        foreground: "var(--b2b-ink-900)",
        muted: "var(--b2b-slate-600)",
        border: "var(--b2b-slate-200)",
        primary: "var(--b2b-honey-500)",
        "primary-foreground": "#FFFFFF",
        honey: {
          300: "var(--b2b-honey-300)",
          400: "var(--b2b-honey-400)",
          500: "var(--b2b-honey-500)",
          600: "var(--b2b-honey-600)",
        },
        ink: {
          900: "var(--b2b-ink-900)",
        },
        slate: {
          50: "var(--b2b-slate-50)",
          100: "var(--b2b-slate-100)",
          200: "var(--b2b-slate-200)",
          300: "var(--b2b-slate-300)",
          400: "var(--b2b-slate-400)",
          500: "var(--b2b-slate-500)",
          600: "var(--b2b-slate-600)",
          700: "var(--b2b-slate-700)",
        },
        surface: {
          base: "var(--b2b-bg-base)",
          soft: "var(--b2b-bg-soft)",
          cool: "var(--b2b-bg-cool)",
          "cool-2": "var(--b2b-bg-cool-2)",
          warm: "var(--b2b-bg-warm)",
        },
        danger: {
          500: "var(--b2b-danger-500)",
        },
        info: {
          500: "var(--b2b-info-500)",
        },
        success: {
          500: "var(--b2b-success-500)",
          bg: "var(--b2b-success-bg)",
        },
      },
      fontFamily: {
        sans: ["var(--b2b-font-body)"],
        display: ["var(--b2b-font-display)"],
        body: ["var(--b2b-font-body)"],
        mono: ["var(--b2b-font-mono)"],
      },
      fontSize: {
        "display-xl": [
          "var(--b2b-fs-display-xl)",
          {
            lineHeight: "1.02",
            letterSpacing: "var(--b2b-tracking-display)",
          },
        ],
        "display-l": [
          "var(--b2b-fs-display-l)",
          {
            lineHeight: "1.08",
            letterSpacing: "var(--b2b-tracking-h2)",
          },
        ],
        "display-m": [
          "var(--b2b-fs-display-m)",
          {
            lineHeight: "var(--b2b-lh-snug)",
            letterSpacing: "-0.035em",
          },
        ],
        heading: [
          "var(--b2b-fs-heading)",
          {
            lineHeight: "1.08",
            letterSpacing: "var(--b2b-tracking-h3)",
          },
        ],
        subheading: [
          "var(--b2b-fs-subheading)",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.025em",
          },
        ],
        "body-xl": [
          "var(--b2b-fs-body-xl)",
          {
            lineHeight: "1.48",
          },
        ],
        "body-l": [
          "var(--b2b-fs-body-l)",
          {
            lineHeight: "var(--b2b-lh-loose)",
          },
        ],
        body: [
          "var(--b2b-fs-body)",
          {
            lineHeight: "var(--b2b-lh-loose)",
          },
        ],
        "body-sm": [
          "var(--b2b-fs-body-sm)",
          {
            lineHeight: "var(--b2b-lh-loose)",
          },
        ],
        meta: [
          "var(--b2b-fs-meta)",
          {
            lineHeight: "1.5",
          },
        ],
        eyebrow: [
          "var(--b2b-fs-eyebrow)",
          {
            lineHeight: "1",
            letterSpacing: "var(--b2b-tracking-eyebrow)",
          },
        ],
        caption: [
          "var(--b2b-fs-caption)",
          {
            lineHeight: "1.5",
            letterSpacing: "0.16em",
          },
        ],
      },
      spacing: {
        "b2b-1": "var(--b2b-space-1)",
        "b2b-2": "var(--b2b-space-2)",
        "b2b-3": "var(--b2b-space-3)",
        "b2b-4": "var(--b2b-space-4)",
        "b2b-5": "var(--b2b-space-5)",
        "b2b-6": "var(--b2b-space-6)",
        "b2b-7": "var(--b2b-space-7)",
        "b2b-8": "var(--b2b-space-8)",
        "b2b-9": "var(--b2b-space-9)",
        "b2b-10": "var(--b2b-space-10)",
        "b2b-11": "var(--b2b-space-11)",
        "b2b-12": "var(--b2b-space-12)",
      },
      borderRadius: {
        "b2b-xs": "var(--b2b-radius-xs)",
        "b2b-sm": "var(--b2b-radius-sm)",
        "b2b-md": "var(--b2b-radius-md)",
        "b2b-lg": "var(--b2b-radius-lg)",
        "b2b-xl": "var(--b2b-radius-xl)",
        "b2b-2xl": "var(--b2b-radius-2xl)",
        "b2b-pill": "var(--b2b-radius-pill)",
      },
      boxShadow: {
        "b2b-card": "var(--b2b-shadow-card)",
        "b2b-card-sm": "var(--b2b-shadow-card-sm)",
        "b2b-button": "var(--b2b-shadow-button)",
        "b2b-menu": "var(--b2b-shadow-menu)",
        "b2b-pill": "var(--b2b-shadow-pill)",
      },
      maxWidth: {
        "b2b-container": "var(--b2b-container-max)",
      },
    },
  },
  plugins: [],
};

export default config;
