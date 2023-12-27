const userModel = require('../models/user')
const pagination = require('../utils/pagination')
const { toObjectId } = require('../utils/map')
const lodash = require('lodash')

class UserDao {
  async findUserWithRoleId({ account, password, role_id }) {
    return await userModel.findOne({
      account,
      password,
      role_id,
      delete_status: 0,
    })
  }

  // 根据手机号(账户)查询个人信息
  async findUserByAccount(account) {
    return await userModel.findOne({ account, delete_status: 0 }, { password: 0, delete_status: 0 })
  }

  // 创建账户
  async createUser(userInfo) {
    return await userModel.create({
      ...userInfo,
    })
  }

  // 激活账户
  async updateActivationStatus(account, session) {
    const res = await userModel.findOneAndUpdate(
      { account, delete_status: 0 },
      { $bit: { activation_status: { xor: 1 } } },
      {
        session,
      }
    )
    return res
  }

  // 软删账户
  async updateDeleteStatus(account, session) {
    // find不到，返回null
    return await userModel.findOneAndUpdate(
      { account },
      {
        delete_status: 1,
      },
      {
        session,
      }
    )
  }

  // 更新账户信息
  async updateUser({ account, user_name, password, new_account, role_id }, session) {
    return await userModel.findOneAndUpdate(
      { account },
      {
        //user_name,
        password,
        //role_id,
        //account: new_account,
      },
      { session }
    )
  }

  // 根据用户id查找个人信息
  async findUserById(user_id) {
    return await userModel.findById(user_id)
  }

  //联表查询用户对应角色信息
  async findUserRoleInfo(account) {
    return await userModel.findOne({ account }).populate('role_id')
  }

  // 查询用户列表(分页)
  async findUserList({
    //account,
    department, // 暂不做数据过滤
    activation_status,
    //role_id,
    delete_status = 0,
    //size,
    //page,
  }) {
    const matchPip = {
      delete_status: { $eq: delete_status },
      //account: { $regex: account },
    }
    if (!lodash.isNil(activation_status)) matchPip.activation_status = activation_status
    // if (!lodash.isEmpty(role_id)) matchPip.role_id = { $eq: toObjectId(role_id) }

    return await pagination({
      model: userModel,
      matchPip,
      listPip: [
        /*
        {
          $lookup: {
            from: 'roles',
            localField: 'role_id',
            foreignField: '_id',
            as: 'role',
          },
        },
        */
        {
          $sort: { v_price: -1 } // 按照 v_price 字段降序排序
        }
      ],
      //options: { size, page },
    })
  }

  // 获取指定用户的权限列表
  async findUserPermissionList(account) {
    const aggregateQuery = [
      {
        $match: {
          account: { $regex: account },
        },
      },
      {
        $lookup: {
          from: 'roles',
          localField: 'role_id',
          foreignField: '_id',
          as: 'role',
        },
      },
      // {
      //   $unwind: '$role.permission_ids'
      // },
      {
        $lookup: {
          from: 'permissions',
          localField: 'role.permission_ids',
          foreignField: '_id',
          as: 'permissions',
        },
      },
    ]
    const [result] = await userModel.aggregate(aggregateQuery)
    return result.permissions
  }

  // 添加虚拟奖励
  addVPrice = async ({ account, v_price }, session) => {
    const result = await userModel.findOneAndUpdate(
      { account },
      {
        //v_price: { $inc: { v_price } },
        $inc: { v_price: v_price },
      },
      { session }
    )
    return result
  }
  getActiveVPrice = async ({ account }) => {
    return await userModel.findOne({ account }, { password: 0, delete_status: 0 })

  }
}
const userDao = new UserDao()

module.exports = userDao
