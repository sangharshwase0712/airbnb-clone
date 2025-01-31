const joi =  require ("joi");

module.exports.listingSchema = joi.object({
    listing : joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        image: joi.string().optional(),
        location: joi.string().required(),
        country: joi.string().required(),
        price: joi.string().required().min(0),
    }).required()
});

module.exports.reviewSchema = joi.object({
    review : joi.object({
        rating: joi.number().required().min(1).max(5),
        Comment: joi.string().required(),
    }).required(),
})