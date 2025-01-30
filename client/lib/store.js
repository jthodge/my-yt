export default class Store {
  showThumbnailsKey = 'showThumbnails'
  lastVideosKey = 'lastVideos'

  constructor() {
    if (!localStorage.getItem(this.showThumbnailsKey)) localStorage.setItem(this.showThumbnailsKey, 'true')
    if (!localStorage.getItem(this.lastVideosKey)) localStorage.setItem(this.lastVideosKey, '{}')
  }

  toggle (key) {
    if (![this.showThumbnailsKey].includes(key)) return console.error('invalid key', key)
    localStorage.setItem(key, localStorage.getItem(key) === 'true' ? 'false' : 'true')
  }
  get(key) {
    if (![this.showThumbnailsKey, this.lastVideosKey].includes(key)) return console.error('invalid key', key)
    return JSON.parse(localStorage.getItem(key))
  }
  set(key, value) {
    if (typeof value === 'string') {
      localStorage.setItem(key, value)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }
  // push(key, item) {
  //   if (![this.ignoreVideoKey].includes(key)) return console.error('invalid key', key)
  //   const list = this.get(key)
  //   list.push(item)
  //   this.set(key, list)
  //   return item
  // }
}