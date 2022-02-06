import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header(): JSX.Element {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="at money"></img>
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}