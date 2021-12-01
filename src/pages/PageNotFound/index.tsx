import { Container } from './styles'

import banner from '../../assets/img/bannerErrorOne.gif'

export function PageNotFound() {
  return (
    <Container>
      <img src={banner} alt="Page not found" />
      <h1>Page Not Found</h1>
    </Container>
  )
}
