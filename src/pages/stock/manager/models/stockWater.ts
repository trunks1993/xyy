/*
 * @Date: 2020-05-19 23:41:06
 * @LastEditTime: 2020-05-20 14:13:18
 */

import { Effect } from 'dva';

import { queryList } from '../services/stockWater';
import { Reducer } from 'redux';
import produce, { Draft } from 'immer';
import { TableListData } from '@/pages/data';

export interface ListItemType {
  id: number;
  code: number;
  accountNo: number;
  destAccountNo: string;
  type: number;
  changeAmount: number;
  amount: number;
  bizType: number;
  orderNo: string;
  remark: string;
  createTime: string;
  modifyTime: string;
}

export interface StockWaterModelState extends TableListData<ListItemType> {}

interface ModelType {
  namespace: string;
  state: StockWaterModelState;
  effects: {
    fetchList: Effect;
  };
  reducers: {
    setList: Reducer;
  };
}

const Model: ModelType = {
  namespace: 'stockManagerStockWater',
  state: {
    list: [],
    total: 0,
  },

  effects: {
    *fetchList({ queryParams, callback }, { call, put }) {
      const [err, data, msg] = yield call(queryList, queryParams);
      if (!err) {
        yield put({
          type: 'setList',
          payload: data,
        });
      }
    },
  },

  reducers: {
    setList: produce((draft: Draft<StockWaterModelState>, { payload }): void => {
      draft.list = payload.list;
      draft.total = payload.totalRecords;
    }),
  },
};

export default Model;