let browserInfo = navigator.userAgent;  //浏览器信息

/**
 * 判断是否是移动端
 * @return {Boolean} 布尔值
 */
export function isMobile(){
    return browserInfo.indexOf('Mobile') > -1;
}

/**
 * 是否为IE
 * @return {Boolean} 布尔值
 */
export function isIE(){
    return browserInfo.indexOf('Trident') > -1;
}

/**
 * 是否为火狐
 * @return {Boolean} 布尔值
 */
export function isFirefox(){
    return browserInfo.indexOf('Firefox') > -1;
}