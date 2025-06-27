cube(`blog_posts`, {
  sql_table: `public."BlogPosts"`,
  
  data_source: `default`,
  
  joins: {
    users: {
      sql: `${CUBE.userid} = ${users.id}`,
      relationship: `many_to_one`
    }
  },
  
  dimensions: {
    id:{
	sql:`CONCAT(${CUBE}.postID, ${CUBE}.userID)`,
	type:`string`,
	primary_key:true
    },
    content: {
      sql: `content`,
      type: `string`
    },
    
    image: {
      sql: `image`,
      type: `string`
    },
    
    postid: {
      sql: `${CUBE}."postID"`,
      type: `string`
    },
    
    userid: {
      sql: `${CUBE}."userID"`,
      type: `string`
    },
    
    title: {
      sql: `title`,
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
