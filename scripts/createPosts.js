import gql from "graphql-tag";

const mut = gql`  
  mutation {
  createPost (input: {
    data: {
      titulo: "hola",
      publicado: "2020-04-07",
      volanta: "esto es una volanta",
      contenido: "texto del ogt",
      categorias: [4]
    }
  }) {
    post{
      titulo
      id
    }
  }
}`;
