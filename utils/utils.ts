export const formatToBRL = (value: string|number) => {
  if(value){
    const numericValue = parseFloat(value.toString().replace(/\D/g, "")) / 100;
    return numericValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
};

