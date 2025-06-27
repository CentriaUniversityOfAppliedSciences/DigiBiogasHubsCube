cube(`materials`, {
  sql_table: `public."Materials"`,
  
  data_source: `default`,
  
  joins: {
    
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    parent: {
      sql: `parent`,
      type: `string`
    },
    
    quality: {
      sql: `quality`,
      type: `string`
    },
    
    other: {
      sql: `other`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    locality: {
      sql: `locality`,
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
