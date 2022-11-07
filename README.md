Parser
=====
This is my soulution for test problem for company Omastere

Installation
---
Before start the progran make sure that you have already installed php and Node.js interpriter

Run this  commant to check if php is already installed on your machine
``` markdown
php -v
```
Run this  commant to check if Node.js is already installed on your machine
``` markdown
node -v
```

If either of command gave such result
``` markdown
command not found
```
You should install interpriters from official websites
 *[php](https://www.php.net/downloads.php)
 *[Node.js](https://nodejs.org/en/download/)
 
Installing dependencies
---
Before start the program all Node.js dependencies should be installed
``` markdown
npm install
```

Running parser
---
Parsing program takes website url as command line argument

Sample input
``` markdown
php parser.php https://dev.amidstyle.com
```

Sample output
``` markdown
{"result":"Task #0560d4fc58349bb968f565072baaede7aef302f7 has been succesfully completed.","score":0.9,"sign":"2cf441b7b0a788ceff723a646ad4e306"}
```