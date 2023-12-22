/**

 * TypeScript Assignments

### Assignment 1: Automated Testing of a User Authentication System 
 
Objective:
Practice integrating classes and methods into a test script for a user authentication system.
 
Instructions:
1. Create a class as `UserAuthenticator` 
2. Create a methods like login(with 2 mandatory parameters and one optional parameter), logout, 
   and password reset.
3. Create instance of the class and call the methods
**/

class UserAuthenticator {
  
   login(username:String,password:string){

      console.log('method login');

      console.log(`Given username for login =>${username} password => ${password}`);
      

   }

   logout(){

      console.log('method logout');
      
   }

   passwordreset(oldpassword:string, newpassword:string){
      console.log('Password reset successfully');
      
   }
}

const userauth = new UserAuthenticator();
userauth.login('testing','Testing');
userauth.logout();
userauth.passwordreset('oldpwd','newpwd');