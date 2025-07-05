const {Logger} = require('../config/logger-config');

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {   
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            Logger.error("Something went wrong in the crud repository: create");
            throw error;
        }
    }

    async get(id) {
        try {
            const result = await this.model.findByPk(id);
            return result;
        } catch (error) {
            Logger.error("Something went wrong in the crud repository: get");
            throw error;
        }
    }

    async destroy(data) {
        try {
            const result = await this.model.destroy({where: {id: data}});
            return result;
        } catch (error) {
            Logger.error("Something went wrong in the crud repository: destroy");
            throw error;
        }
    }

    async update(id, data) {
        try {
            const result = await this.model.update(data, {where: {id: id}});
            return result;
        } catch (error) {
            Logger.error("Something went wrong in the crud repository: update");
            throw error;
        }
    }

    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            Logger.error("Something went wrong in the crud repository: getAll");
            throw error;
        }
    }
}

module.exports = CrudRepository;