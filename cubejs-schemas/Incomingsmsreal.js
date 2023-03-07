// DESCRIPTION
// This schema used to model incoming sms data from the database into meaningful business insights.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT
// Number 15: Incoming SMS - contains all the incoming messages from the end-users to the customer's account.


cube(`Incomingsmsreal`, {
  sql: `SELECT * FROM smsdomain.incomingsms`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      sql:`TRACKID`,
      type: `count`,
      //drillMembers: [trackid, customerid, senderfirstname, senderlastname, timestamp]
    }
  },
  
  dimensions: {
    trackid: {
      sql: `${CUBE}."TRACKID"`,
      type: `string`
    },
    
    customerid: {
      sql: `${CUBE}."CUSTOMERID"`,
      type: `string`
    },
    
    customercode: {
      sql: `${CUBE}."CUSTOMERCODE"`,
      type: `string`
    },
    
    senderphonenumber: {
      sql: `${CUBE}."SENDERPHONENUMBER"`,
      type: `string`
    },
    
    senderfirstname: {
      sql: `${CUBE}."SENDERFIRSTNAME"`,
      type: `string`
    },
    
    senderlastname: {
      sql: `${CUBE}."SENDERLASTNAME"`,
      type: `string`
    },
    
    messagecontent: {
      sql: `${CUBE}."MESSAGECONTENT"`,
      type: `string`
    },
    
    timestamp: {
      sql: `${CUBE}."TIMESTAMP"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
