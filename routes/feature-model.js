const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    addFeatures,
    removeFeature, 
    updateFeature,
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
        'cleaning_fee',
        'guests_included',
        'extra_people',
        'minimum_nights',
        'instant_bookable',
        'cancellation_policy',
        'tv_cable',
        'pets_allowed',
        'bedrooms'
         )
}

function findById(filter) {
    return db('features')
    .where(filter);
}

async function addFeatures(features) {
    return db('features')
    .insert(features, 'id')

}

async function removeFeature(id) {
    return db('features')
    .where({ id })
    .del();
}

function updateFeature(id , changes) {
    return db('features')
    .where({ id })
    .update(changes)
}