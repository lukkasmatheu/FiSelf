import React, { createContext, useContext, useState } from 'react';

// Definindo o tipo do contexto
interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

// Criando o contexto
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provedor do contexto
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook para usar o contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};