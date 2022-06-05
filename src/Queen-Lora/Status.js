/**
 * Chat API SDK
 * The SDK allows you to receive and send messages through your WhatsApp account. [Sign up now](https://app.chat-api.com/)  The Chat API is based on the WhatsApp WEB protocol and excludes the ban both when using libraries from mgp25 and the like. Despite this, your account can be banned by anti-spam system WhatsApp after several clicking the \"block\" button.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: sale@chat-api.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Status model module.
 * @module Queen-Lora/Status
 * @version 1.0.0
 */
class Status {
    /**
     * Constructs a new <code>Status</code>.
     * @alias module:Queen-Lora/Status
     */
    constructor() { 
        
        Status.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Status</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Queen-Lora/Status} obj Optional instance to populate.
     * @return {module:Queen-Lora/Status} The populated <code>Status</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Status();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns status date
     * @return {String}
     */
    getDate() {
        return this.date;
    }

    /**
     * Sets status date
     * @param {String} date status date
     */
    setDate(date) {
        this['date'] = date;
    }
/**
     * Returns status name (\"init\", \"got qr code\", \"loading\", \"authenticated\")
     * @return {String}
     */
    getStatus() {
        return this.status;
    }

    /**
     * Sets status name (\"init\", \"got qr code\", \"loading\", \"authenticated\")
     * @param {String} status status name (\"init\", \"got qr code\", \"loading\", \"authenticated\")
     */
    setStatus(status) {
        this['status'] = status;
    }

}

/**
 * status date
 * @member {String} date
 */
Status.prototype['date'] = undefined;

/**
 * status name (\"init\", \"got qr code\", \"loading\", \"authenticated\")
 * @member {String} status
 */
Status.prototype['status'] = undefined;






export default Status;
