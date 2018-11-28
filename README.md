
# SCU Alumni Events

In this section, we outline a simple installation guide in order to run our system on an SCU provided Linux computer. To run our system, follow these steps:

1.  Log in to your Linux SCU account.

2.  Open the provided zip file and save it to a webpages username directory in SCU alumni folder.

3.  Change all references of `nsampema` for every hyperlink to whichever directory you are using. This can be accomplished with this command run from the user directory:

```
sed -i 's/nsampema/newname/g' *.php *.js *.html
```

4.  In `api.php`, change the username and password for the database and server to your Oracle SQL account.

5.  Access the webpage by going to http://students.engr.scu.edu/~nsampema/index.html, but replacing `nsampema` with your username directory.
