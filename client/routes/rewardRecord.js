const express = require('express')
const wrapper = require('../utils/wrapper')
const rewardController = require('../controller/reward')

const router = express.Router()

const API_ROUTE = {
  checkIn: '/student/check-in',
  refreshActiveTime: '/student/refresh-active-time',
  getActiveTimeInTimePeriod: '/student/get-active-time',
  addActiveVPrice: '/student/add-active-vprice',
  getMyCurrentRecord: '/student/get-current-record',
  getActiveVPrice: '/student/get-ActiveV-Price'
}

router.post(API_ROUTE.checkIn, wrapper(rewardController.checkIn))
router.post(API_ROUTE.refreshActiveTime, wrapper(rewardController.refreshActiveTime))
router.get(API_ROUTE.getActiveTimeInTimePeriod, wrapper(rewardController.getActiveTimeInTimePeriod))
router.post(API_ROUTE.addActiveVPrice, wrapper(rewardController.addActiveVPrice))
router.get(API_ROUTE.getMyCurrentRecord, wrapper(rewardController.getMyCurrentRecord))
router.get(API_ROUTE.getActiveVPrice, wrapper(rewardController.getActiveVPrice))

module.exports = router
