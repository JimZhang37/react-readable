# Readble Introduction
This app is the frontend of online forum. The [the backend server](https://github.com/udacity/reactnd-project-readable-starter) is provided by Udadity and you have to download it and follow its intruction to install it before you run the frontend. 

This app is a content and comment web app. Users will be able to post content to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

# How to install this app
The first step is to install all dependancies by running `npm i` in the folder containing `package.json`.
The second step is to run the backend server. Please follow its instructions.
The last step is to run the frontend server by running `npm start` in the folder containing `package.json`.

# What you can do with this app
There are 3 routes in this app.

`/`, or the root, is the default landing page for this app. It's a list view of all posts. You will see a list of all the posts that can be sorted by both time created and rating. You are able to perform a few actions towards those posts, like upvote, downvote, delete and edit existing posts. In addtion, new post can be created in this route.

`/category`, which is similar to the root, only shows posts from the given category. It's a list vew of posts from a given category.

`/category/postId`, which is the view to show the details of a post, can be accessed by tapping the post in the post list view. In this view, you can manipulate the post as well as a list of comments for this post. If you know the id of a post, you can also visit the URL directly, which will fetch necessary data from backend if the local state is empty.

## Navigation
The navigation of this app is dynamic created. When category's data is downloaded from backend, the links to each category will be created in the navigation area. But if there is no information about a category, the link will not appear.

# The libraries used 
## React
The core library of this app.
## React Dom

## React Redux, Redux
The state is managed by redux. Action and reducers are located in respective folders in the code base.
## Hook
As functional component is popular, many hooks are used. Like useEffect(), useState(), useDispach().
As I picked up hook during this project, not all component are functional, so you will also find connect() and mapStateToProps() in this project.
## Route
Router and route is necessary for this one page application.
## Material ui
A few icons, like delete, edit, upvote, and etc. are used in this app. 

## axios
The api call is managed by axios. I don't think it is better than fetch, which is nativly supported by many broswers. I just happned to try this axios library to see what it offers.

# More
I think it is necessary to add unit test and story board in this app as it can increase the robusty and maintenability of this app.

Additionally, to arrange the UI more beautifully is a must-do next time.
