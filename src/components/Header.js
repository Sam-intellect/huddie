import { StyledHeader, Nav, Logo } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { Button } from './styles/Button.styled';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You has a voice,
              but so does youe audience. Create connections with your users as
              you engage in genuine discussion
            </p>
          </div>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
