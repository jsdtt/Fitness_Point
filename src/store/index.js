import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

let state = {
  title: '选择一个部位开始锻炼',
  selected: '开始',
  back: false,
  more: true,
  unit: 'Kg',
  show: false,
  selectedParams: {},
  muscle: '',
  // 动作列表
  actionList: {},// 肌群列表
  muscleList: ["胸部", "背部", "手臂", "肩部", "腿部", "腹部", "有氧", "拉伸"],
  // 记录列表
  recordeList: {},
  // 记录每次锻炼的时间-动作
  recordeTimeList: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})