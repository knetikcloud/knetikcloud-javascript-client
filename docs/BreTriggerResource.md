# KnetikCloud.BreTriggerResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **String** | The category this trigger belongs to. See endpoints for related asset information. All new triggers are in category &#39;custom&#39; | [optional] 
**event_name** | **String** | The unique name for the event. This serves as the unique identifier. Cannot be changed after creation | 
**parameters** | [**[BreTriggerParameterDefinition]**](BreTriggerParameterDefinition.md) | A list of parameters that will be sent with the event when the trigger is fired. These must be included in the event and match the described types | [optional] 
**system_trigger** | **Boolean** | Where this trigger came from. System triggers cannot be removed or updated | [optional] 
**tags** | **[String]** | A list of tags for filtering | [optional] 
**trigger_description** | **String** | A description of the trigger | 
**trigger_name** | **String** | A human readable name for this trigger | 


<a name="CategoryEnum"></a>
## Enum: CategoryEnum


* `achievement` (value: `"achievement"`)

* `behavior` (value: `"behavior"`)

* `comment` (value: `"comment"`)

* `disposition` (value: `"disposition"`)

* `device` (value: `"device"`)

* `entitlement` (value: `"entitlement"`)

* `friends` (value: `"friends"`)

* `fulfillment` (value: `"fulfillment"`)

* `gamification` (value: `"gamification"`)

* `inventory` (value: `"inventory"`)

* `invoice` (value: `"invoice"`)

* `media` (value: `"media"`)

* `scheduler` (value: `"scheduler"`)

* `store` (value: `"store"`)

* `subscription` (value: `"subscription"`)

* `user` (value: `"user"`)

* `wallet` (value: `"wallet"`)

* `custom` (value: `"custom"`)

* `challenge` (value: `"challenge"`)

* `activity` (value: `"activity"`)

* `campaign` (value: `"campaign"`)

* `event` (value: `"event"`)

* `monitoring` (value: `"monitoring"`)

* `verification` (value: `"verification"`)

* `group` (value: `"group"`)




