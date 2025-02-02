export const formatToBRL = (value: string|number) => {
  if(value){
    const numericValue = parseFloat(value.toString().replace(/\D/g, "")) / 100;
    return numericValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const today = new Date();

  if (date.toDateString() === today.toDateString()) {
    return `Hoje, ${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`;
  } else {
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
  }
};