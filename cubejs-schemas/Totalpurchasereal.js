// DESCRIPTION
// This schema used to model raw purchase-history data from the database into total purchases per customers.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT(s)
// Number 8: Total Purchase - contains details about total purchases per customers

cube(`Totalpurchasereal`, {

  //this is the sql query to get total purchases for each customer
    sql: `SELECT CUSTOMERID, SUM(AMOUNT_PAID) AS TOTALPURCHASE  
          FROM smsdomain.purchasehistoryreal
          WHERE PAYMENT_STATUS='SUCCESS'
          GROUP BY CUSTOMERID`,
  
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
        drillMembers: [customerid]
      }
    },
    
    dimensions: {
      customerid: {
        sql: `${CUBE}."CUSTOMERID"`,
        type: `string`
      },

      totalPurchase: {
        sql: `${CUBE}."TOTALPURCHASE"`,
        type: `number`
      }
    },
    
    dataSource: `default`
  });
  