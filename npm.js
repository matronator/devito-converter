import DannyDeVito from "./dist/index"

document.addEventListener(`DOMContentLoaded`, e => {
  // Converter
  const converter = new DannyDeVito()
  const meters = document.getElementById(`metersInput`)
  const devitos = document.getElementById(`devitosInput`)

  meters.addEventListener(`input`, e => {
    devitos.value = converter.toDevitos(meters.value, 6).toString()
  })

  devitos.addEventListener(`input`, e => {
    meters.value = converter.toMeters(devitos.value, 6).toString()
  })

  // Page style
  const htmlCodes = document.querySelectorAll(`pre.html`)
  htmlCodes.forEach(htmlCode => {
    let lt = htmlCode.innerHTML
    let regex = /(".+?")/g
    const htmlString = lt.replace(regex, '<span class="html-string">$&</span>')
    htmlCode.innerHTML = htmlString
    lt = htmlCode.innerHTML
    regex = /(&lt;[0-z]+?&gt;)|(&lt;[a-z]+\S)|(&lt;\/[0-z]+?&gt;)|(&gt;)/gi
    const htmlTags = lt.replace(regex, '<span class="html-tag">$&</span>')
    htmlCode.innerHTML = htmlTags
    lt = htmlCode.innerHTML
    regex = /(id)|(src)/g
    const htmlAttr = lt.replace(regex, '<span class="html-attr">$&</span>')
    htmlCode.innerHTML = htmlAttr
  })

  const jsCodes = document.querySelectorAll(`pre.javascript`)
  jsCodes.forEach(jsCode => {
    let lt = jsCode.innerHTML
    let regex = /(span)|(converter)/gi
    const jsVarName = lt.replace(regex, '<span class="js-vName">$&</span>')
    jsCode.innerHTML = jsVarName
    lt = jsCode.innerHTML
    regex = /(const)|(var)|(let)|(new)/g
    const jsVar = lt.replace(regex, '<span class="js-var">$&</span>')
    jsCode.innerHTML = jsVar
    lt = jsCode.innerHTML
    regex = /[0-9]+?|(`.+?`)/gi
    const jsNum = lt.replace(regex, '<span class="js-num">$&</span>')
    jsCode.innerHTML = jsNum
    lt = jsCode.innerHTML
    regex = /(toMeters)|(getElementById)/g
    const jsFunc = lt.replace(regex, '<span class="js-func">$&</span>')
    jsCode.innerHTML = jsFunc
    lt = jsCode.innerHTML
    regex = /(DannyDeVito)/g
    const jsClass = lt.replace(regex, '<span class="js-class">$&</span>')
    jsCode.innerHTML = jsClass
  })
})
