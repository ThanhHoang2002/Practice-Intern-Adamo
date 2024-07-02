import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
interface Route {
  path: string
  component: () => JSX.Element
}
const publicRoute: Route[] = [
  { path: '/', component: Home },
  { path: 'detail', component: ProductDetail }
]

export { publicRoute }
