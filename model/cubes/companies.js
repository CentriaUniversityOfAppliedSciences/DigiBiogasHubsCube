cube(`companies`, {
  sql_table: `public."Companies"`,
  
  data_source: `default`,
  
  joins: {
    hubs: {
      sql: `${CUBE}."hubID" = ${hubs.id}`,
      relationship: `many_to_one`
    },
    locations: {
      sql: `${CUBE}."id" = ${locations.companyid}`,
      relationship: `one_to_many`
    },
    offers: {
      sql: `${CUBE}."id" = ${offers.companyid}`,
      relationship: `one_to_many`
    },
    contracts: {
      sql: `${CUBE}."id" = ${contracts.companyid}`,
      relationship: `one_to_many`
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `string`,
      primary_key: true
    },
    
    zipcode: {
      sql: `zipcode`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    web: {
      sql: `web`,
      type: `string`
    },
    
    city: {
      sql: `city`,
      type: `string`
    },
    
    phone: {
      sql: `phone`,
      type: `string`
    },
    
    address: {
      sql: `address`,
      type: `string`
    },
    
    parent: {
      sql: `parent`,
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
