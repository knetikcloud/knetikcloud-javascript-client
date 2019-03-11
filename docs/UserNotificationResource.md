# KnetikCloud.UserNotificationResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **Object** | The data to send and fill templates | [optional] 
**message** | **String** | The resolved message, if template provided in the notification ype | [optional] 
**notification_id** | **String** | The id of the notification | 
**notification_type_id** | **String** | The id of the notification type | 
**recipient** | **String** | The id of the recipient, dependent on the recipient_type. The user&#39;s id or the topic&#39;s id | 
**recipient_type** | **String** | The type of recipient for the notification. Either a user, or all users in a topic | 
**retrieve_date** | **Number** | The date this notification was first retrieved | [optional] 
**send_date** | **Number** | The date this notification was sent | [optional] 
**status** | **String** | The user&#39;s status for this notification | [optional] 
**user_id** | **Number** | The id of the user | 


<a name="RecipientTypeEnum"></a>
## Enum: RecipientTypeEnum


* `user` (value: `"user"`)

* `topic` (value: `"topic"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `pending` (value: `"pending"`)

* `read` (value: `"read"`)

* `hidden` (value: `"hidden"`)




