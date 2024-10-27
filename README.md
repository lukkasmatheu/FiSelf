# FiSelf
- [Sobre o App](https://github.com/lukkasmatheu/FiSelf/edit/main/README.md#sobre-o-app)
- [Prototipo](https://github.com/lukkasmatheu/FiSelf/edit/main/README.md#prot%C3%B3tipos-figma)
- [Banco de dados](https://github.com/lukkasmatheu/FiSelf/edit/main/README.md#banco-de-dados)
- [Planejamento sprint](https://github.com/lukkasmatheu/FiSelf/edit/main/README.md#planejamento-sprints)
## Sobre o app
FiSelf é um aplicativo voltado para apoiar empresários autônomos na gestão eficiente de suas vendas e prestação de serviços. A plataforma oferece uma solução completa para organizar produtos, registrar vendas, controlar serviços prestados, e avaliar o desempenho financeiro de forma prática e centralizada.
- [ ] cadastrar produtos
- [ ] listas seus produtos
- [ ] realizar registro venda
- [ ] realizar registro de serviço
- [ ] ter uma balanço entre custo de produção/vendas de seus produtos.
       
**Futuramente estaremos realizando a implementação das seguintes funcionalidades**

- [ ] Geração de notas fiscais
- [ ] Geração de relatorios financeiros
- [ ] Extrato de responsabilidades fiscais.

## Protótipos Figma
![image](https://github.com/user-attachments/assets/6eb20ccf-a7a8-4dd2-84e0-60f27d825778)
[figma](https://www.figma.com/design/cM8Xwtt9QVDvB4IDr9Pms2/LUCAS-MATHEUS-DOS-SANTOS's-team-library?node-id=0-1&t=Ckbyu3GBS8ofXBH8-1)

## Banco de dados


![fiSelfBd](https://github.com/user-attachments/assets/44cb841b-1fe2-4195-baf9-83d23d0a16d5)

[Draw.io](https://drive.google.com/file/d/10q1JqEQq9yh8QMegOIz_rHkLlQ0xwYgr/view?usp=drive_link)

ou Implementação de um no-sql

USUARIO
```json
{
  "id_usuario": "string",
  "nome": "string",
  "documento": "string",
  "data_nascimento": "string (LocalDate)",
  "email": "string",
  "telefone": "string",
  "usuario_credencial": {
    "senha": "string",
    "tentativas_login": "integer",
    "ultima_tentativa": "string (LocalDateTime)"
  },
  "data_criacao": "string (LocalDateTime)",
  "data_ultima_atualizacao": "string (LocalDateTime)",
  "status": "string"
}

```

Empresa
```json
{
  "id_empresa": "string",
  "cnpj": "string",
  "nome_fantasia": "string",
  "data_contrato": "string (LocalDate)",
  "contrato": "string (link para documento)",
  "endereco": {
    "logradouro": "string",
    "numero": "string",
    "complemento": "string",
    "bairro": "string",
    "cidade": "string",
    "estado": "string",
    "cep": "string"
  },
  "contatos": [
    {
      "nome": "string",
      "email": "string",
      "telefone": "string",
      "cargo": "string"
    }
  ],
  "status": "string"
}

```

Produto
```json
{
  "id_produto": "string",
  "data_criacao": "string (LocalDate)",
  "categoria": ["string"],
  "nome_produto": "string",
  "descricao": "string",
  "custo": "decimal",
  "preco_venda": "decimal",
  "validade": "string (LocalDate)",
  "status": "string",
  "fornecedor": {
    "id_fornecedor": "string",
    "nome": "string",
    "cnpj": "string",
    "contato": "string"
  },
  "estoque": {
    "quantidade": "integer",
    "unidade": "string"
  }
}

```
Venda
```json
{
  "id_venda": "string",
  "id_produto": "string",
  "data_venda": "string (LocalDate)",
  "quantidade": "integer",
  "valor_total": "decimal",
  "nota_fiscal": "string",
  "id_empresa": "string",
  "cliente": {
    "nome": "string",
    "documento": "string"
  },
  "metodo_pagamento": "string",
  "status": "string"
}

```
Serviço Prestado
```json
{
  "id_servico": "string",
  "data_prestacao": "string (LocalDate)",
  "empresa": {
    "id_empresa": "string",
    "nome_fantasia": "string"
  },
  "cliente": {
    "nome": "string",
    "documento": "string",
    "endereco": "string"
  },
  "tipo_servico": "string",
  "descricao_servico": "string",
  "valor_servico": "decimal",
  "imposto_incluso": "boolean",
  "desconto": {
    "valor": "decimal",
    "tipo": "string"
  },
  "nota_fiscal": "string",
  "status": "string",
  "observacoes": "string",
}

```



## Planejamento Sprints

|Sprint 1| Sprint 2| Sprint 3| Sprint 4|
|--|--|--|--|
|Telas de cadastro de produto/Serviço e dashboard|Tela de produtos e registro de venda| Integração com backend banco de dados|Ajustes finais e lançamento do app|
