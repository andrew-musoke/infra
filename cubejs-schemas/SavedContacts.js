// DESCRIPTION
// This schema uses the cubejs extends parameter to reuse all the Savingcontacts features
// This is done purposely to decouple the Savingcontacts table to increase its flexilibity for it to be used in the querying API

// REQUIREMENT
// Number 7: Saved Contacts - contains individual and groups/list of contacts saved

cube(`SavedContacts`, {
    extends: Savingcontacts,
  });