import { z } from "zod";

export const ProductSchema = z
  .object({
    validadeData: z.date().optional(),
    minQuantidade: z.string().optional(),
    codigoBarras: z.string().optional(),
    nomeProduto: z.string(),
    precoVenda: z.string().refine(
      (val) => {
        var preco = val.replace(/\D/g, "");
        return !isNaN(parseFloat(preco));
      },
      {
        message: "Preço de venda deve ser um valor válido.",
      }
    ),
    precoCompra: z.string().refine(
      (val) => {
        var preco = val.replace(/\D/g, "");
        return !isNaN(parseFloat(preco));
      },
      {
        message: "Preço de compra deve ser um valor válido.",
      }
    ),
    categoria: z.string().refine((val) => val.length > 0, {
      message: "Categoria não pode ser vazia.",
    }),
    imagem: z.string().optional(),
    quantidade: z.string().refine((val) => !isNaN(parseInt(val, 10)), {
      message: "Quantidade deve ser um número válido.",
    }),
    descricao: z.string().optional(),
  })
  .transform((data) => ({
    idProduct: data.codigoBarras || "",
    idCompany: "",
    creationDate: new Date().toISOString().split("T")[0],
    category: data.categoria,
    productName: data.nomeProduto,
    description: data.descricao,
    cost: parseFloat(data.precoVenda.replace(/\D/g, "")),
    image: data.imagem ?? "",
    salePrice: parseFloat(data.precoCompra.replace(/\D/g, "")),
    expirationDate: data.validadeData
      ? data.validadeData.toISOString().split("T")[0]
      : null,
    quantity: parseInt(data.quantidade, 10),
  }));

export type ProductSchema = z.infer<typeof ProductSchema>;
