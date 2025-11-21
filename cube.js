module.exports = {
    queryRewrite: (query, { securityContext }) => {
        if (securityContext.id){
            var dimen = query.dimensions || [];
            if (securityContext.userlevel === 99){
                
            }
            else{
                //if (dimen.includes('companies.name')) {
                    query.filters.push({
                        member:'user_companies.userid',
                        operator: 'equals',
                        values: [securityContext.id]
                    })
                //}
            }
        }
        return query;
    }
}