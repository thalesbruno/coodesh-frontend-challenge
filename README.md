# Desafio Front-end da Coodesh

Front-end do desafio da Coodesh feito com React.

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
Na raiz do projeto, primeiro é necessário fazer o build da imagem docker

```docker
docker build . -t pharma-ui:dev
```

Então, é só subir o container

```docker
docker run -p 3001:3000 pharma-ui:dev
```

Com o comando acima, a app estará disponível em `http://localhost:3001`

#### Docker-compose
Com docker-compose, não é preciso executar o passo anterior, basta executar o comando seguinte e ele já irá fazer o build da imagem e subir a aplicação

```docker
docker-compose up
```

Nas configurações atuais em `docker-compose.yaml`, a aplicação pode ser acessada então em `http://localhost:3001`

Após qualquer alteração no código-fonte do projeto, é preciso usar o parâmetro `--build` pra forçar o docker-compose a refazer a imagem base.

```docker
docker-compose up --build
```