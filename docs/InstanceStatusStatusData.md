# Node.InstanceStatusStatusData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**substatus** | **String** | Instance Substatus | [optional] 
**title** | **String** | Status title in the language of the instance | [optional] 
**msg** | **String** | Status message in the language of the instance | [optional] 
**submsg** | **String** | Additional status message in the language of the instance | [optional] 
**actions** | [**InstanceStatusStatusDataActions**](InstanceStatusStatusDataActions.md) |  | [optional] 
**reason** | **String** | The reason why the instance is in \&quot;loading\&quot; status | [optional] 



## Enum: SubstatusEnum


* `normal` (value: `"normal"`)

* `loading` (value: `"loading"`)

* `offline` (value: `"offline"`)

* `expired` (value: `"expired"`)

* `opening` (value: `"opening"`)

* `pairing` (value: `"pairing"`)

* `timeout` (value: `"timeout"`)

* `computer` (value: `"computer"`)

* `phone` (value: `"phone"`)

* `battery_low_1` (value: `"battery_low_1"`)

* `battery_low_2` (value: `"battery_low_2"`)





## Enum: ReasonEnum


* `connecting` (value: `"connecting"`)

* `syncing` (value: `"syncing"`)

* `offline` (value: `"offline"`)

* `proxyblock` (value: `"proxyblock"`)

* `conflict` (value: `"conflict"`)




