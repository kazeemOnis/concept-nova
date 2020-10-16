export const getsession = key => {
  const json = window.localStorage[key]
  if (json == 'undefined' || json == undefined) {
    return false
  }
  return json ? JSON.parse(json) : false
}

export const savesession = (key, value) => {
  window.localStorage[key] = JSON.stringify(value)
}

export const removesession = key => {
  delete window.localStorage[key]
}
