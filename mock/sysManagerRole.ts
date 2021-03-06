import { Response, Request } from 'express';

/*
 * @Date: 2020-05-07 16:32:46
 * @LastEditTime: 2020-05-22 18:15:18
 */
const data = Array(10)
  .fill('')
  .map((item, index) => ({
    id: index,
    code: index,
    name: `管理员${index}`,
    isAdmin: 'Y',
    userNumber: 10088,
    remark: '具备“财务管理”，“查看订单”的相关权限',
  }));
const noDataRes = {
  result: {},
  code: '0',
  success: true,
  resultMsg: null,
};
export default {
  // 获取列表
  'POST /sys/searchSysRoleList': (req: Request, res: Response) => {
    const { currPage, pageSize } = req.body;
    const list = !pageSize ? data : data.slice((currPage - 1) * pageSize, currPage * pageSize);
    setTimeout(() => {
      res.send({
        result: {
          list: list,
          totalPage: 8,
          totalRecords: data.length,
          currPage: 1,
        },
        code: '0',
        success: true,
        resultMsg: null,
      });
    }, 0);
  },

  // 删除
  'POST /sys/deleteSysRole': (req: Request, res: Response) => {
    setTimeout(() => {
      res.send(noDataRes);
    }, 2000);
  },

  // 修改
  'POST /sys/modifySysRole': (req: Request, res: Response) => {
    setTimeout(() => {
      res.send(noDataRes);
    }, 2000);
  },

  // 新增
  'POST /sys/addSysRole': (req: Request, res: Response) => {
    setTimeout(() => {
      res.send(noDataRes);
    }, 2000);
  },

  // 获取角色权限列表
  'POST /sys/searchSysAuthorityList': (req: Request, res: Response) => {
    setTimeout(() => {
      res.send({
        result: [
          {
            id: 1,
            code: 1,
            parentCode: null,
            name: 'Root',
            type: 1,
            level: 0,
            isLeaf: 'N',
            uri: '',
            createTime: '2020-05-21T20:11:30.000+0000',
            modifyTime: '2020-05-21T20:11:30.000+0000',
          },
          {
            id: 2,
            code: 2,
            parentCode: 1,
            name: '商户',
            type: 1,
            level: 1,
            isLeaf: 'N',
            uri: '/business',
            createTime: '2020-05-21T20:11:30.000+0000',
            modifyTime: '2020-05-21T20:11:30.000+0000',
          },
          {
            id: 3,
            code: 21,
            parentCode: 2,
            name: '商户管理',
            type: 1,
            level: 2,
            isLeaf: 'N',
            uri: '/business/manager',
            createTime: '2020-05-21T20:14:57.000+0000',
            modifyTime: '2020-05-21T20:14:57.000+0000',
          },
          {
            id: 4,
            code: 211,
            parentCode: 21,
            name: '商户资料',
            type: 1,
            level: 3,
            isLeaf: 'Y',
            uri: '/business/manager/info',
            createTime: '2020-05-21T20:15:12.000+0000',
            modifyTime: '2020-05-21T20:15:12.000+0000',
          },
          {
            id: 5,
            code: 221,
            parentCode: 21,
            name: '商户认证',
            type: 1,
            level: 3,
            isLeaf: 'Y',
            uri: '/business/manager/auth',
            createTime: '2020-05-21T20:15:13.000+0000',
            modifyTime: '2020-05-21T20:15:13.000+0000',
          },
          {
            id: 6,
            code: 231,
            parentCode: 21,
            name: '商户应用',
            type: 1,
            level: 3,
            isLeaf: 'Y',
            uri: '/business/manager/application',
            createTime: '2020-05-21T20:15:13.000+0000',
            modifyTime: '2020-05-21T20:15:13.000+0000',
          },
          {
            id: 8,
            code: 3,
            parentCode: 1,
            name: '商品',
            type: 1,
            level: 1,
            isLeaf: 'N',
            uri: '/product',
            createTime: '2020-05-21T20:15:41.000+0000',
            modifyTime: '2020-05-21T20:15:41.000+0000',
          },
          {
            id: 9,
            code: 31,
            parentCode: 3,
            name: '商品管理',
            type: 1,
            level: 2,
            isLeaf: 'N',
            uri: '/product/manager',
            createTime: '2020-05-21T20:15:57.000+0000',
            modifyTime: '2020-05-21T20:15:57.000+0000',
          },
          {
            id: 10,
            code: 311,
            parentCode: 31,
            name: '商品列表',
            type: 1,
            level: 3,
            isLeaf: 'Y',
            uri: '/product/manager/list',
            createTime: '2020-05-21T20:16:21.000+0000',
            modifyTime: '2020-05-21T20:16:21.000+0000',
          },
          {
            id: 11,
            code: 321,
            parentCode: 31,
            name: '商品分组',
            type: 1,
            level: 3,
            isLeaf: 'Y',
            uri: '/product/manager/group',
            createTime: '2020-05-21T20:16:21.000+0000',
            modifyTime: '2020-05-21T20:16:21.000+0000',
          },
          {
            id: 12,
            code: 331,
            parentCode: 31,
            name: '品牌管理',
            type: 1,
            level: 3,
            isLeaf: 'Y',
            uri: '/product/manager/brand',
            createTime: '2020-05-21T20:16:21.000+0000',
            modifyTime: '2020-05-21T20:16:21.000+0000',
          },
          {
            id: 13,
            code: 341,
            parentCode: 31,
            name: '产品管理',
            type: 1,
            level: 3,
            isLeaf: 'Y',
            uri: '/product/manager/management',
            createTime: '2020-05-21T20:16:21.000+0000',
            modifyTime: '2020-05-21T20:16:21.000+0000',
          },
          {
            id: 14,
            code: 351,
            parentCode: 31,
            name: '商品定价',
            type: 1,
            level: 3,
            isLeaf: 'Y',
            uri: '/product/manager/price',
            createTime: '2020-05-21T20:16:21.000+0000',
            modifyTime: '2020-05-21T20:16:21.000+0000',
          },
          {
            id: 15,
            code: 4,
            parentCode: 1,
            name: '订单',
            type: 1,
            level: 1,
            isLeaf: 'N',
            uri: '/order',
            createTime: '2020-05-21T20:22:31.000+0000',
            modifyTime: '2020-05-21T20:22:31.000+0000',
          },
          {
            id: 16,
            code: 41,
            parentCode: 4,
            name: '订单管理',
            type: 1,
            level: 2,
            isLeaf: 'N',
            uri: '/order/manager',
            createTime: '2020-05-21T20:23:02.000+0000',
            modifyTime: '2020-05-21T20:23:02.000+0000',
          },
          {
            id: 17,
            code: 411,
            parentCode: 41,
            name: '交易订单',
            type: 1,
            level: 3,
            isLeaf: 'Y',
            uri: '/order/manager/transaction',
            createTime: '2020-05-21T20:24:24.000+0000',
            modifyTime: '2020-05-21T20:24:24.000+0000',
          },
          {
            id: 18,
            code: 421,
            parentCode: 41,
            name: '采购订单',
            type: 1,
            level: 3,
            isLeaf: 'Y',
            uri: '/order/manager/purchase',
            createTime: '2020-05-21T20:24:24.000+0000',
            modifyTime: '2020-05-21T20:24:24.000+0000',
          },
          {
            id: 20,
            code: 5,
            parentCode: 1,
            name: '财务',
            type: 1,
            level: 1,
            isLeaf: 'N',
            uri: '/finance',
            createTime: '2020-05-21T20:26:13.000+0000',
            modifyTime: '2020-05-21T20:26:13.000+0000',
          },
          {
            id: 21,
            code: 51,
            parentCode: 5,
            name: '财务管理',
            type: 1,
            level: 2,
            isLeaf: 'N',
            uri: '/finance/manager',
            createTime: '2020-05-21T20:26:13.000+0000',
            modifyTime: '2020-05-21T20:26:13.000+0000',
          },
          {
            id: 22,
            code: 511,
            parentCode: 51,
            name: '商户账户',
            type: 1,
            level: 3,
            isLeaf: 'Y',
            uri: '/finance/manager/pos',
            createTime: '2020-05-21T20:26:13.000+0000',
            modifyTime: '2020-05-21T20:26:13.000+0000',
          },
          {
            id: 23,
            code: 521,
            parentCode: 51,
            name: '对账单',
            type: 1,
            level: 3,
            isLeaf: 'Y',
            uri: '/finance/manager/statementOfAccount',
            createTime: '2020-05-21T20:26:13.000+0000',
            modifyTime: '2020-05-21T20:26:13.000+0000',
          },
          {
            id: 24,
            code: 531,
            parentCode: 51,
            name: '账户明细',
            type: 1,
            level: 3,
            isLeaf: 'Y',
            uri: '/finance/manager/details',
            createTime: '2020-05-21T20:26:13.000+0000',
            modifyTime: '2020-05-21T20:26:13.000+0000',
          },
          {
            id: 25,
            code: 541,
            parentCode: 51,
            name: '账户充值',
            type: 1,
            level: 3,
            isLeaf: 'Y',
            uri: '/finance/manager/recharge',
            createTime: '2020-05-21T20:26:13.000+0000',
            modifyTime: '2020-05-21T20:26:13.000+0000',
          },
          {
            id: 28,
            code: 6,
            parentCode: 1,
            name: '库存',
            type: 1,
            level: 1,
            isLeaf: 'N',
            uri: '/stock',
            createTime: '2020-05-21T20:28:12.000+0000',
            modifyTime: '2020-05-21T20:28:12.000+0000',
          },
          {
            id: 29,
            code: 61,
            parentCode: 6,
            name: '库存管理',
            type: 1,
            level: 2,
            isLeaf: 'N',
            uri: '/stock/manager',
            createTime: '2020-05-21T20:28:12.000+0000',
            modifyTime: '2020-05-21T20:28:12.000+0000',
          },
          {
            id: 30,
            code: 611,
            parentCode: 61,
            name: '商品库存',
            type: 1,
            level: 3,
            isLeaf: 'Y',
            uri: '/stock/manager/productStock',
            createTime: '2020-05-21T20:28:12.000+0000',
            modifyTime: '2020-05-21T20:28:12.000+0000',
          },
          {
            id: 31,
            code: 621,
            parentCode: 61,
            name: '商品入库',
            type: 1,
            level: 3,
            isLeaf: 'Y',
            uri: '/stock/manager/warehousing',
            createTime: '2020-05-21T20:28:13.000+0000',
            modifyTime: '2020-05-21T20:28:13.000+0000',
          },
          {
            id: 33,
            code: 641,
            parentCode: 61,
            name: '库存流水',
            type: 1,
            level: 3,
            isLeaf: 'Y',
            uri: '/stock/manager/stockWater',
            createTime: '2020-05-21T20:28:13.000+0000',
            modifyTime: '2020-05-21T20:28:13.000+0000',
          },
          {
            id: 35,
            code: 661,
            parentCode: 61,
            name: '供应商管理',
            type: 1,
            level: 3,
            isLeaf: 'Y',
            uri: '/stock/manager/suppliers',
            createTime: '2020-05-21T20:28:13.000+0000',
            modifyTime: '2020-05-21T20:28:13.000+0000',
          },
          {
            id: 36,
            code: 9,
            parentCode: 1,
            name: '系统',
            type: 1,
            level: 1,
            isLeaf: 'N',
            uri: '/sys',
            createTime: '2020-05-21T20:29:44.000+0000',
            modifyTime: '2020-05-21T20:29:44.000+0000',
          },
          {
            id: 37,
            code: 91,
            parentCode: 9,
            name: '系统管理',
            type: 1,
            level: 2,
            isLeaf: 'N',
            uri: '/sys/manager',
            createTime: '2020-05-21T20:29:44.000+0000',
            modifyTime: '2020-05-21T20:29:44.000+0000',
          },
          {
            id: 39,
            code: 921,
            parentCode: 91,
            name: '用户管理',
            type: 1,
            level: 3,
            isLeaf: 'N',
            uri: '/sys/manager/user',
            createTime: '2020-05-21T20:29:45.000+0000',
            modifyTime: '2020-05-21T20:29:45.000+0000',
          },
          {
            id: 40,
            code: 931,
            parentCode: 91,
            name: '角色管理',
            type: 1,
            level: 3,
            isLeaf: 'N',
            uri: '/sys/manager/role',
            createTime: '2020-05-21T20:29:45.000+0000',
            modifyTime: '2020-05-21T20:29:45.000+0000',
          },
        ],
        code: '0',
        success: true,
        resultMsg: null,
      });
    });
  },

  // 获取详情
  'POST /sys/getSysRoleInfo': (req: Request, res: Response) => {
    setTimeout(() => {
      res.send({
        result: {
          sysRole: {
            id: 2,
            code: 2,
            name: '商家管理员',
            isAdmin: 'N',
            remark: null,
            createTime: '2019-06-03T15:20:12.000+0000',
            modifyTime: '2019-06-03T15:20:15.000+0000',
          },
          sysAuthorityList: [],
        },
        code: '0',
        success: true,
        resultMsg: null,
      });
    });
  },
};
