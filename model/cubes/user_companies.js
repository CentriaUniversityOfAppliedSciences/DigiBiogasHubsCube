cube(`user_companies`, {
  sql_table: `public."UserCompanies"`,
  
  data_source: `default`,
  
  joins: {
    companies: {
      sql: `${CUBE.companyid} = ${companies.id}`,
      relationship: `many_to_one`
    },
    
    users: {
      sql: `${CUBE.userid} = ${users.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id:{
      sql: `CONCAT(${CUBE}.companyID, ${CUBE}.userID)`,
      type: `string`,
      primary_key: true
    },
    companyid: {
      sql: `${CUBE}."companyID"`,
      type: `string`
    },
    
    userid: {
      sql: `${CUBE}."userID"`,
      type: `string`
    },
    
    createdat: {
      sql: `${CUBE}."createdAt"`,
      type: `time`
    },
    
    updatedat: {
      sql: `${CUBE}."updatedAt"`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
