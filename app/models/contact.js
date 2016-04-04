/* global Backendless */

'use strict';

class Contact extends Backendless.ServerCode.PersistenceItem {
    constructor() {
        super();

        /**
         @name Contact#name
         @type String
         */
        this.name = undefined;

        /**
         @name Contact#phone
         @type String
         */
        this.phone = undefined;

        /**
         @name Contact#age
         @type Number
         */
        this.age = undefined;

        /**
         @name Contact#title
         @type String
         */
        this.title = undefined;

    }
}

module.exports = Backendless.ServerCode.addType(Contact);