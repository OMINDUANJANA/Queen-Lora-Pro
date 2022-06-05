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
import InstanceStatusStatusData from './InstanceStatusStatusData';

/**
 * The InstanceStatus model module.
 * @module Queen-Lora/InstanceStatus
 * @version 1.0.0
 */
class InstanceStatus {
    /**
     * Constructs a new <code>InstanceStatus</code>.
     * @alias module:Queen-Lora/InstanceStatus
     */
    constructor() { 
        
        InstanceStatus.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InstanceStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Queen-Lora/InstanceStatus} obj Optional instance to populate.
     * @return {module:Queen-Lora/InstanceStatus} The populated <code>InstanceStatus</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InstanceStatus();

            if (data.hasOwnProperty('accountStatus')) {
                obj['accountStatus'] = ApiClient.convertToType(data['accountStatus'], 'String');
            }
            if (data.hasOwnProperty('qrCode')) {
                obj['qrCode'] = ApiClient.convertToType(data['qrCode'], 'Blob');
            }
            if (data.hasOwnProperty('statusData')) {
                obj['statusData'] = InstanceStatusStatusData.constructFromObject(data['statusData']);
            }
        }
        return obj;
    }

/**
     * Returns Instance Status
     * @return {module:Queen-Lora/InstanceStatus.AccountStatusEnum}
     */
    getAccountStatus() {
        return this.accountStatus;
    }

    /**
     * Sets Instance Status
     * @param {module:Queen-Lora/InstanceStatus.AccountStatusEnum} accountStatus Instance Status
     */
    setAccountStatus(accountStatus) {
        this['accountStatus'] = accountStatus;
    }
/**
     * Returns Base64-encoded contents of the QR code
     * @return {Blob}
     */
    getQrCode() {
        return this.qrCode;
    }

    /**
     * Sets Base64-encoded contents of the QR code
     * @param {Blob} qrCode Base64-encoded contents of the QR code
     */
    setQrCode(qrCode) {
        this['qrCode'] = qrCode;
    }
/**
     * @return {module:Queen-Lora/InstanceStatusStatusData}
     */
    getStatusData() {
        return this.statusData;
    }

    /**
     * @param {module:Queen-Lora/InstanceStatusStatusData} statusData
     */
    setStatusData(statusData) {
        this['statusData'] = statusData;
    }

}

/**
 * Instance Status
 * @member {module:Queen-Lora/InstanceStatus.AccountStatusEnum} accountStatus
 */
InstanceStatus.prototype['accountStatus'] = undefined;

/**
 * Base64-encoded contents of the QR code
 * @member {Blob} qrCode
 */
InstanceStatus.prototype['qrCode'] = undefined;

/**
 * @member {module:Queen-Lora/InstanceStatusStatusData} statusData
 */
InstanceStatus.prototype['statusData'] = undefined;





/**
 * Allowed values for the <code>accountStatus</code> property.
 * @enum {String}
 * @readonly
 */
InstanceStatus['AccountStatusEnum'] = {

    /**
     * value: "got qr code"
     * @const
     */
    "got qr code": "got qr code",

    /**
     * value: "authenticated"
     * @const
     */
    "authenticated": "authenticated",

    /**
     * value: "loading"
     * @const
     */
    "loading": "loading",

    /**
     * value: "init"
     * @const
     */
    "init": "init",

    /**
     * value: "not_paid"
     * @const
     */
    "not_paid": "not_paid"
};



export default InstanceStatus;

