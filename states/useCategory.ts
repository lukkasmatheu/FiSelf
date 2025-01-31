import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";


const defaultCategories = ["Beleza", "Eletrodomesticos", "Limpeza"];


type CategoryState = {
  categories: string[]; 
  addCategory: (category: string) => void;
  loadCategories: () => void;
  clearCategories: () => void;
};

// Criando o Zustand Store com persistência
const useCategoryStore = create<CategoryState>()(
  persist(
    (set, get) => ({
      categories: defaultCategories, 


      addCategory: (category: string) => {
        if (!category.trim()) return; 
        const newCategories = [...get().categories, category];
        set({ categories: newCategories });
      },

 
      loadCategories: () => {
        const { categories } = get();
        if (!categories || categories.length === 0) {
          set({ categories: defaultCategories });
        }
      },


      clearCategories: () => set({ categories: [] }),
    }),
    {
      name: "category-asyncstorage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useCategoryStore;
