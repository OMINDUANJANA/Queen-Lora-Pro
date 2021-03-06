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
 * The SendVCardRequest model module.
 * @module Queen-Lora/SendVCardRequest
 * @version 1.0.0
 */
class SendVCardRequest {
    /**
     * Constructs a new <code>SendVCardRequest</code>.
     * @alias module:Queen-Lora/SendVCardRequest
     * @param vcard {String} Text value vcard 3.0
     */
    constructor(vcard) { 
        
        SendVCardRequest.initialize(this, vcard);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, vcard) { 
        obj['vcard'] = vcard;
    }

    /**
     * Constructs a <code>SendVCardRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Queen-Lora/SendVCardRequest} obj Optional instance to populate.
     * @return {module:Queen-Lora/SendVCardRequest} The populated <code>SendVCardRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendVCardRequest();

            if (data.hasOwnProperty('chatId')) {
                obj['chatId'] = ApiClient.convertToType(data['chatId'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'Number');
            }
            if (data.hasOwnProperty('vcard')) {
                obj['vcard'] = ApiClient.convertToType(data['vcard'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns **Required if phone is not set**  Chat ID from the message list. Examples: 17633123456@c.us for private messages and 17680561234-1479621234@g.us for the group. Used instead of the phone parameter.
     * @return {String}
     */
    getChatId() {
        return this.chatId;
    }

    /**
     * Sets **Required if phone is not set**  Chat ID from the message list. Examples: 17633123456@c.us for private messages and 17680561234-1479621234@g.us for the group. Used instead of the phone parameter.
     * @param {String} chatId **Required if phone is not set**  Chat ID from the message list. Examples: 17633123456@c.us for private messages and 17680561234-1479621234@g.us for the group. Used instead of the phone parameter.
     */
    setChatId(chatId) {
        this['chatId'] = chatId;
    }
/**
     * Returns **Required if chatId is not set**  A phone number starting with the country code. You do not need to add your number.   USA example: 17472822486.
     * @return {Number}
     */
    getPhone() {
        return this.phone;
    }

    /**
     * Sets **Required if chatId is not set**  A phone number starting with the country code. You do not need to add your number.   USA example: 17472822486.
     * @param {Number} phone **Required if chatId is not set**  A phone number starting with the country code. You do not need to add your number.   USA example: 17472822486.
     */
    setPhone(phone) {
        this['phone'] = phone;
    }
/**
     * Returns Text value vcard 3.0
     * @return {String}
     */
    getVcard() {
        return this.vcard;
    }

    /**
     * Sets Text value vcard 3.0
     * @param {String} vcard Text value vcard 3.0
     */
    setVcard(vcard) {
        this['vcard'] = vcard;
    }

}

/**
 * **Required if phone is not set**  Chat ID from the message list. Examples: 17633123456@c.us for private messages and 17680561234-1479621234@g.us for the group. Used instead of the phone parameter.
 * @member {String} chatId
 */
SendVCardRequest.prototype['chatId'] = undefined;

/**
 * **Required if chatId is not set**  A phone number starting with the country code. You do not need to add your number.   USA example: 17472822486.
 * @member {Number} phone
 */
SendVCardRequest.prototype['phone'] = undefined;

/**
 * Text value vcard 3.0
 * @member {String} vcard
 */
SendVCardRequest.prototype['vcard'] = undefined;






export default SendVCardRequest;

