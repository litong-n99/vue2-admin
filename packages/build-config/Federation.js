const SINGLETON_LIB = ["vue", "model", "vue-router", "vxe-table"];

function genFederationShared(depInfo) {
  return Object.entries(depInfo).reduce((total, [key, val]) => {
    if (SINGLETON_LIB.includes(key)) {
      total[key] = { singleton: true };
    } else {
      total[key] = {};
    }
    return total;
  }, {});
}

module.exports = {
  SINGLETON_LIB,
  genFederationShared
}
