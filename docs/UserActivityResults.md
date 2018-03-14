# KnetikCloud.UserActivityResults

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_rewards** | [**[RewardCurrencyResource]**](RewardCurrencyResource.md) | Any currency rewarded to this user | [optional] 
**item_rewards** | [**[RewardItemResource]**](RewardItemResource.md) | Any items rewarded to this user | [optional] 
**rank** | **Number** | The position of the user in the leaderboard. Null means non-compete or disqualification | [optional] 
**score** | **Number** | The raw score in this leaderboard. Null means non-compete or disqualification | [optional] 
**tags** | **[String]** | Any tags for the metric. Each unique tag will translate into a unique leaderboard. Maximum 10 tags and 50 characters each | [optional] 
**ties** | **Number** | The number of users tied at this rank, including this user. 1 means no tie | [optional] 
**updated_date** | **Number** | The date this score was recorded or updated. Unix timestamp in seconds | [optional] 
**user** | [**SimpleUserResource**](SimpleUserResource.md) | The player for this entry | 


