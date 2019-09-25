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
        'neighbourhood_group_cleansed',
        'description',
        'property_type',
        'accommodates',
        'bathrooms',
        'security_deposit',
        'cleanning_fee',
        'guests_included',
        'extra_people',
        'minimum_nights',
        'instant_bookable',
        'cancellation_policy',
        'tv_cable',
        'pets_allowed'
         )
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