# Node.Class3ChatsApi

All URIs are relative to *https://api.chat-api.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGroupParticipant**](Class3ChatsApi.md#addGroupParticipant) | **POST** /addGroupParticipant | Adding participant to a group
[**demoteGroupParticipant**](Class3ChatsApi.md#demoteGroupParticipant) | **POST** /demoteGroupParticipant | Demote group participant
[**getChats**](Class3ChatsApi.md#getChats) | **GET** /dialogs | Get the chat list.
[**group**](Class3ChatsApi.md#group) | **POST** /group | Creates a group and sends the message to the created group.
[**promoteGroupParticipant**](Class3ChatsApi.md#promoteGroupParticipant) | **POST** /promoteGroupParticipant | Make participant in the group an administrator
[**readChat**](Class3ChatsApi.md#readChat) | **POST** /readChat | Open chat for reading messages
[**removeGroupParticipant**](Class3ChatsApi.md#removeGroupParticipant) | **POST** /removeGroupParticipant | Remove participant from a group



## addGroupParticipant

> GroupParticipantStatus addGroupParticipant(groupParticipantAction)

Adding participant to a group

### Example

```javascript
import Node from 'Queen-Lora-pro';
let defaultClient = Node.ApiClient.instance;
// Configure API key authorization: instanceId
let instanceId = defaultClient.authentications['instanceId'];
instanceId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//instanceId.apiKeyPrefix = 'Token';
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new Node.Class3ChatsApi();
let groupParticipantAction = new Node.GroupParticipantAction(); // GroupParticipantAction | 
apiInstance.addGroupParticipant(groupParticipantAction).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupParticipantAction** | [**GroupParticipantAction**](GroupParticipantAction.md)|  | 

### Return type

[**GroupParticipantStatus**](GroupParticipantStatus.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## demoteGroupParticipant

> GroupParticipantStatus demoteGroupParticipant(groupParticipantAction)

Demote group participant

### Example

```javascript
import Node from 'Queen-Lora-pro';
let defaultClient = Node.ApiClient.instance;
// Configure API key authorization: instanceId
let instanceId = defaultClient.authentications['instanceId'];
instanceId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//instanceId.apiKeyPrefix = 'Token';
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new Node.Class3ChatsApi();
let groupParticipantAction = new Node.GroupParticipantAction(); // GroupParticipantAction | 
apiInstance.demoteGroupParticipant(groupParticipantAction).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupParticipantAction** | [**GroupParticipantAction**](GroupParticipantAction.md)|  | 

### Return type

[**GroupParticipantStatus**](GroupParticipantStatus.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## getChats

> Chats getChats()

Get the chat list.

The chat list includes avatars.

### Example

```javascript
import Node from 'Queen-Lora-pro';
let defaultClient = Node.ApiClient.instance;
// Configure API key authorization: instanceId
let instanceId = defaultClient.authentications['instanceId'];
instanceId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//instanceId.apiKeyPrefix = 'Token';
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new Node.Class3ChatsApi();
apiInstance.getChats().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Chats**](Chats.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## group

> CreateGroupStatus group(createGroupAction)

Creates a group and sends the message to the created group.

The group will be added to the queue for sending and sooner or later it will be created, even if the phone is disconnected from the Internet or the authorization is not passed.   2 Oct 2018 update: chatId parameter will be returned if group was created on your phone within 20 second.

### Example

```javascript
import Node from 'Queen-Lora-pro';
let defaultClient = Node.ApiClient.instance;
// Configure API key authorization: instanceId
let instanceId = defaultClient.authentications['instanceId'];
instanceId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//instanceId.apiKeyPrefix = 'Token';
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new Node.Class3ChatsApi();
let createGroupAction = new Node.CreateGroupAction(); // CreateGroupAction | 
apiInstance.group(createGroupAction).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGroupAction** | [**CreateGroupAction**](CreateGroupAction.md)|  | 

### Return type

[**CreateGroupStatus**](CreateGroupStatus.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## promoteGroupParticipant

> GroupParticipantStatus promoteGroupParticipant(groupParticipantAction)

Make participant in the group an administrator

### Example

```javascript
import Node from 'Queen-Lora-pro';
let defaultClient = Node.ApiClient.instance;
// Configure API key authorization: instanceId
let instanceId = defaultClient.authentications['instanceId'];
instanceId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//instanceId.apiKeyPrefix = 'Token';
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new Node.Class3ChatsApi();
let groupParticipantAction = new Node.GroupParticipantAction(); // GroupParticipantAction | 
apiInstance.promoteGroupParticipant(groupParticipantAction).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupParticipantAction** | [**GroupParticipantAction**](GroupParticipantAction.md)|  | 

### Return type

[**GroupParticipantStatus**](GroupParticipantStatus.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## readChat

> ReadChatStatus readChat(readChatAction)

Open chat for reading messages

Use this method to make users see their messages read.

### Example

```javascript
import Node from 'Queen-Lora-pro';
let defaultClient = Node.ApiClient.instance;
// Configure API key authorization: instanceId
let instanceId = defaultClient.authentications['instanceId'];
instanceId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//instanceId.apiKeyPrefix = 'Token';
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new Node.Class3ChatsApi();
let readChatAction = new Node.ReadChatAction(); // ReadChatAction | 
apiInstance.readChat(readChatAction).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **readChatAction** | [**ReadChatAction**](ReadChatAction.md)|  | 

### Return type

[**ReadChatStatus**](ReadChatStatus.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json


## removeGroupParticipant

> GroupParticipantStatus removeGroupParticipant(groupParticipantAction)

Remove participant from a group

### Example

```javascript
import Node from 'Queen-Lora-pro';
let defaultClient = Node.ApiClient.instance;
// Configure API key authorization: instanceId
let instanceId = defaultClient.authentications['instanceId'];
instanceId.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//instanceId.apiKeyPrefix = 'Token';
// Configure API key authorization: token
let token = defaultClient.authentications['token'];
token.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//token.apiKeyPrefix = 'Token';

let apiInstance = new Node.Class3ChatsApi();
let groupParticipantAction = new Node.GroupParticipantAction(); // GroupParticipantAction | 
apiInstance.removeGroupParticipant(groupParticipantAction).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupParticipantAction** | [**GroupParticipantAction**](GroupParticipantAction.md)|  | 

### Return type

[**GroupParticipantStatus**](GroupParticipantStatus.md)

### Authorization

[instanceId](../README.md#instanceId), [token](../README.md#token)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded, application/json
- **Accept**: application/json

