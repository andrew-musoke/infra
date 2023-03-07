// DESCRIPTION
// This schema used to model userinfo data from the database into meaningful business insights.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT
// Number 11: Basesms Userinfo - contains customers id, name, creation date and contact details


cube(`Basesmsuserinfo`, {
  sql: `SELECT * FROM smsdomain.basesmsuserinfo`,

  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [customerid, customername, firstname, lastname, creationdate]
    }
  },
  
  dimensions: {
    smsservice: {
      sql: `${CUBE}."SMSSERVICE"`,
      type: `string`
    },
    
    customerid: {
      sql: `${CUBE}."CUSTOMERID"`,
      type: `string`,
      primaryKey: true,
      shown: true,
    },
    
    customername: {
      sql: `${CUBE}."CUSTOMERNAME"`,
      type: `string`
    },
    
    email: {
      sql: `${CUBE}."EMAIL"`,
      type: `string`
    },
    
    phonenumber: {
      sql: `${CUBE}."PHONENUMBER"`,
      type: `string`
    },
    
    firstname: {
      sql: `${CUBE}."FIRSTNAME"`,
      type: `string`
    },
    
    lastname: {
      sql: `${CUBE}."LASTNAME"`,
      type: `string`
    },
    
    creationdate: {
      sql: `${CUBE}."CREATIONDATE"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
