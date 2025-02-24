import { formatDate, formatToBRL } from "./utils";

export interface Product {
  id: string;
  productName: string;
  quantity: number;
  category: string;
  cost: number;
  image: string;
  description: string;
  salePrice: number;
  expirationDate: string;
  status: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface Category {
  category: string;
  products: Product[];
}

export interface FinancialRecord {
  idCompany: string;
  totalBalance: number;
  totalSale: number;
  totalCost: number;
  isPositive: boolean;
  operations: Operation[];
}

export interface Operation {
  date: string;
  amount: number;
  operation: "CASH_IN" | "CASH_OUT";
  quantity: number;
  idProduct: string;
  type: string;
  description: string;
}

export interface DashboardData {
  totalBalance: {
    amount: string;
    change: string;
  };
  balanceCards: BalanceCard[];
  menuItems: MenuItem[];
  events: Transaction[];
}

export interface BalanceCard {
  color: string;
  label: string;
  value: string;
  percentage: string;
  typeChange: "up" | "down";
}

export interface MenuItem {
  icon: string;
  label: string;
  selected?: boolean;
}

export interface Transaction {
  icon: string;
  color: string;
  title: string;
  description: string;
  amount: string;
  isPositive: boolean;
}

export const formatProductsByCategory = (products: Product[]): Category[] => {
  const categoryMap: Record<string, Product[]> = {};
  products.forEach((product) => {
    if (!categoryMap[product.category]) categoryMap[product.category] = [];
    categoryMap[product.category].push(product);
  });

  return Object.entries(categoryMap).map(([category, products]) => ({
    category,
    products,
  }));
};

export const transformFinancialData = (
  record: FinancialRecord
): DashboardData => {
  const totalCostPercentage = (record.totalCost /(record.totalCost + record.totalSale)) * 100;
  return {
    totalBalance: {
      amount: formatToBRL(record.totalBalance) || "R$ 00.00",
      change:
        formatToBRL(
          record.operations
            .filter((op) => {
              const today = new Date();
              const yesterday = new Date();
              yesterday.setDate(today.getDate() - 1); 

              return (
                new Date(op.date).toISOString().split("T")[0] >=
                yesterday.toISOString().split("T")[0]
              );
            })
            .reduce((acc, op) => op.operation === "CASH_IN" ? acc + op.amount : acc - op.amount, 0)
        ) || "",
    },
    balanceCards: [
      {
        color: "#00cccc",
        label: "Vendas",
        value: formatToBRL(record.totalSale) || "R$ 00.00",
        percentage: `${(100 - totalCostPercentage).toFixed(2)}%`,
        typeChange: "up",
      },
      {
        color: "#7359ff",
        label: "Despesas",
        value: formatToBRL(record.totalCost) || "R$ 00.00",
        percentage: `${totalCostPercentage.toFixed(2)}%`,
        typeChange: "down",
      },
    ],
    menuItems: [
      { icon: "arrow-up-outline", label: "Atividades", selected: true },
      { icon: "bar-chart-outline", label: "Estatisticas" },
    ],
    events: record.operations.reverse().map((operation) => ({
      icon:
        operation.operation === "CASH_IN"
          ? "arrow-up-outline"
          : "arrow-down-outline",
      color: operation.operation === "CASH_IN" ? "green" : "red",
      title: operation.description,
      description: formatDate(operation.date),
      amount: formatToBRL(operation.amount) || "R$ 00.00",
      isPositive: operation.operation === "CASH_IN",
    })),
  };
};
