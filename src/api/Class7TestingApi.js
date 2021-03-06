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


import ApiClient from "../ApiClient";
import Statuses from '../Queen-Lora/Statuses';
import WebhookStatus from '../Queen-Lora/WebhookStatus';

/**
* Class7Testing service.
* @module api/Class7TestingApi
* @version 1.0.0
*/
export default class Class7TestingApi {

    /**
    * Constructs a new Class7TestingApi. 
    * @alias module:api/Class7TestingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Returns instance status changes history.
     * Requires enable \"instanceStatuses\" option for collecting data.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.minTime Filter statuses received after specified date. Example: 946684800.
     * @param {Number} opts.maxTime Filter statuses received before specified date. Example: 946684800.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Queen-Lora/Statuses} and HTTP response
     */
    instanceStatusesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'min_time': opts['minTime'],
        'max_time': opts['maxTime']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['instanceId', 'token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Statuses;
      return this.apiClient.callApi(
        '/instanceStatuses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns instance status changes history.
     * Requires enable \"instanceStatuses\" option for collecting data.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.minTime Filter statuses received after specified date. Example: 946684800.
     * @param {Number} opts.maxTime Filter statuses received before specified date. Example: 946684800.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Queen-Lora/Statuses}
     */
    instanceStatuses(opts) {
      return this.instanceStatusesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns webhook status for message.
     * Requires enable \"webhookStatuses\" option for collecting data.
     * @param {String} msgId Message ID. Example: false_17472822486@c.us_DF38E6A25B42CC8CCE57EC40F.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Queen-Lora/WebhookStatus} and HTTP response
     */
    webhookStatusesWithHttpInfo(msgId) {
      let postBody = null;
      // verify the required parameter 'msgId' is set
      if (msgId === undefined || msgId === null) {
        throw new Error("Missing the required parameter 'msgId' when calling webhookStatuses");
      }

      let pathParams = {
      };
      let queryParams = {
        'msgId': msgId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['instanceId', 'token'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WebhookStatus;
      return this.apiClient.callApi(
        '/webhookStatus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns webhook status for message.
     * Requires enable \"webhookStatuses\" option for collecting data.
     * @param {String} msgId Message ID. Example: false_17472822486@c.us_DF38E6A25B42CC8CCE57EC40F.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Queen-Lora/WebhookStatus}
     */
    webhookStatuses(msgId) {
      return this.webhookStatusesWithHttpInfo(msgId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
