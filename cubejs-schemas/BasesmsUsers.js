// DESCRIPTION
// This schema uses the cubejs extends parameter to reuse all the Basesmsuserinfo features
// This is done purposely to decouple the BasesmsUsers table to increase its flexilibity for it to be used in the querying API

// REQUIREMENT
// Number 11: Basesms Userinfo - contains customers id, name, creation date and contact details

cube(`BasesmsUsers`, {
    extends: Basesmsuserinfo,
  });