export interface ThemeColors {
  light: {
    global: {
      background: string;
      foreground: string;
      card: string;
      'card-foreground': string;
      popover: string;
      'popover-foreground': string;
      primary: string;
      'primary-foreground': string;
      secondary: string;
      'secondary-foreground': string;
      muted: string;
      'muted-foreground': string;
      accent: string;
      'accent-foreground': string;
      destructive: string;
      'destructive-foreground': string;
      border: string;
      input: string;
      ring: string;
      'chart-1': string;
      'chart-2': string;
      'chart-3': string;
      'chart-4': string;
      'chart-5': string;
      radius: string;
    };
    header: {
      background: string;
      foreground: string;
    };
    homepage: {
      background: string;
      foreground: string;
      'card-background': string;
      'card-foreground': string;
    };
    aiDiagnosis: {
      background: string;
      foreground: string;
      'input-section-background': string;
      'input-section-foreground': string;
      'question-display-background': string;
      'question-display-foreground': string;
      'answer-display-background': string;
      'answer-display-foreground': string;
      'analysis-background': string;
      'analysis-foreground': string;
      'diagnosis-card-background': string;
      'diagnosis-card-foreground': string;
    };
    contentGenerator: {
      background: string;
      foreground: string;
      'input-background': string;
      'input-foreground': string;
      'output-background': string;
      'output-foreground': string;
    };
    history: {
      background: string;
      foreground: string;
      'card-background': string;
      'card-foreground': string;
    };
    login: {
      background: string;
      foreground: string;
      'card-background': string;
      'card-foreground': string;
    };
  };
  dark: {
    global: {
      background: string;
      foreground: string;
      card: string;
      'card-foreground': string;
      popover: string;
      'popover-foreground': string;
      primary: string;
      'primary-foreground': string;
      secondary: string;
      'secondary-foreground': string;
      muted: string;
      'muted-foreground': string;
      accent: string;
      'accent-foreground': string;
      destructive: string;
      'destructive-foreground': string;
      border: string;
      input: string;
      ring: string;
      'chart-1': string;
      'chart-2': string;
      'chart-3': string;
      'chart-4': string;
      'chart-5': string;
      radius: string;
      question: string;
      'question-foreground': string;
      answer: string;
      'answer-foreground': string;
      diagnosis: string;
      'diagnosis-foreground': string;
      reasoning: string;
      'reasoning-foreground': string;
    };
    homepage: {
      background: string;
      foreground: string;
      'card-background': string;
      'card-foreground': string;
    };
    aiDiagnosis: {
      background: string;
      foreground: string;
      'input-section-background': string;
      'input-section-foreground': string;
      'question-display-background': string;
      'question-display-foreground': string;
      'answer-display-background': string;
      'answer-display-foreground': string;
      'analysis-background': string;
      'analysis-foreground': string;
      'diagnosis-card-background': string;
      'diagnosis-card-foreground': string;
    };
    contentGenerator: {
      background: string;
      foreground: string;
      'input-background': string;
      'input-foreground': string;
      'output-background': string;
      'output-foreground': string;
    };
    history: {
      background: string;
      foreground: string;
      'card-background': string;
      'card-foreground': string;
    };
    login: {
      background: string;
      foreground: string;
      'card-background': string;
      'card-foreground': string;
    };
  };
}

export const themeColors: ThemeColors = {
  light: {
    global: {
      background: '0 0% 95%', // Light gray background
      foreground: '0 0% 10%', // Very dark gray/black for text
      card: '0 0% 100%',
      'card-foreground': '0 0% 10%',
      popover: '0 0% 100%',
      'popover-foreground': '0 0% 10%',
      primary: '0 0% 20%', // Dark gray for primary elements
      'primary-foreground': '0 0% 100%', // White text on primary
      secondary: '0 0% 90%', // Slightly darker gray for secondary
      'secondary-foreground': '0 0% 15%', // Darker gray for secondary text
      muted: '0 0% 85%', // Muted gray
      'muted-foreground': '0 0% 30%', // Darker muted text
      accent: '0 0% 80%', // Accent gray
      'accent-foreground': '0 0% 10%', // Dark accent text
      destructive: '0 84.2% 60.2%', // Red for destructive actions
      'destructive-foreground': '0 0% 98%', // White text on destructive
      border: '0 0% 75%', // Light gray border
      input: '0 0% 90%', // Light gray input background
      ring: '0 0% 20%', // Dark gray ring
      'chart-1': '12 76% 61%',
      'chart-2': '173 58% 39%',
      'chart-3': '197 37% 24%',
      'chart-4': '43 74% 66%',
      'chart-5': '27 87% 67%',
      radius: '0.5rem',
    },
    header: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
    },
    homepage: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      'card-background': 'var(--card)',
      'card-foreground': 'var(--card-foreground)',
    },
    aiDiagnosis: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      'input-section-background': 'var(--secondary)',
      'input-section-foreground': 'var(--secondary-foreground)',
      'question-display-background': 'var(--muted)',
      'question-display-foreground': 'var(--muted-foreground)',
      'answer-display-background': 'var(--muted)',
      'answer-display-foreground': 'var(--muted-foreground)',
      'analysis-background': 'var(--muted)',
      'analysis-foreground': 'var(--muted-foreground)',
      'diagnosis-card-background': 'var(--card)',
      'diagnosis-card-foreground': 'var(--card-foreground)',
    },
    contentGenerator: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      'input-background': 'var(--accent)',
      'input-foreground': 'var(--accent-foreground)',
      'output-background': 'var(--accent)',
      'output-foreground': 'var(--accent-foreground)',
    },
    history: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      'card-background': 'var(--card)',
      'card-foreground': 'var(--card-foreground)',
    },
    login: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      'card-background': 'var(--card)',
      'card-foreground': 'var(--card-foreground)',
    },
  },
  dark: {
    global: {
      background: '0 0% 15%', // Dark gray background
      foreground: '0 0% 90%', // Light gray for text
      card: '0 0% 10%',
      'card-foreground': '0 0% 90%',
      radius: '0.5rem',
      popover: '0 0% 10%',
      'popover-foreground': '0 0% 90%',
      primary: '0 0% 80%', // Light gray for primary elements
      'primary-foreground': '0 0% 10%', // Dark text on primary
      secondary: '0 0% 20%', // Slightly lighter gray for secondary
      'secondary-foreground': '0 0% 85%', // Lighter gray for secondary text
      muted: '0 0% 25%', // Muted dark gray
      'muted-foreground': '0 0% 70%', // Lighter muted text
      accent: '0 0% 30%', // Accent dark gray
      'accent-foreground': '0 0% 90%', // Light accent text
      destructive: '0 62.8% 30.6%', // Red for destructive actions
      'destructive-foreground': '0 0% 98%', // White text on destructive
      border: '0 0% 40%', // Dark gray border
      input: '0 0% 25%', // Dark gray input background
      ring: '0 0% 80%', // Light gray ring
      'chart-1': '220 70% 50%',
      'chart-2': '160 60% 45%',
      'chart-3': '30 80% 55%',
      'chart-4': '280 65% 60%',
      'chart-5': '340 75% 55%',
      question: '0 0% 90%', // Light gray
      'question-foreground': '0 0% 90%',
      answer: '0 0% 90%', // Light gray
      'answer-foreground': '0 0% 90%',
      diagnosis: '0 0% 90%', // Light gray
      'diagnosis-foreground': '0 0% 90%',
      reasoning: '0 0% 90%', // Light gray
      'reasoning-foreground': '0 0% 90%',
    },
    homepage: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      'card-background': 'var(--card)',
      'card-foreground': 'var(--card-foreground)',
    },
    aiDiagnosis: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      'input-section-background': 'var(--secondary)',
      'input-section-foreground': 'var(--secondary-foreground)',
      'question-display-background': 'var(--muted)',
      'question-display-foreground': 'var(--accent-foreground)',
      'answer-display-background': 'var(--accent)',
      'answer-display-foreground': 'var(--accent-foreground)',
      'analysis-background': 'var(--muted)',
      'analysis-foreground': 'var(--accent-foreground)',
      'diagnosis-card-background': 'var(--card)',
      'diagnosis-card-foreground': 'var(--card-foreground)',
    },
    contentGenerator: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      'input-background': 'var(--accent)',
      'input-foreground': 'var(--accent-foreground)',
      'output-background': 'var(--accent)',
      'output-foreground': 'var(--accent-foreground)',
    },
    history: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      'card-background': 'var(--card)',
      'card-foreground': 'var(--card-foreground)',
    },
    login: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      'card-background': 'var(--card)',
      'card-foreground': 'var(--card-foreground)',
    },
  },
};
