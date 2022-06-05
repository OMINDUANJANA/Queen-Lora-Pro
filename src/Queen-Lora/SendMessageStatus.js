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
 * The SendMessageStatus model module.
 * @module Queen-Lora/SendMessageStatus
 * @version 1.0.0
 */
class SendMessageStatus {
    /**
     * Constructs a new <code>SendMessageStatus</code>.
     * @alias module:Queen-Lora/SendMessageStatus
     */
    constructor() { 
        
        SendMessageStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SendMessageStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Queen-Lora/SendMessageStatus} obj Optional instance to populate.
     * @return {module:Queen-Lora/SendMessageStatus} The populated <code>SendMessageStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendMessageStatus();

            if (data.hasOwnProperty('sent')) {
                obj['sent'] = ApiClient.convertToType(data['sent'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

/**
     * @return {Boolean}
     */
    getSent() {
        return this.sent;
    }

    /**
     * @param {Boolean} sent
     */
    setSent(sent) {
        this['sent'] = sent;
    }
/**
     * Returns unique message id
     * @return {String}
     */
    getId() {
        return this.id;
    }

    /**
     * Sets unique message id
     * @param {String} id unique message id
     */
    setId(id) {
        this['id'] = id;
    }
/**
     * Returns Posting status message
     * @return {String}
     */
    getMessage() {
        return this.message;
    }

    /**
     * Sets Posting status message
     * @param {String} message Posting status message
     */
    setMessage(message) {
        this['message'] = message;
    }

}

/**
 * @member {Boolean} sent
 */
SendMessageStatus.prototype['sent'] = undefined;

/**
 * unique message id
 * @member {String} id
 */
SendMessageStatus.prototype['id'] = undefined;

/**
 * Posting status message
 * @member {String} message
 */
SendMessageStatus.prototype['message'] = undefined;






export default SendMessageStatus;

