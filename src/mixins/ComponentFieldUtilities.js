import _ from 'lodash'

export default {
  getData(dataFieldName) {
    return _.get(this.vm.$data, dataFieldName)
  },

  setData(dataFieldName, value) {
    _.set(this.vm.$data, dataFieldName, value)
    return this
  },

  getComputed(computedFieldName) {
    return _.get(this.vm, computedFieldName)
  },

  setComputed(computedFieldName, value) {
    _.set(this.vm, computedFieldName, value)
    return this
  },

  getProperty(propFieldName) {
    return _.get(this.vm.$props, propFieldName)
  },

  setProperty(propFieldName, value) {
    _.set(this.vm.$props, propFieldName, value)
    return this
  },

  setMethod(methodName, implementation) {
    this.vm[methodName] = implementation
  },

  getMethod(methodName) {
    return this.vm[methodName]
  },

  invokeMethod(methodName, ...params) {
    return this.getMethod(methodName)(...params)
  }
}