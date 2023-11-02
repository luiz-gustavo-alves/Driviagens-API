# Driviagens-API ✈️
Projeto _back-end_ para construção de uma aplicação de reserva de viagens.

## Requisitos Obrigatórios ⚠️

### Geral:
- **Deploy do projeto back-end e do banco de dados na nuvem**.
- Utilização do banco de dados PostgreSQL.
- Arquiteturar o projeto em _controllers_, _routers_, _middlewares_, _schemas_, _services_, e _respository_.
- Validação de dados utilizando a dependência _joi_.

### Armazenamento dos Dados:

- Formato geral dos dados:

``` sql
"passengers" (
	"id" SERIAL PRIMARY KEY,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL
);

"cities" (
	"id" SERIAL PRIMARY KEY,
	"name" TEXT NOT NULL UNIQUE
);

"flights" (
	"id" SERIAL PRIMARY KEY,
	"origin" INTEGER NOT NULL REFERENCES "cities" ("id"),
	"destination" INTEGER NOT NULL REFERENCES "cities" ("id"),
	"date" DATE NOT NULL
);

"travels" (
	"id" SERIAL PRIMARY KEY,
	"passengerId" INTEGER NOT NULL REFERENCES "passengers" ("id"),
	"flightId" INTEGER NOT NULL REFERENCES "flights" ("id")
);
```

## Endpoints ⚙️
### 🚩 CityRouter
### ![](https://place-hold.it/80x20/26ec48/ffffff?text=POST&fontsize=16)  /cities 
Recebe **name** pelo _body_ e registra uma nova cidade.
<br><br>
⚠️ **ERROS** <br>
- **Conflict (409)**: Tentativa de cadastro de usuário com email já existente no sistema.<br>
- **Unprocessable Entity (422)**: Recebimento de parâmetros inválidos pelo _body_.<br>
<hr>

### 🚩 FlightRouter
### ![](https://place-hold.it/80x20/26baec/ffffff?text=GET&fontsize=16) /flights
Retorna lista de relação dos vôos com os nomes das cidades de origem e destino, bem como a data do vôo e o id.<br>
Rota capaz de realizar filtagrem simultânea através de _query params_, dentre elas:
- **origin**: Filtragem por origem do voo (**/flights?origin=São Paulo**).
- **artist**: Filtragem por destino do voo (**/flights?destination=São Paulo**).
- **bigger-date** e **smaller-date**: Filtragem por data de voo, só será feita a busca se os parâmetros bigger-date e smaller-date forem passados juntos (**/flights?smaller-date=03-09-2023&bigger-date=07-09-2023**).
<br><br>

⚠️ **ERROS** <br>
- **Bad Request (400)**: Parâmetro **smaller-date** com data maior que **bigger-date**.<br>
- **Unprocessable Entity (422)**:<br>
  - Formato inválido de data por _query_params_ (formato esperado: dd-mm-aaaa).
  - Parâmetros **biger-date** e **smaller-date** não foram passados juntos.
<br><br>

### ![](https://place-hold.it/80x20/26ec48/ffffff?text=POST&fontsize=16) /flights
Recebe **origin**, **destination** e **date** pelo _body_ e registra novo voo.
<br><br>
⚠️ **ERROS** <br>
- **Not Found (404)**: Ids de cidades de origem e/ou destinos inexistentes.<br>
- **Conflict (409)**: Origem e destino devem ser diferentes.<br>
- **Unprocessable Entity (422)**:<br>
  - Formato inválido de data (formato esperado: dd-mm-aaaa).
  - A data de voo deve ser maior que a data atual.
<hr>

### 🚩 PassengerRouter
### ![](https://place-hold.it/80x20/26baec/ffffff?text=GET&fontsize=16) /passengers/travels
Retorna lista relação de todos os passageiros com suas respectivas quantidades de viagens.
Rota capaz de realizar filtagrem/paginação através de _query params_, dentre elas:
- **name**: Filtragem por nome de passageiro (**/passengers/travels?name=Diego**).
- **page**: Paginação de busca de passageiros (**/passengers/travels?page=1**).
<br><br>

⚠️ **ERROS** <br>
- **Bad Request (400)**: Parâmetro **page** recebido como string ou número menor ou igual a zero.<br>
- **Conflict (409)**: Origem e destino devem ser diferentes.
<br><br>

### ![](https://place-hold.it/80x20/26ec48/ffffff?text=POST&fontsize=16) /passengers
Recebe **firstName** e **lastName** pelo _body_ e registra novo passageiro.
<br><br>
⚠️ **ERROS** <br>
- **Unprocessable Entity (422)**: O primeiro e o último nome devem ter no mínimo 2 caracteres e no máximo 100.
<hr>

### 🚩 TravelsRouter
### ![](https://place-hold.it/80x20/26ec48/ffffff?text=POST&fontsize=16) /travels
Recebe **passengerId** e **flightId** pelo _body_ e registra nova viagem.
<br><br>
⚠️ **ERROS** <br>
- **Not Found (404)**: Ids do passegeiro e/ou de voo inexistentes.
