# Shopify Image Gallery Challenge
    This is a Node express web application.

# Applicatioin Link
https://shopifyimagegallary.herokuapp.com


# Available and working features
    User Authentication.
    Add images to image gallery from your dashboard.
    Set image price.
    SELL/BUY images.
    Image shopping Cart functionalities.
    Payment implementation with stripe.
    Ability to manage images inventory history.
    handle money.




# TODO:
## SEARCH function
    from characteristics of the images

    from text

    from an image (search for similar images)


## DELETE image(s)
    one / bulk / selected / all images.

    Prevent a user deleting images from another user (access control).

    secure deletion of images.


### USAGE
## To Buy An Image
    *Visit the homepage* 
    *Add to cart any image of choice* 
    *Click on checkout to proceed to payment*
    *To continue to payment you must login or create an account if you dont have any!* 
    *Enter you payment details*

## To Sell An Image
    *Sign in to your dashboard* 
    *Click on upload and sell image* 
    *Fill the required image details*
    *Click on upload* 
    *Do always check your dashboard for any sell made*
    

## Set up and Contribution
To set up this project, first fork this repositiory to your own account

Pull the code to Your project directory and set it up by running the following command
```bash
git fetch upstream
git checkout develop
```
To install the dependencies the app is using run the command (ensure you have node installed)
```
npm install
```
## DATABASE SETUP
We are using MongoDb which is a noSql database

### Follow the link below to  download and install MongoDb server(MSI VERSION)
https://www.mongodb.com/download-center/community

### Follow the link below to download and install MongoDb Compass
https://www.mongodb.com/download-center/compass

### After installation 
Go to your root folder and create a new file and save it as
```
.env
```
### Copy the content of the .env.example file and paste it inside the .env file you created

## PROFILE IMAGE UPLOAD SETUP
We are using cloudinary api to upload our images to cloudinary

### Follow the link below to create and account and obtain your own Api keys
https://cloudinary.com

After creating an account take your Api keys and fill the empty keys in the .env file.


## To start the application on your localhost run the command

```
  npm install nodemon -g
```
 Then start your app using nodemon 
 ```
 nodemon app.js
 ```
// Then go to your browser and and type http://localhost:8000/ 
```

# Thanks for contributing.
