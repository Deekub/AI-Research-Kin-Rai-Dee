import { createContext, useContext, useState, React } from 'react';
import { FoodItem } from '../constants/data';

interface AppContextType {
  selectedFood: FoodItem[]; 
  setSelectedFood: (items: FoodItem[]) => void;
  winner: FoodItem | null;
  setWinner: (item: FoodItem | null) => void;
}

const AppContext = createContext<AppContextType>({} as AppContextType);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedFood, setSelectedFood] = useState<FoodItem[]>([]);
  const [winner, setWinner] = useState<FoodItem | null>(null);

  return (
    <AppContext.Provider value={{ selectedFood, setSelectedFood, winner, setWinner }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);