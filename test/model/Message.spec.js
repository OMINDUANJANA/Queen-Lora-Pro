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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Node);
  }
}(this, function(expect, Node) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Node.Message();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Message', function() {
    it('should create an instance of Message', function() {
      // uncomment below and update the code to test Message
      //var instance = new Node.Message();
      //expect(instance).to.be.a(Node.Message);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Node.Message();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instance = new Node.Message();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new Node.Message();
      //expect(instance).to.be();
    });

    it('should have the property senderName (base name: "senderName")', function() {
      // uncomment below and update the code to test the property senderName
      //var instance = new Node.Message();
      //expect(instance).to.be();
    });

    it('should have the property fromMe (base name: "fromMe")', function() {
      // uncomment below and update the code to test the property fromMe
      //var instance = new Node.Message();
      //expect(instance).to.be();
    });

    it('should have the property author (base name: "author")', function() {
      // uncomment below and update the code to test the property author
      //var instance = new Node.Message();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instance = new Node.Message();
      //expect(instance).to.be();
    });

    it('should have the property chatId (base name: "chatId")', function() {
      // uncomment below and update the code to test the property chatId
      //var instance = new Node.Message();
      //expect(instance).to.be();
    });

    it('should have the property messageNumber (base name: "messageNumber")', function() {
      // uncomment below and update the code to test the property messageNumber
      //var instance = new Node.Message();
      //expect(instance).to.be();
    });

  });

}));
