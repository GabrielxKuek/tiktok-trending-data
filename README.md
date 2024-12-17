# tiktok-discovery-api-history
This repo scrapes TikToks Web API automatically using GitHub Actions and monitors changes to its discovery endpoint on 3 different subdomains.

All pages are downloaded as JSON and prettyfied with jq. A commit is made whenever a change is detected and all changes can be viewed throughout the commit history.


## Inspiration: 
 - [Git scraping: track changes over time by scraping to a Git repository by Simon Willison](https://simonwillison.net/2020/Oct/9/git-scraping/)
 - [California fire data history](https://github.com/simonw/ca-fires-history)

## Improvements: 
 - ignore covers or just remove signature from their urls. Its not constant

---
**History:**
- `05/22/2023`: Use API params that return more data and 1080p videos
- `05/19/2023`: Re-enabled. Updated domains and added API feed
- `01/06/2023`: scrape machine broke
- `12/19/2021`: Re-enabled the workflow, test run returned good data
- `03/20/2021`: Disabled because TikTok now has captchas preventing collection of open trending data

# Note for Self
This server is also running on render. In order to use it, please run
```
https://tiktok-trending-data.onrender.com/api/{example_endpoint}
```

if you want to run it locally, please use 
```
localhost:8000/api/{example_endpoint}
```
## Discover Endpoints
Different TikTok discover endpoints and their purposes:

discover-t.json: Verification/captcha check endpoint
discover-www.json: Global trending content for desktop web (www.tiktok.com)
discover-us.json: US-specific trending content (us.tiktok.com)
discover-m.json: Mobile-optimized trending content (m.tiktok.com)

All content endpoints (www/us/m) return three types:
 </br>
Type 1: Music tracks </br>
Type 2: Verified accounts </br>
Type 3: Hashtags/challenges </br>

## Discover List Endpoints
The list endpoints (discover-list-www.json and discover-list-us.json) provide simplified trending data:

Returns only hashtags (type 3) and music (type 4)
Shows direct links to content
More compact format without additional metadata
Both US and WWW endpoints return identical data

Unlike the main discover endpoints, these list versions focus purely on what's trending without extra details like view counts or descriptions.
