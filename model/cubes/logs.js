cube(`logs`, {
  sql_table: `public."Logs"`,
  
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
      type: `number`,
      primary_key: true
    },
    
    action: {
      sql: `action`,
      type: `string`
    },
    
    text: {
      sql: `text`,
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
