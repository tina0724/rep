const rewardService = require('../services/reward')
const userService = require('../services/user')

class RewardController {
  checkIn = async (req) => {
    const { my_account, my_role_id, v_price } = req.body
    const res = await rewardService.checkIn({ account: my_account, role_id: my_role_id, v_price })
    return res
  }

  refreshActiveTime = async (req) => {
    const { my_account, my_role_id, active_time } = req.body
    const res = await rewardService.refreshActiveTime({ account: my_account, role_id: my_role_id, active_time })
    return res
  }

  getActiveTimeInTimePeriod = async (req) => {
    const { my_account, my_role_id, before_time, after_time } = req.query
    const res = await rewardService.getActiveTimeInTimePeriod({ account: my_account, role_id: my_role_id, before_time, after_time })
    return res
  }

  addActiveVPrice = async (req) => {
    //const { my_account, my_role_id, v_price } = req.body
    //const res = await rewardService.addActiveVPrice({ account: my_account, role_id: my_role_id, v_price })
    const { my_account, v_price } = req.body
    const res = await rewardService.addActiveVPrice({ account: my_account, v_price })
    return res
  }

  getMyCurrentRecord = async (req) => {
    const { my_account, my_role_id } = req.body
    const res = await rewardService.getMyCurrentRecord({ account: my_account, role_id: my_role_id })
    return res
  }
  getActiveVPrice = async (req) => {
    const { account } = req.body
    const res = await rewardService.getActiveVPrice({ account: account })
    return res
  }


}

const rewardController = new RewardController()

module.exports = rewardController
