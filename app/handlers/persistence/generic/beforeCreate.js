/* global Backendless */

'use strict';
//const Contact = require('../../../models/contact');

/**
* @param {Object} req The request object contains information about the request
* @param {Object} req.context The execution context contains an information about application, current user and event
* @param {Object} req.item An item to create
*
* @returns {Object|Promise.<Object>|void} By returning a value you can stop further event propagation and return
*          a specific result to the caller
*/

Backendless.enablePromises();
Backendless.ServerCode.Persistence.beforeCreate('*', function(req) {
    console.log( "beforeCreate" );

    class Contact extends Backendless.ServerCode.PersistenceItem {
        }

    return Contact.findFirst().then(firstContact => {
        firstContact.name += ' | test |  ';
        return firstContact.save();
    });

});