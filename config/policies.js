/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {
  /***************************************************************************
   *                                                                          *
   * Default policy for all controllers and actions, unless overridden.       *
   * (`true` allows public access)                                            *
   *                                                                          *
   ***************************************************************************/

  // '*': true,
  AdminController: {
    "logout": ["isLoggedIn", "isAdmin"],
  },
  AuthorController: {
    "*": ["isLoggedIn", "isAdmin"],
  },
  BookController: {
    "create": ["isLoggedIn", "isAdmin"],
    "update": ["isLoggedIn", "isAdmin"],
    "delete": ["isLoggedIn", "isAdmin"],
    "get": "isLoggedIn",

  },
  CategoryController: {
    "*": ["isLoggedIn", "isAdmin"],
  },
  HistoryController: {
    "*": ["isLoggedIn", "isAdmin"],
  },
  UserController: {
    "logout": ["isLoggedIn", "isUser"],
  },
};
