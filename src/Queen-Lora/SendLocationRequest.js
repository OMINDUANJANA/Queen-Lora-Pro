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
 * The SendLocationRequest model module.
 * @module Queen-Lora/SendLocationRequest
 * @version 1.0.0
 */
class SendLocationRequest {
    /**
     * Constructs a new <code>SendLocationRequest</code>.
     * @alias module:Queen-Lora/SendLocationRequest
     * @param lat {Number} Latitude
     * @param lng {Number} Longitude
     * @param address {String} Text under the location.  Supports two lines. To use two lines, use the \"\\n\" symbol.
     */
    constructor(lat, lng, address) { 
        
        SendLocationRequest.initialize(this, lat, lng, address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, lat, lng, address) { 
        obj['lat'] = lat;
        obj['lng'] = lng;
        obj['address'] = address;
    }

    /**
     * Constructs a <code>SendLocationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Queen-Lora/SendLocationRequest} obj Optional instance to populate.
     * @return {module:Queen-Lora/SendLocationRequest} The populated <code>SendLocationRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendLocationRequest();

            if (data.hasOwnProperty('chatId')) {
                obj['chatId'] = ApiClient.convertToType(data['chatId'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'Number');
            }
            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], 'Number');
            }
            if (data.hasOwnProperty('lng')) {
                obj['lng'] = ApiClient.convertToType(data['lng'], 'Number');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
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
     * Returns Latitude
     * @return {Number}
     */
    getLat() {
        return this.lat;
    }

    /**
     * Sets Latitude
     * @param {Number} lat Latitude
     */
    setLat(lat) {
        this['lat'] = lat;
    }
/**
     * Returns Longitude
     * @return {Number}
     */
    getLng() {
        return this.lng;
    }

    /**
     * Sets Longitude
     * @param {Number} lng Longitude
     */
    setLng(lng) {
        this['lng'] = lng;
    }
/**
     * Returns Text under the location.  Supports two lines. To use two lines, use the \"\\n\" symbol.
     * @return {String}
     */
    getAddress() {
        return this.address;
    }

    /**
     * Sets Text under the location.  Supports two lines. To use two lines, use the \"\\n\" symbol.
     * @param {String} address Text under the location.  Supports two lines. To use two lines, use the \"\\n\" symbol.
     */
    setAddress(address) {
        this['address'] = address;
    }

}

/**
 * **Required if phone is not set**  Chat ID from the message list. Examples: 17633123456@c.us for private messages and 17680561234-1479621234@g.us for the group. Used instead of the phone parameter.
 * @member {String} chatId
 */
SendLocationRequest.prototype['chatId'] = undefined;

/**
 * **Required if chatId is not set**  A phone number starting with the country code. You do not need to add your number.   USA example: 17472822486.
 * @member {Number} phone
 */
SendLocationRequest.prototype['phone'] = undefined;

/**
 * Latitude
 * @member {Number} lat
 */
SendLocationRequest.prototype['lat'] = undefined;

/**
 * Longitude
 * @member {Number} lng
 */
SendLocationRequest.prototype['lng'] = undefined;

/**
 * Text under the location.  Supports two lines. To use two lines, use the \"\\n\" symbol.
 * @member {String} address
 */
SendLocationRequest.prototype['address'] = undefined;






export default SendLocationRequest;

