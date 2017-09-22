module.exports = function createMethods(makeRequest) {
    return {
        // /v2/eventSubscriptions
        getList: makeRequest('GET', '/eventSubscriptions'),
        create: function create(callbackUrl) {
            // added empty body to satisfy request module requirement for
            // serializable body WHEN json: true
            return makeRequest('POST', '/eventSubscriptions')({callbackUrl: callbackUrl},{});
        },
        delete: function deleteSubscription(callbackUrl) {
            return makeRequest('DELETE', '/eventSubscriptions')({callbackUrl: callbackUrl});
        }
    };
};
