// DESCRIPTION
// This schema used to model inbox data from the database to be shown as the inbox/conversation feature in BaseSMS.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT
// Number 15: Incoming & outgoing SMS (Inbox) - contains all the incoming & outgoing messages (conversations) from the end-users to the customer's account

cube(`Inboxreal`, {
  sql: `SELECT * FROM smsdomain.inbox`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      //drillMembers: [conversationid, trackid, customerid, messagetitle, orderid]
    }
  },
  
  dimensions: {
    conversationid: {
      sql: `${CUBE}."CONVERSATIONID"`,
      type: `string`
    },
    
    trackid: {
      sql: `${CUBE}."TRACKID"`,
      type: `string`
    },
    
    customerid: {
      sql: `${CUBE}."CUSTOMERID"`,
      type: `string`
    },
    
    customerroutingcode: {
      sql: `${CUBE}."CUSTOMERROUTINGCODE"`,
      type: `string`
    },
    
    sender: {
      sql: `${CUBE}."SENDER"`,
      type: `string`
    },
    
    messagetitle: {
      sql: `${CUBE}."MESSAGETITLE"`,
      type: `string`
    },
    
    messagecontent: {
      sql: `${CUBE}."MESSAGECONTENT"`,
      type: `string`
    },
    
    eventtype: {
      sql: `${CUBE}."EVENTTYPE"`,
      type: `string`
    },
    
    orderid: {
      sql: `${CUBE}."ORDERID"`,
      type: `string`
    },
    
    timestamp: {
      sql: `${CUBE}."TIME"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
