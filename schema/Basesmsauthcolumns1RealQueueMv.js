cube(`Basesmsauthcolumns1RealQueueMv`, {
  sql: `SELECT * FROM test.basesmsauthcolumns1_real_queue_mv`,
  
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
    
    redirectUrl: {
      sql: `${CUBE}."REDIRECT_URL"`,
      type: `string`
    },
    
    time: {
      sql: `${CUBE}."TIME"`,
      type: `string`
    }
  },
  
  dataSource: `default`
});
