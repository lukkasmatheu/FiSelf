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

export const formatProductsByCategory = (products: Product[]): Category[] => {

  const categoryMap: Record<string, Product[]> = {};
  products.forEach((product) => {
    if (!categoryMap[product.category]) 
        categoryMap[product.category] = [];
    categoryMap[product.category].push(product);
  });

  return Object.entries(categoryMap).map(([category, products]) => ({
    category,
    products,
  }));
};
