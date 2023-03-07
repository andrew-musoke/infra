// DESCRIPTION
// This schema used to model raw authorization events data from the database into meaningful business insights.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT
// Number 4: Authorization Events - contains login and register events from the BaseSMS Application


cube(`Basesmsauthreal`, {
  sql: `SELECT * FROM smsdomain.basesmsauthreal`,

  refreshKey: {
    every: `1 second`,
  },
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [userid, username, timestamp]
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
    
    timestamp: {
      sql: `${CUBE}."TIMESTAMP"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
