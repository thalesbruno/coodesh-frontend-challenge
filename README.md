# Desafio Front-end da Coodesh

Front-end do desafio da Coodesh feito com React.

## Linguagens e bibliotecas

## Instalação

## Executando o app

### Yarn / npm
Na raiz do projeto, instalar as dependências

```
yarn install
```

Então, subir o projeto
```
yarn start
```


### Docker
Na raiz do projeto, primeiro é necessário fazer o build da imagem docker

```docker
docker build . -t pharma-ui:dev
```

Então, subir o container

```docker
docker run -p 3001:3000 pharma-ui:dev
```

Com o comando acima, a app estará disponível em `http://localhost:3001`

#### Docker-compose
Com docker-compose, basta executar

```docker
docker-compose up
```