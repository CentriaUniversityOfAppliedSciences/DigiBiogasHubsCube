cube(`logistics`, {
  sql_table: `public."Logistics"`,
  
  data_source: `default`,
  
  joins: {
    companies: {
      sql: `${CUBE.companyid} = ${companies.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    companyname: {
      sql: `${CUBE}."companyName"`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    zipcode: {
      sql: `zipcode`,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    haultype: {
      sql: `${CUBE}."haulType"`,
      type: `string`
    },
    
    companyid: {
      sql: `${CUBE}."companyID"`,
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
