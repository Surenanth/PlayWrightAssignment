"use strict";
/**
 * Objective:
Practice using interfaces with multiple implementation
 
Instructions:
1. create an interface `SocialMediaFeature` with a method `sharePost()`.
2. Export the both SocialMediaFeature and UIComponent (From Assignment2)
2. Create `Post`, `Comment`, and `Like` classes and implement the `SocialMediaFeature` interface
   and UIcomponent
4. Create instances of `Post`, `Comment`, and `Like` and Call the methods to render, handle events,
   and share posts in a social media platform application.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post() {
    }
    Post.prototype.sharePost = function () {
        console.log("I'm in Post class sharePost metion");
    };
    Post.prototype.render = function () {
        console.log("I'm in Post class render metion");
    };
    Post.prototype.handleEvent = function () {
        console.log("I'm in Post class handleEvent metion");
    };
    return Post;
}());
var Comment = /** @class */ (function () {
    function Comment() {
    }
    Comment.prototype.sharePost = function () {
        console.log("I'm in Comment class sharePost metion");
    };
    Comment.prototype.render = function () {
        console.log("I'm in Comment class render metion");
    };
    Comment.prototype.handleEvent = function () {
        console.log("I'm in Comment class handleEvent metion");
    };
    return Comment;
}());
var Like = /** @class */ (function () {
    function Like() {
    }
    Like.prototype.sharePost = function () {
        console.log("I'm in Like class sharePost metion");
    };
    Like.prototype.render = function () {
        console.log("I'm in Like class render metion");
    };
    Like.prototype.handleEvent = function () {
        console.log("I'm in Like class handleEvent metion");
    };
    return Like;
}());
var post = new Post();
post.sharePost();
post.render();
post.handleEvent();
var cmt = new Comment();
cmt.sharePost();
cmt.render();
cmt.handleEvent();
var lke = new Like();
lke.sharePost();
lke.render();
lke.handleEvent();
