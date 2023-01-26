class localStorage {

  setLocalStorage(key,value){
    window.sessionStorage.setItem(key,JSON.stringify(value))
  }

  getLocalStorage(key){
    const value = window.sessionStorage.getItem(key)
    // 如果不为空
    if (value){
      return JSON.parse(value)
    }
  }
  deleteCache(key) {
    window.sessionStorage.removeItem(key)
  }

  clearCache() {
    window.sessionStorage.clear()
  }
}

export default new localStorage()