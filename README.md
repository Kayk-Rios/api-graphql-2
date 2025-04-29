# 📍 API de Lugares Alagados  

**Tecnologias**: NestJS, GraphQL, Prisma, SQLite (em memória ou arquivo)  Facilmente modificavel por PostgreSQL e entre outros BD

## 🌟 Funcionalidades  

### 📌 **Gestão de Lugares Alagados**  
✅ **Cadastro** de novos locais com:  
- Nome  
- Descrição  
- Estado (ex: "SP", "PE")  
- Foto (URL)  

✅ **Consulta** de lugares alagados por:  
- Lista completa  
- Filtro por estado  

✅ **Atualização** parcial ou total das informações  

✅ **Exclusão** de registros  

---

### 🔍 **Exemplos de Uso (GraphQL)**  

#### 1️⃣ Criar um novo local alagado  
```graphql
mutation {
  createFloodedPlace(input: {
    name: "Alagamento no Centro",
    description: "Área alaga com 30min de chuva",
    state: "SP",
    imageUrl: "https://exemplo.com/foto.jpg"
  }) {
    id
    name
  }
}
```

#### 2️⃣ Buscar locais por estado  
```graphql
query {
  floodedPlacesByState(state: "PE") {
    id
    name
    description
  }
}
```

#### 3️⃣ Atualizar informações  
```graphql
mutation {
  updateFloodedPlace(input: {
    id: 1,
    description: "Novo ponto de alagamento identificado"
  }) {
    name
    description
  }
}
```

#### 4️⃣ Listar todos os registros  
```graphql
query {
  floodedPlaces {
    id
    name
    state
  }
}
```

---

## 🛠️ Como Executar  

1. **Instalação**  
```bash
npm install
```

2. **Configuração do Banco**  
- Edite `prisma/schema.prisma` para usar:  
  - Memória: `url = "file::memory:"`  
  - Arquivo: `url = "file:./dev.db"`  

3. **Iniciar o Projeto**  
```bash
npm run start:dev
```

Acesse o Playground GraphQL em:  
`http://localhost:3000/graphql`

--

## 🌐 Casos de Uso Reais  

- **Aplicativos de Trânsito**: Alertar sobre rotas alagadas  
- **Prefeituras**: Planejar obras de drenagem usando os dados postados

---

## 🔄 Próximos Passos  

Feito com ❤️ usando NestJS + GraphQL
