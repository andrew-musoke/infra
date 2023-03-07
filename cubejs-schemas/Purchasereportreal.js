// DESCRIPTION
// This schema used to model raw purchase-report data from the database into meaningful business insights.
// This schema will the be exposed through cubejs querying API to allow end-users to query data for their front end appications

// REQUIREMENT(s)
// Number 17: Purchase Report - uses purchase history data to generate purchase report on BaseSMS


cube(`Purchasereportreal`, {
    sql: `SELECT * FROM smsdomain.purchasehistoryreal`,
  
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
        totalPurchases: {
            sql:`AMOUNT_PAID`,
            type: `sum`,
          },

        totalSmsBought: {
            sql:`SMS_BOUGHT`,
            type: `sum`,
          },
        
        totalNumberofPurchases: {
            type: `count`,
          }
    },
    
    dimensions: {
      customerid: {
        sql: `${CUBE}."CUSTOMERID"`,
        type: `string`
      },
      
      timestamp: {
        sql: `${CUBE}."TIMESTAMP"`,
        type: `time`
      }
    },
    
    dataSource: `default`
  });
  