
export const createUserProfile = /* GraphQL */ `
mutation CreateUserProfile(
  $input: CreateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  createUserProfile(input: $input, condition: $condition) {
    id
    email
    username
  }
}
`;

export type CreateUserProfileMutation = {
    createUserProfile:  {
        __typename: "UserProfile",
        id: string,
        email: string,
        username: string,
    } | null,
};
export type CreateUserProfileMutationVariables = {
    input: CreateUserProfileInput,
};
export type CreateUserProfileInput = {
    email: string,
    username: string,
};




// Make sure that the response model is matches UpdateFriendshipRequestMutation response model
export const updateFriendshipRequest = /* GraphQL */ `
  mutation UpdateFriendshipRequest(
    $input: UpdateFriendshipRequestInput!
    $condition: ModelFriendshipRequestConditionInput
  ) {
    updateFriendshipRequest(input: $input, condition: $condition) {
      id
      status
      receiverProfileID
    }
  }
`;

export type UpdateFriendshipRequestMutation = {
    updateFriendshipRequest:  {
      __typename: "FriendshipRequest",
      id: string,
      status: FriendshipRequestStatus,
      senderProfileID: string,
    } | null,
};

export type UpdateFriendshipRequestMutationVariables = {
    input: UpdateFriendshipRequestInput,
};

export type UpdateFriendshipRequestInput = {
    id: string,
    status: FriendshipRequestStatus | null,
};

export enum FriendshipRequestStatus {
    pending = "pending",
    accepted = "accepted",
    rejected = "rejected",
}



export const createFriendshipRequest = /* GraphQL */ `
  mutation CreateFriendshipRequest(
    $input: CreateFriendshipRequestInput!
    $condition: ModelFriendshipRequestConditionInput
  ) {
    createFriendshipRequest(input: $input, condition: $condition) {
      id
      status
      senderProfileID
      receiverProfileID
    }
  }
`;

export type CreateFriendshipRequestMutation = {
    createFriendshipRequest:  {
      __typename: "FriendshipRequest",
      id: string,
      status: FriendshipRequestStatus,
      receiverProfileID: string,
    } | null,
};

export type CreateFriendshipRequestMutationVariables = {
    input: CreateFriendshipRequestInput,
};

export type CreateFriendshipRequestInput = {
    status: FriendshipRequestStatus.pending,
    senderProfileID: string,
    receiverProfileID: string,
  };
