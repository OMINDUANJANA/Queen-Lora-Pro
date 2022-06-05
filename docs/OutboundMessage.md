# Node.OutboundMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | message id in queue | [optional] 
**body** | **String** | text message in queue | [optional] 
**type** | **String** | type of the message in queue | [optional] 
**lastTry** | **Number** | Last try time to send a message | [optional] 
**metadata** | **Object** | Additional message data | [optional] 



## Enum: TypeEnum


* `chat` (value: `"chat"`)

* `image` (value: `"image"`)

* `ptt` (value: `"ptt"`)

* `document` (value: `"document"`)

* `audio` (value: `"audio"`)

* `video` (value: `"video"`)

* `location` (value: `"location"`)

* `call_log` (value: `"call_log"`)




