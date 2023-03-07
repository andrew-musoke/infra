// DESCRIPTION
// This schema used to model transaction data from the database into meaningful business insights.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT(s)
// Number 14: Reconciliation - contains a record of all the transactions made (purchases & campaigns) in BaseSMS


cube(`Reconciliationreal`, {
  sql: `SELECT * FROM smsdomain.reconciliationreal`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [transactionid, customerid, campaignname, timestamp]
    }
  },
  
  dimensions: {
    transactionid: {
      sql: `${CUBE}."TRANSACTIONID"`,
      type: `string`
    },
    
    transactiontype: {
      sql: `${CUBE}."TRANSACTIONTYPE"`,
      type: `string`
    },
    
    customerid: {
      sql: `${CUBE}."CUSTOMERID"`,
      type: `string`
    },
    
    status: {
      sql: `${CUBE}."STATUS"`,
      type: `string`
    },

    amount: {
      sql: `${CUBE}."AMOUNT"`,
      type: `number`
    },

    sms: {
      sql: `${CUBE}."SMS"`,
      type: `number`
    },
    
    currentbalance: {
      sql: `${CUBE}."CURRENTBALANCE"`,
      type: `number`
    },
    
    campaignname: {
      sql: `${CUBE}."CAMPAIGNNAME"`,
      type: `string`
    },
    
    phonenumber: {
      sql: `${CUBE}."PHONENUMBER"`,
      type: `string`
    },
    
    timestamp: {
      sql: `${CUBE}."TIMESTAMP"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
