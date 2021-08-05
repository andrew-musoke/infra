cube(`EventsQueue`, {
  sql: `SELECT * FROM test.events_queue`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [userid, username]
    }
  },
  
  dimensions: {
    userid: {
      sql: `${CUBE}."USERID"`,
      type: `string`
    },
    
    username: {
      sql: `${CUBE}."USERNAME"`,
      type: `string`
    },
    
    eventtype: {
      sql: `${CUBE}."EVENTTYPE"`,
      type: `string`
    },
    
    ipaddress: {
      sql: `${CUBE}."IPADDRESS"`,
      type: `string`
    },
    
    redirectUri: {
      sql: `${CUBE}."REDIRECT_URI"`,
      type: `string`
    },
    
    time: {
      sql: `${CUBE}."TIME"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
