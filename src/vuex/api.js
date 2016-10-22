import Settings from 'settings'

export function fetchEntrys (url, archive) {
  return Vue.http.get(Settings.Api.root + `${url}/${archive}`)
}