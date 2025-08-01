cube(`users`, {
  sql_table: `public."Users"`,
  
  data_source: `default`,
  
  joins: {
    hubs: {
      sql: `${CUBE}."hubID" = ${hubs.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    authmethod: {
      sql: `${CUBE}."authMethod"`,
      type: `string`
    },
    
    language: {
      sql: `language`,
      type: `string`
    },
    
    username: {
      sql: `username`,
      type: `string`
    },
    
    email: {
      sql: `email`,
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
