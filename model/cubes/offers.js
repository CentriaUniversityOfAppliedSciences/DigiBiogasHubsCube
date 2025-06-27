cube(`offers`, {
  sql_table: `public."Offers"`,
  
  data_source: `default`,
  
  joins: {
    locations: {
      sql: `${CUBE}."locationID" = ${locations.id}`,
      relationship: `many_to_one`
    },
    
    materials: {
      sql: `${CUBE.materialid} = ${materials.id}`,
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
      type: `string`,
      primary_key: true
    },
    
    creator: {
      sql: `creator`,
      type: `string`
    },
    
    availableamount: {
      sql: `${CUBE}."availableAmount"`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    },
    
    amount: {
      sql: `amount`,
      type: `string`
    },
    
    price: {
      sql: `price`,
      type: `string`
    },
    
    materialid: {
      sql: `${CUBE}."materialID"`,
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
    },
    
    enddate: {
      sql: `${CUBE}."endDate"`,
      type: `time`
    },
    
    startdate: {
      sql: `${CUBE}."startDate"`,
      type: `time`
    },
    
    sold: {
      sql: `sold`,
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
