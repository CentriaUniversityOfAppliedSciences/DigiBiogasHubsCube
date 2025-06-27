cube(`settings`, {
  sql_table: `public."Settings"`,
  
  data_source: `default`,
  
  joins: {
    users: {
      sql: `${CUBE.userid} = ${users.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    userid: {
      sql: `${CUBE}."userID"`,
      type: `string`
    },
    
    value: {
      sql: `value`,
      type: `string`
    },
    
    key: {
      sql: `key`,
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
