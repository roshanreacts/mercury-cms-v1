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

export const GET_SINGLE_USER = `
query GetUser($where: whereUserInput) {
  getUser(where: $where) {
    id
    name
    email
    role
  }
}`;

export const GET_ALL_PAGES = `
query AllPages($where: wherePageInput) {
  allPages(where: $where) {
    docs {
      id
      slug
      title
    }
  }
}
`;

export const GET_ALL_WEBSITES = `
query AllWebsites($where: whereWebsiteInput) {
  allWebsites(where: $where) {
    docs {
      id
      name
      slug
    }
  }
}
`;
export const GET_WEB_SITE = `
query GetWebsite($where: whereWebsiteInput) {
  getWebsite(where: $where) {
    id
    slug
    name
    description
    domain
    status
    pages {
      id
      slug
      title
    }
  }
}`;

export const GET_PAGE = `
query Query($where: wherePageInput) {
  getPage(where: $where) {
    id
    title
    slug
    path
    metaDescription
    status
    version
    components
  }
}`;

export const UPDATE_WEBSITE = `
mutation Mutation($data: updateWebsiteSchema!, $updateWebsiteId: ID!) {
  updateWebsite(data: $data, id: $updateWebsiteId) {
    status
    slug
    pages {
      title
      id
      slug
    }
    name
    id
    domain
    description
  }
}`;

export const CREATE_WEBSITE = `
mutation CreateWebsite($data: createWebsiteInput!) {
  createWebsite(data: $data) {
    id
    slug
    name
  }
}`

export const CREATE_PAGE = `
mutation CreatePage($data: createPageInput!) {
  createPage(data: $data) {
    id
    slug
    title
  }
}`


export const UPDATE_PAGE = `
mutation UpdatePageMutation($data: updatePageSchema!, $updatePageId: ID!) {
  updatePage(data: $data, id: $updatePageId) {
    title
    id
    slug
  }
}
`;
