// DESCRIPTION
// This schema is used to display the metadata of the inbox sms in the FE

// REQUIREMENT
// Number 15: Incoming & outgoing SMS (Inbox) - contains all the incoming & outgoing messages (conversations) from the end-users to the customer's account


cube(`InboxMeta`, {

  sql: `SELECT CONVERSATIONID, CUSTOMERID, MESSAGETITLE, ORDERID, MIN(TIME) AS TIMESTAMP, COUNT(CONVERSATIONID) AS COUNTCONVOS
        FROM smsdomain.inbox
        GROUP BY CONVERSATIONID, CUSTOMERID, MESSAGETITLE, ORDERID`,



  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  

    main: {
      dimensions: [InboxMeta.conversationid, InboxMeta.customerid,  InboxMeta.messagetitle, InboxMeta.orderid],
      timeDimension: InboxMeta.timestamp,
      granularity: `day`,
      indexes: {
        categoryIndex: {
         columns: [InboxMeta.conversationid, InboxMeta.customerid,  InboxMeta.messagetitle, InboxMeta.orderid] 
        }
    }
    }
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
    
    customerid: {
      sql: `${CUBE}."CUSTOMERID"`,
      type: `string`
    },
    
    messagetitle: {
      sql: `${CUBE}."MESSAGETITLE"`,
      type: `string`
    },
    
    orderid: {
      sql: `${CUBE}."ORDERID"`,
      type: `string`
    },
    
    timestamp: {
      sql: `${CUBE}."TIMESTAMP"`,
      type: `time`
    }
  },
  
  dataSource: `default`
  });