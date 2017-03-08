# KnetikPlatformApiDocumentationLatest.ActivityOccurrenceResource

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activityId** | **Number** | The id of the activity | 
**challengeActivityId** | **Number** | The id of the challenge activity (as part of the event, required if eventId set) | [optional] 
**createdDate** | **Number** | The date this occurrence was created, unix timestamp in seconds | [optional] 
**entitlement** | [**ActivityEntitlementResource**](ActivityEntitlementResource.md) | The entitlement item required to enter the occurrence. Required if not part of an event. Must come from the set of entitlement items listed in the activity | [optional] 
**eventId** | **Number** | The id of the event | [optional] 
**id** | **Number** | The id of the activity occurrence | [optional] 
**rewardStatus** | **String** | Indicate if the rewards have been given out already | [optional] 
**settings** | [**[SelectedSettingResource]**](SelectedSettingResource.md) | The list of settings and their options available for this activity. Should be null on create if and only if part of an event | [optional] 
**simulated** | **Boolean** | Whether this occurrence will be played as a simulation. | [optional] 
**startDate** | **Number** | The date this occurrence was started, unix timestamp in seconds. null if not yet started | [optional] 
**status** | **String** | The current status of the occurrence (default: OPEN) | [optional] 
**updatedDate** | **Number** | The date this occurrence was last updated, unix timestamp in seconds | [optional] 
**users** | [**[ActivityUserResource]**](ActivityUserResource.md) | The list of users playing in this occurrence. Can only be set directly with ACTIVITIES_ADMIN permission | [optional] 


<a name="RewardStatusEnum"></a>
## Enum: RewardStatusEnum


* `pending` (value: `"pending"`)

* `failed` (value: `"failed"`)

* `complete` (value: `"complete"`)

* `partial` (value: `"partial"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `SETUP` (value: `"SETUP"`)

* `OPEN` (value: `"OPEN"`)

* `PLAYING` (value: `"PLAYING"`)

* `FINISHED` (value: `"FINISHED"`)

* `ABANDONED` (value: `"ABANDONED"`)



