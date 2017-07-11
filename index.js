#!/usr/bin/env node

var proactive = require('proactive-sharepoint-auth');
var args = process.argv.slice(2);
if (args.length != 3) {
    console.log(`Usage: sharepoint-wpt-cookies <domain> <username> <password> | CLIP
    <domain> is the xxx part of https://xxx.sharepoint.com
    <username> is the yyy part of yyy@xxx.onmicrosoft.com
    <password> is the ???`)
    return 1
}
var url = `https://${args[0]}.sharepoint.com`;
var user = `${args[1]}@${args[0]}.onmicrosoft.com`
var pass = args[2]
var auth = new proactive.SharePoint.Authenticate(url, user, pass);
auth.authenticate().then(
    function (cookie) {
        for (c in cookie) {
            console.log(`setCookie\t${url}\t${c}=${cookie[c]}`)
        }
        console.log(`navigate\t${url}`)
    }).catch(
    function (reason) {
        console.error(reason);
    }
);