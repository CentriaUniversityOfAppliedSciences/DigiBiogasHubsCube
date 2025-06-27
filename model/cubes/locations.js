cube(`locations`, {
  sql_table: `public."Locations"`,
  
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
      type: `number`,
      primary_key: true
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    companyid: {
      sql: `${CUBE}."companyID"`,
      type: `string`
    },
    
    parent: {
      sql: `parent`,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    zipcode: {
      sql: `zipcode`,
      type: `string`
    },
    
    name: {
      sql: `name`,
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
