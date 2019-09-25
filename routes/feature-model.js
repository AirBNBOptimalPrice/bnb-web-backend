const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    addFeatures,
}

function find() {
    return db('features')
    .select( 
        'id',
        'description',
        'property_type',
        'instant_bookable',
        'tv_cable' )
}

function findById(filter) {
    return db('features')
    .where(filter);
}

function addFeatures(features) {
    return db('features')
    .insert({ ...features })
    // .then(([id]) => findById(id));
}