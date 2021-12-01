import { ReactNode } from 'react'
import { Container, Main } from './styles'
import  Header from '../Header'

interface IAdminLayout{
  children: ReactNode;
}

export function AdminLayout({ children }: IAdminLayout){
  return(
    <Container>
      <Header/>
      <Main>{children}</Main>
    </Container>
  )
}