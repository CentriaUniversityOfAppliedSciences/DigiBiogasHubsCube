cube(`contracts`, {
  sql_table: `public."Contracts"`,
  
  data_source: `default`,
  
  joins: {
    offers: {
      sql: `${CUBE.offerid} = ${offers.id}`,
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
    
    offerid: {
      sql: `${CUBE}."offerID"`,
      type: `string`
    },
    
    amount: {
      sql: `amount`,
      type: `string`
    },
    
    companyid: {
      sql: `${CUBE}."companyID"`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    buyer: {
      sql: `buyer`,
      type: `string`
    },
    
    price: {
      sql: `price`,
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
    
    timestamp: {
      sql: `timestamp`,
      type: `time`
    }
  },
  
  measures: {
    count: {
      type: `count`
    },
    total:{
      type: `sum`,
      sql: `(amount*price)`
    }
  },
  
  pre_aggregations: {
    // Pre-aggregation definitions go here.
    // Learn more in the documentation: https://cube.dev/docs/caching/pre-aggregations/getting-started
  }
});
