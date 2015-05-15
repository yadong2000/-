package com.yadong.sia.server.dao.impl;

import java.util.Map;

import org.springframework.stereotype.Repository;

import com.yadong.sia.server.dao.HmModelDatasetMppingIntDao;
import com.yadong.sia.server.domain.HmModelDatasetMpping;
import com.yadong.sia.server.domain.HmModelDatasetMppingInt;
import com.yadong.sia.server.util.GeneratorKey;
import com.yadong.sia.server.util.dao.impl.MybatisBaseGenericDAOImpl;



/**
 * @ClassName: HmModelDatasetMppingDaoImpl
 * @Description: HmModelDatasetMppingDAO实现类 
 *
 */
@Repository("hmModelDatasetMppingDao")
public class HmModelDatasetMppingDaoIntImpl
extends MybatisBaseGenericDAOImpl<HmModelDatasetMppingInt, java.lang.Integer>
implements HmModelDatasetMppingIntDao {
	/**
	 * 生成UUID主键值。
	 * @param ob HmModelDatasetMpping对象
	 */
	protected void generateId(HmModelDatasetMppingInt ob) {
//		ob.setId(GeneratorKey.genaraId());
	}

	@Override
	public Integer save(Map<String, String> map) {
		// TODO Auto-generated method stub
		return null;
	}

}
