// DESCRIPTION
// This schema used to model activity events data from the database into meaningful business insights.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT
// Number 13: Activities - contains the timeline activities (e.g. authorization notifications, purchases, campaign sent, etc.)

cube(`Activitiesreal`, {
  sql: `SELECT * FROM smsdomain.activity`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [customerid, username]
    }
  },
  
  dimensions: {
    customerid: {
      sql: `${CUBE}."CUSTOMERID"`,
      type: `string`
    },
    
    category: {
      sql: `${CUBE}."CATEGORY"`,
      type: `string`
    },
    
    eventtype: {
      sql: `${CUBE}."EVENTTYPE"`,
      type: `string`
    },
    
    username: {
      sql: `${CUBE}."USERNAME"`,
      type: `string`
    },
    
    verb: {
      sql: `${CUBE}."VERB"`,
      type: `string`
    },
    
    indirectobject: {
      sql: `${CUBE}."INDIRECTOBJECT"`,
      type: `string`
    },
    
    directobject: {
      sql: `${CUBE}."DIRECTOBJECT"`,
      type: `string`
    },
    
    timestamp: {
      sql: `${CUBE}."TIME"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
