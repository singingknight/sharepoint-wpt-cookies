# sharepoint-wpt-cookies

A very small node utility to get WebPageTest(WPT) script to log in to Office 365 SharePoint root and render home page.

The login is on WPT done using cookies so you don't reveal the username/password.

**Remember** to check _'Script includes sensitive data'_ on the Script tab in WPT

## Install
```
npm install -g sharepoint-wpt-cookies
```
## Usage
```
sharepoint-wpt-cookies <domain> <username> <password>
```
Where
* `<domain>` is the xxx part of https://xxx.sharepoint.com
* `<username>` is the yyy part of yyy@xxx.onmicrosoft.com or the full username including domain
* `<password>` is the ???

## Note
As the script is <tab> separated it's a good idea to pipe the resulting script to a file (or clipboard (using `| CLIP`) on windows)  

### Example (User domain xxx.onmicrosoft.com)
```
sharepoint-wpt-cookies singingknight admin secretpassword | CLIP
```

This will give a script like this:
```
setCookie	https://singingknight.sharepoint.com	rtFa=Di6...==
setCookie	https://singingknight.sharepoint.com	FedAuth=77u...+
setCookie	https://singingknight.sharepoint.com	RpsContextCookie=
navigate	https://singingknight.sharepoint.com
```

### Example (Custom user domain)
```
sharepoint-wpt-cookies singingknight admin@somedomain.com secretpassword | CLIP
```

This will give a script like this:
```
setCookie	https://singingknight.sharepoint.com	rtFa=Di6...==
setCookie	https://singingknight.sharepoint.com	FedAuth=77u...+
setCookie	https://singingknight.sharepoint.com	RpsContextCookie=
navigate	https://singingknight.sharepoint.com
```