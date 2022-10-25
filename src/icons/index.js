import Svgicon from '@/components/Svgicon'
const svgRequired = require.context('./svg', false, /\.svg$/)
svgRequired.keys().forEach((element) => {
  svgRequired(element)
})
export default (app) => {
  app.component('svg-icon', Svgicon)
}
