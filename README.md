# FiSelf
- [Sobre o App](https://github.com/lukkasmatheu/FiSelf/edit/main/README.md#sobre-o-app)
- [Prototipo](https://github.com/lukkasmatheu/FiSelf/edit/main/README.md#prot%C3%B3tipos-figma)
- [Banco de dados](https://github.com/lukkasmatheu/FiSelf/edit/main/README.md#banco-de-dados)
- [Planejamento sprint](https://github.com/lukkasmatheu/FiSelf/edit/main/README.md#planejamento-sprints)
- [Executando o projeto](https://github.com/lukkasmatheu/FiSelf/edit/main/README.md#como-executar)
## Sobre o app
FiSelf é um aplicativo voltado para apoiar empresários autônomos na gestão eficiente de suas vendas e prestação de serviços. A plataforma oferece uma solução completa para organizar produtos, registrar vendas, controlar serviços prestados, e avaliar o desempenho financeiro de forma prática e centralizada.
- [x] cadastrar produtos
- [x] listas seus produtos
- [x]  ter uma balanço entre custo de produção/vendas de seus produtos (Dashboard de produtos).
- [x] realizar registro venda

**Futuramente estaremos realizando a implementação das seguintes funcionalidades**
- [ ] realizar registro de serviço
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
  "data_criacao": "string (LocalDateTime)",
  "data_ultima_atualizacao": "string (LocalDateTime)",
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
  "quantidade?:number",
  "fornecedor": {
    "id_fornecedor": "string",
    "nome": "string",
    "cnpj": "string",
    "contato": "string"
  },
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
  "nota_fiscal": "string",  // não implementado ainda
  "id_empresa": "string",
  "cliente": {
    "nome": "string",
    "documento": "string"
  },  // não implementado ainda
  "metodo_pagamento": "string", // não implementado ainda
  "status": "string"
}

```

Planejamento de implementação Futura

- adicionar empresa e prestação de serviço
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

|Sprint 1| Sprint 2|
|--|--|
|Telas de cadastro de produto e dashboard (Feito)|Tela de produtos e registro de venda (Feito)|


|Sprint 3| Sprint 4|
|--|--|
|Criação de backend (feito)|Integração com Backend/frontend (feito)|
|Criar integração com firebase para login (feito)| Adicionar Axios para relização de chamadas (feito)|
|Criar conexao com firestore| Adicionar zustand para persistencia local de dados (feito)|
|Mapear Objetos a serem persistidos(Produtos/Vendas/clientes) (feito)|Criar Logica de acesso para rotas autenticadas (feito)|
|Possivel Tarefa -> Deploy de backend no Render ou ec2-aws (o backend esta sendo utilizado localemnte por enquanto)| Possivel tarefa -> Criar conexão sse para notificações (vencimento de produto/registro de vendas) (Replanejado)|

## Como executar 

Para executar a aplicação é necessario ter instalado as seguintes dependencias

1. node-> v22 ou superior 
2. git 
3. IDE de sua preferencia

Realize a instalação das bibliotecas do projeto com
```bash
npm install
```
Para rodar o projeto execute
```
npx expo run:android OR npx expo run:ios
```


