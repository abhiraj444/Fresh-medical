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
      background: '210 20% 97%', // Soft blue-gray
      foreground: '210 20% 17%', // Dark navy
      card: '0 0% 100%',
      'card-foreground': '210 20% 17%',
      popover: '0 0% 100%',
      'popover-foreground': '210 20% 17%',
      primary: '210 90% 45%', // Blue
      'primary-foreground': '0 0% 100%',
      secondary: '210 20% 97%',
      'secondary-foreground': '210 20% 17%',
      muted: '210 15% 92%',
      'muted-foreground': '210 10% 45%',
      accent: '200 90% 94%', // Light blue accent
      'accent-foreground': '0 0% 100%',
      destructive: '0 84.2% 60.2%',
      'destructive-foreground': '0 0% 98%',
      border: '210 20% 90%', // Muted gray
      input: '210 10% 90%',
      ring: '210 90% 45%',
      'chart-1': '12 76% 61%',
      'chart-2': '173 58% 39%',
      'chart-3': '197 37% 24%',
      'chart-4': '43 74% 66%',
      'chart-5': '27 87% 67%',
      radius: '0.5rem',
    },
    header: {
      background: '0 0% 100%', // White
      foreground: '210 20% 17%', // Dark navy
    },
    homepage: {
      background: '210 20% 97%',
      foreground: '210 20% 17%',
      'card-background': '0 0% 100%', // White, same as general card
      'card-foreground': '210 20% 17%',
    },
    aiDiagnosis: {
      background: '210 20% 97%',
      foreground: '210 20% 17%',
      'input-section-background': '210 30% 98%', // Very light blue-gray
      'input-section-foreground': '210 20% 17%',
      'question-display-background': '200 60% 96%', // Light Sky Blue
      'question-display-foreground': '210 20% 17%',
      'answer-display-background': '120 40% 96%', // Light Mint Green
      'answer-display-foreground': '210 20% 17%',
      'analysis-background': '40 60% 96%', // Light Peach/Gold
      'analysis-foreground': '210 20% 17%',
      'diagnosis-card-background': '270 40% 96%', // Light Lavender
      'diagnosis-card-foreground': '210 20% 17%',
    },
    contentGenerator: {
      background: '210 20% 97%',
      foreground: '210 20% 17%',
      'input-background': '250 30% 98%', // Very light purple-gray
      'input-foreground': '210 20% 17%',
      'output-background': '300 60% 96%', // Light Rose
      'output-foreground': '210 20% 17%',
    },
    history: {
      background: '210 20% 95%', // Slightly darker than base background
      foreground: '210 20% 17%',
      'card-background': '0 0% 100%', // White
      'card-foreground': '210 20% 17%',
    },
    login: {
      background: '210 20% 97%',
      foreground: '210 20% 17%',
      'card-background': '0 0% 100%', // White
      'card-foreground': '210 20% 17%',
    },
  },
  dark: {
    global: {
      background: '210 20% 17%', // #1E293B - Very dark slate or blue-gray
      foreground: '210 20% 96%', // #F1F5F9 - Light gray-white
      card: '210 20% 17%',
      'card-foreground': '210 20% 96%',
      radius: '0.5rem',
      popover: '210 20% 17%',
      'popover-foreground': '210 20% 96%',
      primary: '210 90% 60%',
      'primary-foreground': '222 47% 11%',
      secondary: '217 30% 20%',
      'secondary-foreground': '210 20% 96%',
      muted: '217 25% 25%',
      'muted-foreground': '215 25% 65%',
      accent: '170 60% 50%', // #2DD4BF - Dim teal
      'accent-foreground': '0 0% 98%',
      destructive: '0 62.8% 30.6%',
      'destructive-foreground': '0 0% 98%',
      border: '210 20% 26%', // #334155 - Slightly lighter slate
      input: '217 25% 25%',
      ring: '210 90% 60%',
      'chart-1': '220 70% 50%',
      'chart-2': '160 60% 45%',
      'chart-3': '30 80% 55%',
      'chart-4': '280 65% 60%',
      'chart-5': '340 75% 55%',
      question: '210 40% 25%', // Deeper Blue-Gray
      'question-foreground': '210 40% 90%',
      answer: '140 40% 25%', // Deeper Green
      'answer-foreground': '140 40% 90%',
      diagnosis: '270 40% 25%', // Deeper Purple
      'diagnosis-foreground': '270 40% 90%',
      reasoning: '40 40% 25%', // Deeper Gold/Yellow
      'reasoning-foreground': '40 40% 90%',
    },
    homepage: {
      background: '210 20% 17%',
      foreground: '210 20% 96%',
      'card-background': '210 20% 17%',
      'card-foreground': '210 20% 96%',
    },
    aiDiagnosis: {
      background: '210 20% 17%',
      foreground: '210 20% 96%',
      'input-section-background': '210 20% 20%',
      'input-section-foreground': '210 20% 90%',
      'question-display-background': '200 60% 20%',
      'question-display-foreground': '210 20% 90%',
      'answer-display-background': '120 40% 20%',
      'answer-display-foreground': '210 20% 90%',
      'analysis-background': '40 60% 20%',
      'analysis-foreground': '210 20% 90%',
      'diagnosis-card-background': '270 40% 20%',
      'diagnosis-card-foreground': '210 20% 90%',
    },
    contentGenerator: {
      background: '210 20% 17%',
      foreground: '210 20% 96%',
      'input-background': '250 30% 20%',
      'input-foreground': '210 20% 90%',
      'output-background': '300 60% 20%',
      'output-foreground': '210 20% 90%',
    },
    history: {
      background: '210 20% 20%',
      foreground: '210 20% 96%',
      'card-background': '210 20% 17%',
      'card-foreground': '210 20% 96%',
    },
    login: {
      background: '210 20% 17%',
      foreground: '210 20% 96%',
      'card-background': '210 20% 17%',
      'card-foreground': '210 20% 96%',
    },
  },
};
