/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlanner = /* GraphQL */ `
  mutation CreatePlanner(
    $input: CreatePlannerInput!
    $condition: ModelPlannerConditionInput
  ) {
    createPlanner(input: $input, condition: $condition) {
      id
      state
      accessExpires
      createdAt
      updatedAt
    }
  }
`;
export const updatePlanner = /* GraphQL */ `
  mutation UpdatePlanner(
    $input: UpdatePlannerInput!
    $condition: ModelPlannerConditionInput
  ) {
    updatePlanner(input: $input, condition: $condition) {
      id
      state
      accessExpires
      createdAt
      updatedAt
    }
  }
`;
export const deletePlanner = /* GraphQL */ `
  mutation DeletePlanner(
    $input: DeletePlannerInput!
    $condition: ModelPlannerConditionInput
  ) {
    deletePlanner(input: $input, condition: $condition) {
      id
      state
      accessExpires
      createdAt
      updatedAt
    }
  }
`;
