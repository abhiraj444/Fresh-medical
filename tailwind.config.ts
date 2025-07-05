import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class', // Required for `dark:` prefix strategy
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}', // if you use src directory
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', ...fontFamily.sans],
      },
      colors: {
        // 🌐 Global Theme Colors (already set in CSS vars)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        primary: 'hsl(var(--primary))',
        'primary-foreground': 'hsl(var(--primary-foreground))',
        destructive: 'hsl(var(--destructive))',
        'destructive-foreground': 'hsl(var(--destructive-foreground))',

        // 🩺 AI Diagnosis Section
        'ai-diagnosis-input-section': 'hsl(var(--input-section-background))',
        'ai-diagnosis-input-section-foreground': 'hsl(var(--input-section-foreground))',
        'ai-diagnosis-answer-display': 'hsl(var(--answer-display-background))',
        'ai-diagnosis-answer-display-foreground': 'hsl(var(--answer-display-foreground))',
        'ai-diagnosis-analysis': 'hsl(var(--analysis-background))',
        'ai-diagnosis-analysis-foreground': 'hsl(var(--analysis-foreground))',
        'ai-diagnosis-diagnosis-card': 'hsl(var(--diagnosis-card-background))',
        'ai-diagnosis-diagnosis-card-foreground': 'hsl(var(--diagnosis-card-foreground))',

        // 📄 Content Generator Section
        'content-input-background': 'hsl(var(--content-input-background))',
        'content-input-foreground': 'hsl(var(--content-input-foreground))',
        'content-output-background': 'hsl(var(--content-output-background))',
        'content-output-foreground': 'hsl(var(--content-output-foreground))',

        // 🏠 Homepage
        'homepage-card-background': 'hsl(var(--homepage-card-background))',
        'homepage-card-foreground': 'hsl(var(--homepage-card-foreground))',

        // 📜 History
        'history-background': 'hsl(var(--history-background))',
        'history-card-background': 'hsl(var(--history-card-background))',
        'history-card-foreground': 'hsl(var(--history-card-foreground))',

        // 🔐 Login
        'login-background': 'hsl(var(--login-background))',
        'login-card-background': 'hsl(var(--login-card-background))',
        'login-card-foreground': 'hsl(var(--login-card-foreground))',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        lg: 'calc(var(--radius) + 2px)',
        xl: 'calc(var(--radius) + 4px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
export default config;
