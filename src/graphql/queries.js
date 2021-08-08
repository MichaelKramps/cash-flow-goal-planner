/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlanner = /* GraphQL */ `
  query GetPlanner($id: ID!) {
    getPlanner(id: $id) {
      id
      state
      accessExpires
      createdAt
      updatedAt
    }
  }
`;
export const listPlanners = /* GraphQL */ `
  query ListPlanners(
    $filter: ModelPlannerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlanners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        state
        accessExpires
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
