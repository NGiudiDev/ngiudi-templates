export class BaseModel {
	constructor(model, options = {}) {
		this.model = model;
		this.attrs = options.attrs || null;
		this.includes = options.includes || null;
		this.pageLimit = options.pageLimit || 10;
	}
  
	async create(data) {
		const item = await this.model.create(data);
		return item?.toJSON() || null;
	}

	async delete(id) {
		const deleted = await this.model.destroy({
			where: { id },
		});

		return deleted;
	}

	async getBy(whereObj) {
		const item = await this.model.findOne({
			attributes: this.attrs?.detail,
			include: this.includes?.detail,
			where: whereObj,
		});

		return item?.toJSON() || null;
	}

	async getById(id) {
		const item = await this.model.findByPk(id, {
			attributes: this.attrs?.detail,
			include: this.includes?.detail,
		});

		return item?.toJSON() || null;
	}

	async getPage(page = 1, whereObj = {}) {
		const queryObj = {
			attributes: this.attrs?.list,
			include: this.includes?.list,
			limit: this.pageLimit,
			offset: (page - 1) * this.pageLimit,
			order: [["created_at", "DESC"]],
			where: whereObj,
		};
		const result = await this.model.findAndCountAll(queryObj);
		return {
			count: result.count,
			rows: result.rows.map(item => item.toJSON()),
		};
	}

	async update(id, data) {
		const updated = await this.model.update(data, {
			where: { id },
		});

		return updated;
	}
};