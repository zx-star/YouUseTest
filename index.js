/**
 * @description rgbToHex(0, 51, 255) 将RGB转换为16进制
 * @param {*} red
 * @param {*} green
 * @param {*} blue
 */
function useRgbToHex(red, green, blue) {
  return (
    '#' + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)
  )
}

/**
 * @description 复制到剪切板
 * @param {*} text
 */
function useClipboard(text) {
  return navigator.clipboard.writeText(text)
}

/**
 * @description 计算两个日期之间相差的天数
 * @param {*} params
 * @returns { object }
 */
function useDayDif(date1, date2) {
  return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
}

/**
 * @description 获取某个时间区间的开始到结束日期
 * @param {*} params
 */
function useTimeRange(interval) {
  var now = new Date()
  var start, end
  switch (interval) {
    case 'WEEK_Monday': //假设一周从周一开始
      let dayNum = now.getDay() - 1
      if (dayNum < 0) {
        dayNum = 6
      }
      start = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - dayNum
      )
      end = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + (6 - now.getDay())
      )
      break
    case 'WEEK_Sunday': //假设一周从周日开始
      start = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - now.getDay()
      )
      end = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + (6 - now.getDay())
      )
      break
    case 'MONTH':
      start = new Date(now.getFullYear(), now.getMonth(), 1)
      end = new Date(now.getFullYear(), now.getMonth() + 1, 0)
      break
    case 'LAST_7':
      start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 6)
      end = now
      break
    case 'LAST_THIRTY':
      start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 29)
      end = now
      break
    case 'TODAY':
      start = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      end = now
      break
    case 'YESTODAY':
      start = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)
      end = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)
      break
    default:
      start = null
      end = null
      break
  }

  return {
    start: start,
    end: end,
  }
}

/**
 * @description 生成随机16进制
 * @returns #92b008
 */
function useRandomHex() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`
}

/**
 * @description 从URL中获取查询参数
 * @param { string } params
 * @returns
 */
function useUrlParameters(URL) {
  URL = JSON.parse(
    '{"' +
      decodeURI(URL.split('?')[1])
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  )
  return JSON.stringify(URL)
}

/**
 * @description 获取用户选定的文本
 * @returns
 */
function useSelectedText() {
  return window.getSelection().toString()
}

/**
 * @description 获取设备类型
 * @returns
 */
function useDeviceType() {
  let u = navigator.userAgent
  let browser = {
    versions: {
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
      iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
    },
    language: (navigator.browserLanguage || navigator.language).toLowerCase(),
  }
  return browser
}

/**
 * @description 获取设备类型
 * @returns
 */
function useDeviceType() {
  let u = navigator.userAgent
  let browser = {
    versions: {
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
      iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
    },
    language: (navigator.browserLanguage || navigator.language).toLowerCase(),
  }
  return browser
}
