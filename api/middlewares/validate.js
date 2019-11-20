import {List} from '../db/models'

/**
 * @description Validating
 * @class Validate
 */

export default class Validate{
     /**
   * @description Check if List Exist
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @returns {object} Idea
   * @memberof List
   */

   static async checkIfListExist(req, res, next){
       const {listId} = req.params;

       const listExist = await List.findOne({
           where: {
               listId
           },
           attributes: ['listId', 'userId']
       });

       if(!listExist){
           return res.status(404).json({
               status: 404,
               data:'List does not exist',
           });
       }

       res.locals.list = listExist;
       return next();
   }

   /**
   * @description Check if user
   * @param {object} req
   * @param {object} res
   * @param {object} next
   * @returns {object} Idea
   * @memberof ShareController
   */

   static async checkIfUser(req, res, next){
       const {list} = res.locals;
       const {user} = req.authorize;
       const {userId} = user;

       if(userId !== list.userId){
           return res.status(403).json({
               status: 403,
               data: 'You don\'t have permission to manage this list',
           });
       }

       return next();
   }
}