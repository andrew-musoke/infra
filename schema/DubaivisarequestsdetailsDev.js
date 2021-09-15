cube(`DubaivisarequestsdetailsDev`, {
  sql: `SELECT * FROM dubaivisadomain_dev.dubaivisarequestsdetails_dev`,
  
  preAggregations: {
    // Pre-Aggregations definitions go here
    // Learn more here: https://cube.dev/docs/caching/pre-aggregations/getting-started  
  },
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [referenceid, firstname, lastname, timestamp]
    }
  },
  
  dimensions: {
    referenceid: {
      sql: `${CUBE}."REFERENCEID"`,
      type: `string`
    },
    
    status: {
      sql: `${CUBE}."STATUS"`,
      type: `string`
    },
    
    visatype: {
      sql: `${CUBE}."VISATYPE"`,
      type: `string`
    },
    
    firstname: {
      sql: `${CUBE}."FIRSTNAME"`,
      type: `string`
    },
    
    lastname: {
      sql: `${CUBE}."LASTNAME"`,
      type: `string`
    },
    
    applicantsEmail: {
      sql: `${CUBE}."APPLICANTS_EMAIL"`,
      type: `string`
    },
    
    phoneNumber: {
      sql: `${CUBE}."PHONE_NUMBER"`,
      type: `string`
    },
    
    applicantsNationality: {
      sql: `${CUBE}."APPLICANTS_NATIONALITY"`,
      type: `string`
    },
    
    timestamp: {
      sql: `${CUBE}."TIMESTAMP"`,
      type: `time`
    }
  },
  
  dataSource: `default`
});
