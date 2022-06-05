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
import ForwardMessageRequest from '../Queen-Lora/ForwardMessageRequest';
import Messages from '../Queen-Lora/Messages';
import SendContactRequest from '../Queen-Lora/SendContactRequest';
import SendFileRequest from '../Queen-Lora/SendFileRequest';
import SendLinkRequest from '../Queen-Lora/SendLinkRequest';
import SendLocationRequest from '../Queen-Lora/SendLocationRequest';
import SendMessageRequest from '../Queen-Lora/SendMessageRequest';
import SendMessageStatus from '../Queen-Lora/SendMessageStatus';
import SendPTTRequest from '../Queen-Lora/SendPTTRequest';
import SendVCardRequest from '../Queen-Lora/SendVCardRequest';

/**
* Class2Messages service.
* @module api/Class2MessagesApi
* @version 1.0.0
*/
export default class Class2MessagesApi {

    /**
    * Constructs a new Class2MessagesApi. 
    * @alias module:api/Class2MessagesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Forwarding messages to a new or existing chat.
     * Only one of two parameters is needed to determine the destination - chatId or phone.
     * @param {module:Queen-Lora/ForwardMessageRequest} forwardMessageRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Queen-Lora/SendMessageStatus} and HTTP response
     */
    forwardMessageWithHttpInfo(forwardMessageRequest) {
      let postBody = forwardMessageRequest;
      // verify the required parameter 'forwardMessageRequest' is set
      if (forwardMessageRequest === undefined || forwardMessageRequest === null) {
        throw new Error("Missing the required parameter 'forwardMessageRequest' when calling forwardMessage");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['instanceId', 'token'];
      let contentTypes = ['application/x-www-form-urlencoded', 'application/json'];
      let accepts = ['application/json'];
      let returnType = SendMessageStatus;
      return this.apiClient.callApi(
        '/forwardMessage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Forwarding messages to a new or existing chat.
     * Only one of two parameters is needed to determine the destination - chatId or phone.
     * @param {module:Queen-Lora/ForwardMessageRequest} forwardMessageRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Queen-Lora/SendMessageStatus}
     */
    forwardMessage(forwardMessageRequest) {
      return this.forwardMessageWithHttpInfo(forwardMessageRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of messages.
     * To receive only new messages, pass the **lastMessageNumber** parameter from the last query.  Files from messages are guaranteed to be stored only for 30 days and can be deleted. Download the files as soon as you get to your server.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.lastMessageNumber The lastMessageNumber parameter from the last response
     * @param {Boolean} opts.last Displays the last 100 messages. If this parameter is passed, then lastMessageNumber is ignored. (default to false)
     * @param {String} opts.chatId Filter messages by chatId  Chat ID from the message list. Examples: 17633123456@c.us for private messages and 17680561234-1479621234@g.us for the group.
     * @param {Number} opts.limit Sets length of the message list. Default 100. With value 0 returns all messages.
     * @param {Number} opts.minTime Filter messages received after specified time. Example: 946684800.
     * @param {Number} opts.maxTime Filter messages received before specified time. Example: 946684800.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Queen-Lora/Messages} and HTTP response
     */
    getMessagesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'lastMessageNumber': opts['lastMessageNumber'],
        'last': opts['last'],
        'chatId': opts['chatId'],
        'limit': opts['limit'],
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
      let returnType = Messages;
      return this.apiClient.callApi(
        '/messages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a list of messages.
     * To receive only new messages, pass the **lastMessageNumber** parameter from the last query.  Files from messages are guaranteed to be stored only for 30 days and can be deleted. Download the files as soon as you get to your server.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.lastMessageNumber The lastMessageNumber parameter from the last response
     * @param {Boolean} opts.last Displays the last 100 messages. If this parameter is passed, then lastMessageNumber is ignored. (default to false)
     * @param {String} opts.chatId Filter messages by chatId  Chat ID from the message list. Examples: 17633123456@c.us for private messages and 17680561234-1479621234@g.us for the group.
     * @param {Number} opts.limit Sets length of the message list. Default 100. With value 0 returns all messages.
     * @param {Number} opts.minTime Filter messages received after specified time. Example: 946684800.
     * @param {Number} opts.maxTime Filter messages received before specified time. Example: 946684800.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Queen-Lora/Messages}
     */
    getMessages(opts) {
      return this.getMessagesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Sending a contact or contact list to a new or existing chat.
     * Only one of two parameters is needed to determine the destination - chatId or phone.
     * @param {module:Queen-Lora/SendContactRequest} sendContactRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Queen-Lora/SendMessageStatus} and HTTP response
     */
    sendContactWithHttpInfo(sendContactRequest) {
      let postBody = sendContactRequest;
      // verify the required parameter 'sendContactRequest' is set
      if (sendContactRequest === undefined || sendContactRequest === null) {
        throw new Error("Missing the required parameter 'sendContactRequest' when calling sendContact");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['instanceId', 'token'];
      let contentTypes = ['application/x-www-form-urlencoded', 'application/json'];
      let accepts = ['application/json'];
      let returnType = SendMessageStatus;
      return this.apiClient.callApi(
        '/sendContact', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Sending a contact or contact list to a new or existing chat.
     * Only one of two parameters is needed to determine the destination - chatId or phone.
     * @param {module:Queen-Lora/SendContactRequest} sendContactRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Queen-Lora/SendMessageStatus}
     */
    sendContact(sendContactRequest) {
      return this.sendContactWithHttpInfo(sendContactRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a file to a new or existing chat.
     * Only one of two parameters is needed to determine the destination - chatId or phone.
     * @param {module:Queen-Lora/SendFileRequest} sendFileRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Queen-Lora/SendMessageStatus} and HTTP response
     */
    sendFileWithHttpInfo(sendFileRequest) {
      let postBody = sendFileRequest;
      // verify the required parameter 'sendFileRequest' is set
      if (sendFileRequest === undefined || sendFileRequest === null) {
        throw new Error("Missing the required parameter 'sendFileRequest' when calling sendFile");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['instanceId', 'token'];
      let contentTypes = ['application/x-www-form-urlencoded', 'application/json'];
      let accepts = ['application/json'];
      let returnType = SendMessageStatus;
      return this.apiClient.callApi(
        '/sendFile', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Send a file to a new or existing chat.
     * Only one of two parameters is needed to determine the destination - chatId or phone.
     * @param {module:Queen-Lora/SendFileRequest} sendFileRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Queen-Lora/SendMessageStatus}
     */
    sendFile(sendFileRequest) {
      return this.sendFileWithHttpInfo(sendFileRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send text with link and link's preview to a new or existing chat.
     * Only one of two parameters is needed to determine the destination - chatId or phone.
     * @param {module:Queen-Lora/SendLinkRequest} sendLinkRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Queen-Lora/SendMessageStatus} and HTTP response
     */
    sendLinkWithHttpInfo(sendLinkRequest) {
      let postBody = sendLinkRequest;
      // verify the required parameter 'sendLinkRequest' is set
      if (sendLinkRequest === undefined || sendLinkRequest === null) {
        throw new Error("Missing the required parameter 'sendLinkRequest' when calling sendLink");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['instanceId', 'token'];
      let contentTypes = ['application/x-www-form-urlencoded', 'application/json'];
      let accepts = ['application/json'];
      let returnType = SendMessageStatus;
      return this.apiClient.callApi(
        '/sendLink', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Send text with link and link's preview to a new or existing chat.
     * Only one of two parameters is needed to determine the destination - chatId or phone.
     * @param {module:Queen-Lora/SendLinkRequest} sendLinkRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Queen-Lora/SendMessageStatus}
     */
    sendLink(sendLinkRequest) {
      return this.sendLinkWithHttpInfo(sendLinkRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Sending a location to a new or existing chat.
     * Only one of two parameters is needed to determine the destination - chatId or phone.
     * @param {module:Queen-Lora/SendLocationRequest} sendLocationRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Queen-Lora/SendMessageStatus} and HTTP response
     */
    sendLocationWithHttpInfo(sendLocationRequest) {
      let postBody = sendLocationRequest;
      // verify the required parameter 'sendLocationRequest' is set
      if (sendLocationRequest === undefined || sendLocationRequest === null) {
        throw new Error("Missing the required parameter 'sendLocationRequest' when calling sendLocation");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['instanceId', 'token'];
      let contentTypes = ['application/x-www-form-urlencoded', 'application/json'];
      let accepts = ['application/json'];
      let returnType = SendMessageStatus;
      return this.apiClient.callApi(
        '/sendLocation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Sending a location to a new or existing chat.
     * Only one of two parameters is needed to determine the destination - chatId or phone.
     * @param {module:Queen-Lora/SendLocationRequest} sendLocationRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Queen-Lora/SendMessageStatus}
     */
    sendLocation(sendLocationRequest) {
      return this.sendLocationWithHttpInfo(sendLocationRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a message to a new or existing chat.
     * The message will be added to the queue for sending and delivered even if the phone is disconnected from the Internet or authorization is not passed.  Only one of two parameters is needed to determine the destination - chatId or phone.
     * @param {module:Queen-Lora/SendMessageRequest} sendMessageRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Queen-Lora/SendMessageStatus} and HTTP response
     */
    sendMessageWithHttpInfo(sendMessageRequest) {
      let postBody = sendMessageRequest;
      // verify the required parameter 'sendMessageRequest' is set
      if (sendMessageRequest === undefined || sendMessageRequest === null) {
        throw new Error("Missing the required parameter 'sendMessageRequest' when calling sendMessage");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['instanceId', 'token'];
      let contentTypes = ['application/x-www-form-urlencoded', 'application/json'];
      let accepts = ['application/json'];
      let returnType = SendMessageStatus;
      return this.apiClient.callApi(
        '/sendMessage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Send a message to a new or existing chat.
     * The message will be added to the queue for sending and delivered even if the phone is disconnected from the Internet or authorization is not passed.  Only one of two parameters is needed to determine the destination - chatId or phone.
     * @param {module:Queen-Lora/SendMessageRequest} sendMessageRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Queen-Lora/SendMessageStatus}
     */
    sendMessage(sendMessageRequest) {
      return this.sendMessageWithHttpInfo(sendMessageRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Send a ptt-audio to a new or existing chat.
     * Only one of two parameters is needed to determine the destination - chatId or phone.
     * @param {module:Queen-Lora/SendPTTRequest} sendPTTRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Queen-Lora/SendMessageStatus} and HTTP response
     */
    sendPTTWithHttpInfo(sendPTTRequest) {
      let postBody = sendPTTRequest;
      // verify the required parameter 'sendPTTRequest' is set
      if (sendPTTRequest === undefined || sendPTTRequest === null) {
        throw new Error("Missing the required parameter 'sendPTTRequest' when calling sendPTT");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['instanceId', 'token'];
      let contentTypes = ['application/x-www-form-urlencoded', 'application/json'];
      let accepts = ['application/json'];
      let returnType = SendMessageStatus;
      return this.apiClient.callApi(
        '/sendPTT', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Send a ptt-audio to a new or existing chat.
     * Only one of two parameters is needed to determine the destination - chatId or phone.
     * @param {module:Queen-Lora/SendPTTRequest} sendPTTRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Queen-Lora/SendMessageStatus}
     */
    sendPTT(sendPTTRequest) {
      return this.sendPTTWithHttpInfo(sendPTTRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Sending a vcard to a new or existing chat.
     * Only one of two parameters is needed to determine the destination - chatId or phone.
     * @param {module:Queen-Lora/SendVCardRequest} sendVCardRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Queen-Lora/SendMessageStatus} and HTTP response
     */
    sendVCardWithHttpInfo(sendVCardRequest) {
      let postBody = sendVCardRequest;
      // verify the required parameter 'sendVCardRequest' is set
      if (sendVCardRequest === undefined || sendVCardRequest === null) {
        throw new Error("Missing the required parameter 'sendVCardRequest' when calling sendVCard");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['instanceId', 'token'];
      let contentTypes = ['application/x-www-form-urlencoded', 'application/json'];
      let accepts = ['application/json'];
      let returnType = SendMessageStatus;
      return this.apiClient.callApi(
        '/sendVCard', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Sending a vcard to a new or existing chat.
     * Only one of two parameters is needed to determine the destination - chatId or phone.
     * @param {module:Queen-Lora/SendVCardRequest} sendVCardRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Queen-Lora/SendMessageStatus}
     */
    sendVCard(sendVCardRequest) {
      return this.sendVCardWithHttpInfo(sendVCardRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
