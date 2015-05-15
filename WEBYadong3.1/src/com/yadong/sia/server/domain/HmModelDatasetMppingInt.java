
package com.yadong.sia.server.domain;

/**
 * @ClassName: HmModelDatasetMpping
 * @Description: HmModelDatasetMpping实体（领域）对象
 *
 */
public class HmModelDatasetMppingInt implements java.io.Serializable {
	/** id */
	private java.lang.Integer id;

	/**
	 * 获取id
	 * @return id
	 */
	public java.lang.Integer getId() {
		return this.id;
	}

	/**
	 * 设置id
	 * @param id id
	 */
	public void setId(java.lang.Integer id) {
		this.id = id;
	}

	/** modelId */
	private java.lang.String modelId;

	/**
	 * 获取modelId
	 * @return modelId
	 */
	public java.lang.String getModelId() {
		return this.modelId;
	}

	/**
	 * 设置modelId
	 * @param modelId modelId
	 */
	public void setModelId(java.lang.String modelId) {
		this.modelId = modelId;
	}

	/** datasetIds */
	private java.lang.String datasetIds;

	/**
	 * 获取datasetIds
	 * @return datasetIds
	 */
	public java.lang.String getDatasetIds() {
		return this.datasetIds;
	}

	/**
	 * 设置datasetIds
	 * @param datasetIds datasetIds
	 */
	public void setDatasetIds(java.lang.String datasetIds) {
		this.datasetIds = datasetIds;
	}

	/** mappingInfo */
	private java.lang.String mappingInfo;

	/**
	 * 获取mappingInfo
	 * @return mappingInfo
	 */
	public java.lang.String getMappingInfo() {
		return this.mappingInfo;
	}

	/**
	 * 设置mappingInfo
	 * @param mappingInfo mappingInfo
	 */
	public void setMappingInfo(java.lang.String mappingInfo) {
		this.mappingInfo = mappingInfo;
	}

	/** mappingTime */
	private java.sql.Timestamp mappingTime;

	/**
	 * 获取mappingTime
	 * @return mappingTime
	 */
	public java.sql.Timestamp getMappingTime() {
		return this.mappingTime;
	}

	/**
	 * 设置mappingTime
	 * @param mappingTime mappingTime
	 */
	public void setMappingTime(java.sql.Timestamp mappingTime) {
		this.mappingTime = mappingTime;
	}

	/** remark */
	private java.lang.String remark;

	/**
	 * 获取remark
	 * @return remark
	 */
	public java.lang.String getRemark() {
		return this.remark;
	}

	/**
	 * 设置remark
	 * @param remark remark
	 */
	public void setRemark(java.lang.String remark) {
		this.remark = remark;
	}

	/** type */
	private java.lang.String type;

	/**
	 * 获取type
	 * @return type
	 */
	public java.lang.String getType() {
		return this.type;
	}

	/**
	 * 设置type
	 * @param type type
	 */
	public void setType(java.lang.String type) {
		this.type = type;
	}

}
