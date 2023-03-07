// DESCRIPTION
// This schema is used to display the sub data of the inbox sms per a full conversation.

// REQUIREMENT
// Number 15: Incoming & outgoing SMS (Inbox) - contains all the incoming & outgoing messages (conversations) from the end-users to the customer's account


cube(`InboxSub`, {

    sql: `SELECT * FROM smsdomain.inbox`,
    
    preAggregations: {
      // Pre-Aggregations definitions go here
      // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  

      main: {
        dimensions: [InboxSub.conversationid, InboxSub.trackid, InboxSub.customerid, InboxSub.customerroutingcode, InboxSub.sender, InboxSub.messagecontent, InboxSub.eventtype],
        timeDimension: InboxSub.timestamp,
        granularity: `day`,
        indexes: {
          categoryIndex: {
           columns: [InboxSub.conversationid, InboxSub.trackid, InboxSub.customerid, InboxSub.customerroutingcode, InboxSub.sender, InboxSub.messagecontent, InboxSub.eventtype] 
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
      
      messagecontent: {
        sql: `${CUBE}."MESSAGECONTENT"`,
        type: `string`
      },
      
      eventtype: {
        sql: `${CUBE}."EVENTTYPE"`,
        type: `string`
      },
    
      timestamp: {
        sql: `${CUBE}."TIME"`,
        type: `time`
      }
    },
    
    dataSource: `default`
    });