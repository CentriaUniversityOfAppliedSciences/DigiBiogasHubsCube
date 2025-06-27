cube(`bids`, {
  sql_table: `public."Bids"`,
  
  data_source: `default`,
  
  joins: {
    offers: {
      sql: `${CUBE}."offerID" = ${offers.id}`,
      relationship: `many_to_one`
    },
    
    users: {
      sql: `${CUBE.userid} = ${users.id}`,
      relationship: `many_to_one`
    },
    
    companies: {
      sql: `${CUBE.companyid} = ${companies.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primary_key: true
    },
    
    userid: {
      sql: `${CUBE}."userID"`,
      type: `string`
    },
    
    companyid: {
      sql: `${CUBE}."companyID"`,
      type: `string`
    },
    
    price: {
      sql: `price`,
      type: `string`
    },
    
    amount: {
      sql: `amount`,
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
