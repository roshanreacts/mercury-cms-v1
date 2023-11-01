export const LOGIN_USER = `
mutation Login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      message
      token
      id
      email
      name
      role
    }
  }
`;


export const  GET_SINGLE_USER= `
query GetUser($where: whereUserInput) {
  getUser(where: $where) {
    id
    name
    email
    role
  }
}`
