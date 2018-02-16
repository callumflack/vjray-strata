# VJ Ray Strata marketing website

## Local dev

Run the Keystone server on port 4000: `PORT=4000 nodemon server.js`

Run the next.js client: `npm run dev`

## To deploy the next client

Simply `now && now alias` as per `now.json`.

## To deploy the keystone server

1. Create a `now` deployment.
2. `now alias` the deployment to admin.vjraystrata.com.au
3. It's OK, the client's footer login link is admin.vjraystrata.com.au/keystone :)
4. You don't need to do anything to the client, because it's `@vjr_server_uri` `now secret` is always set to the aliased server URI :)

## Learnings

If you ever move to a new mongodb instance, remember to:

* update both server & client .env
* run new client & server deployments and alias them to the live URLs
* you won't need to update the `@vjr_server_uri` `now secret` as it is always set to the aliased server URI :)
* more info: https://www.evernote.com/l/ACyk1xhr6BFM_6mF_wsLe086BAG76tktx90
