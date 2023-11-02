'use strict';


/**
 * Get specified shop reviews
 * (descriptions) Get Specified shop reviews
 *
 * shopId String 
 * returns List
 **/
exports.shopsShopIdReviewsGET = function(shopId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "score" : 0,
  "comment" : "comment"
}, {
  "score" : 0,
  "comment" : "comment"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create reviews
 *
 * body List Contents of reviews
 * shopId String 
 * xApiKey String Request user's identification (optional)
 * token String One Time token (optional)
 * no response value expected for this operation
 **/
exports.shopsShopIdReviewsPOST = function(body,shopId,xApiKey,token) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

