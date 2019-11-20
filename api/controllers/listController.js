import uuidv4 from 'uuid/v4'
import {
    List
} from '../db/models'

/**
 * @description List Controller
 * @class ListController
 */
class ListController {
    /**
     * @description Create Class
     * @param {object} req
     * @param {object} res
     * @returns {object} List
     * @memberof ListController
     */
    static async createList(req, res) {
        try {
            const {
                recipientName,
                recipientEmail,
                gifts
            } = req.body;
            const {
                user
            } = req.authorize;
            const {
                userId
            } = user;

            // console.log(userId);

            const list = await List.create({
                listId: uuidv4(),
                userId,
                recipientEmail,
                recipientName,
                gifts
            });

            return res.status(201).json({
                status: 201,
                data: list,
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                data: error.message
            });
        }
    }

    /**
     * @description Update List
     * @param {object} req
     * @param {object} res
     * @returns {object} List
     * @memberof ListController
     */
    static async updateList(req, res) {
        try {
            const {
                listId
            } = req.params;
            const {
                recipientEmail,
                recipientName,
                gifts
            } = req.body;

            await List.update({
                recipientEmail,
                recipientName,
                gifts
            }, {
                where: {
                    listId
                }
            });

            return res.status(201).json({
                status: 201,
                data: 'List Updated'
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                data: error.message
            })
        }
    }

    /**
     * @description Delete List
     * @param {object} req
     * @param {object} res
     * @returns {object} List
     * @memberof ListController
     */
    static async deleteList(req, res) {
        try {
            const {
                listId
            } = req.params;

            await List.destroy({
                where: {
                    listId
                }
            });

            return res.status(201).json({
                status: 201,
                data: 'List has been deleted'
            });
        } catch (error) {
            return res.status(500).json({
                status: 500,
                data: error.message,
            });
        }
    }
}

export default ListController;