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
var UserAuthenticator = /** @class */ (function () {
    function UserAuthenticator() {
    }
    UserAuthenticator.prototype.login = function (username, password) {
        console.log('method login');
        console.log("Given username for login =>".concat(username, " password => ").concat(password));
    };
    UserAuthenticator.prototype.logout = function () {
        console.log('method logout');
    };
    UserAuthenticator.prototype.passwordreset = function (oldpassword, newpassword) {
        console.log('Password reset successfully');
    };
    return UserAuthenticator;
}());
var userauth = new UserAuthenticator();
userauth.login('testing', 'Testing');
userauth.logout();
userauth.passwordreset('oldpwd', 'newpwd');
