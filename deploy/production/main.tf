/*
pass in:
- api gateway ID


create:
- s3 bucket
- api gateway integration - HTTP proxy to bucket path 
- api gateway route, target is integration

OR

Just push build to di-frontend and let it pick up the new build naturally?

OR

New bucket and swap out the integration path?

*/