# Desafio Front-end da Coodesh

Desafio da Coodesh feito com React. Front-end para visualização das informações da base de pacientes da empresa Pharma Inc.

## Linguagens e bibliotecas

- Javascript
- React
- React-router-dom
- yarn
- prop-types
- ESLint
- Material-UI
- git
- Docker
- docker-compose

## Instalando e rodando o projeto

### Yarn / npm
Na raiz do projeto, instalar as dependências usando `yarn` ou `npm`

```
yarn install
```

```
npm install
```

Então, basta rodar o projeto
```
yarn start
```
```
npm start
```


### Docker
Podemos subir tanto um ambiente de desenvolvimento, que provisiona um container e executa o `yarn start`, como um ambiente de produção onde é feito um `yarn build` do projeto e então um servidor `nginx` sobe servindo a aplicação.

#### Desenvolvimento

Na raiz do projeto, primeiro é necessário fazer o build da imagem docker.
```docker
docker build -f Dockerfile.development -t pharma-ui:dev .
```

Então, é só subir o container

```docker
docker run -p 3001:3000 pharma-ui:dev
```

Com o comando acima, a app estará disponível em `http://localhost:3001`

#### Produção

Na raiz do projeto, primeiro é necessário fazer o build da imagem docker.
```docker
docker build -f Dockerfile.production -t pharma-ui:dev .
```

Então, é só subir o container

```docker
docker run -p 3001:80 pharma-ui:prod
```

Com o comando acima, a app estará disponível em `http://localhost:3001`

#### Docker-compose
Para exemplificar também um ambiente criado usando o docker-compose, no caso apenas a versão de produção, basta executar o seguinte comando e ele já irá fazer o build da imagem docker e subir a aplicação

```docker
docker-compose up
```

Nas configurações atuais em `docker-compose.yml`, a aplicação pode ser acessada então em `http://localhost:3001`

Após qualquer alteração no código-fonte do projeto, é preciso usar o parâmetro `--build` pra forçar o docker-compose a refazer a imagem base.

```docker
docker-compose up --build
```