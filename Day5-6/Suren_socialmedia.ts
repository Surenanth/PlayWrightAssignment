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

import { SocialMediaFeature } from "./Suren_SocialMediaFeature";
import { uiComponent } from "./Suren_uiComponent";

   class Post implements SocialMediaFeature,uiComponent{
       sharePost(): void {
        console.log("I'm in Post class sharePost metion");
       }
       render(): void {
        console.log("I'm in Post class render metion");
        
     }
     handleEvent(): void {
         console.log("I'm in Post class handleEvent metion");
     }
    
   }


   class Comment implements SocialMediaFeature,uiComponent{
    sharePost(): void {
     console.log("I'm in Comment class sharePost metion");
    }
    render(): void {
     console.log("I'm in Comment class render metion");
     
  }
  handleEvent(): void {
      console.log("I'm in Comment class handleEvent metion");
  }
 
}

class Like implements SocialMediaFeature,uiComponent{
    sharePost(): void {
     console.log("I'm in Like class sharePost metion");
    }
    render(): void {
     console.log("I'm in Like class render metion");
     
  }
  handleEvent(): void {
      console.log("I'm in Like class handleEvent metion");
  }
 
}


const post = new Post();
post.sharePost();
post.render();
post.handleEvent();


const cmt = new Comment();
cmt.sharePost();
cmt.render();
cmt.handleEvent();


const lke = new Like();
lke.sharePost();
lke.render();
lke.handleEvent();