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
 * The InstanceStatusLink model module.
 * @module Queen-Lora/InstanceStatusLink
 * @version 1.0.0
 */
class InstanceStatusLink {
    /**
     * Constructs a new <code>InstanceStatusLink</code>.
     * Status information link
     * @alias module:Queen-Lora/InstanceStatusLink
     */
    constructor() { 
        
        InstanceStatusLink.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstanceStatusLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Queen-Lora/InstanceStatusLink} obj Optional instance to populate.
     * @return {module:Queen-Lora/InstanceStatusLink} The populated <code>InstanceStatusLink</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstanceStatusLink();

            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns Link caption for the button
     * @return {String}
     */
    getLabel() {
        return this.label;
    }

    /**
     * Sets Link caption for the button
     * @param {String} label Link caption for the button
     */
    setLabel(label) {
        this['label'] = label;
    }
/**
     * Returns Reference URL instead of method
     * @return {String}
     */
    getLink() {
        return this.link;
    }

    /**
     * Sets Reference URL instead of method
     * @param {String} link Reference URL instead of method
     */
    setLink(link) {
        this['link'] = link;
    }

}

/**
 * Link caption for the button
 * @member {String} label
 */
InstanceStatusLink.prototype['label'] = undefined;

/**
 * Reference URL instead of method
 * @member {String} link
 */
InstanceStatusLink.prototype['link'] = undefined;






export default InstanceStatusLink;

