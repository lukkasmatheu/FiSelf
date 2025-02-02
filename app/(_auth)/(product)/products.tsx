// src/screens/Products.tsx
import React, { useCallback, useEffect, useState } from "react";
import { View, Text, ScrollView, Alert, RefreshControl, SafeAreaView } from "react-native";
import { Logo } from "../../../components/Logo";
import { CardStatics } from "../../../components/Card/cardStatic";
import { Category, Product, formatProductsByCategory } from "../../../utils/parsers";
import {ProductModal} from "./components/ProductModal";
import {CartModal} from "./components/CartModal";
import {FloatingButton} from "./components/FloatingButton";
import api from "../../../api/interceptors";
import {ProductCard} from "./components/ProductCard";

const Products = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [produtosData, setProdutosData] = useState<Category[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleSale, setModalVisibleSale] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [sale, setSale] = useState<{ product: Product; quantity: number }[]>([]);

  useEffect(() => {
    getProducts();
    return () => setProdutosData([]);
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setProdutosData([]);
    getProducts();
    setRefreshing(false);
  }, []);

  const getProducts = () => {
    api.get("/v1/products")
      .then((produt) => {
        const productFilter = formatProductsByCategory(produt.data);
        setProdutosData(productFilter);
      })
      .catch((e) => Alert.alert("Erro ao buscar produtos", e.message));
  };

  const onSale = () =>{
    const saleRequest = sale.map((current) => ({'productId':current.product.id,quantity:current.quantity}))
    api.post("/v1/products/sale",saleRequest)
      .then(() => {
        Alert.alert("Venda registrada com sucesso.")
        setModalVisibleSale(false)
        setSale([])
      })
      .catch((e) => Alert.alert("Erro ao buscar produtos", e.message));
  }


  const handleProductPress = (product: Product) => {
    const existSale = sale.find((saleContent)=> saleContent.product.id === product.id)
    if(existSale){
      setQuantity(existSale.quantity)
    }
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  const closeModalSale = () => setModalVisibleSale(false);

  const addBag = () => {
    if (!selectedProduct || quantity <= 0) {
      Alert.alert("Erro", "Produto ou quantidade inválidos.");
      return;
    }
    setSale((prevSale) => {
      const newSales = prevSale.filter((item) => item.product.id !== selectedProduct.id);
      return [...newSales, { product: selectedProduct, quantity }];
    });
    setQuantity(0);
    closeModal();
  };

  const renderCategory = (category: Category) => (
    <SafeAreaView key={category.category} style={{ marginBottom: 24 }}>
      <Text style={{ margin: 10 ,fontSize: 20 }}>{category.category}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {category.products.map((product) => (
          <ProductCard key={product.id} product={product} onPress={handleProductPress} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );

  return (
    <View style={{ flex: 1, backgroundColor:"#FFF" }}>
      <Logo />
      <Text style={{ fontSize: 25 }}>Produtos em Estoque</Text>
      <ScrollView
        style={{ flex: 1 ,padding:16}}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {produtosData && produtosData.map(renderCategory)}
      </ScrollView>
      <ProductModal
        visible={modalVisible}
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        updateQuantity={(quant) => setQuantity(quant)}
        addBag={addBag}
        quantity={quantity}
      />
      <CartModal visible={modalVisibleSale} sale={sale} onSale={onSale} closeModal={closeModalSale} />
      <FloatingButton onPress={() => setModalVisibleSale(true)} />
    </View>
  );
};

export default Products;
