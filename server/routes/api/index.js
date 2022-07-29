const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const router = require('express').Router();
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;

module.exports = { typeDefs, resolvers, router };
