import Button from '@components/atoms/Button'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Navigation = () => {

  return (
    <Navbar>
      <NavButton href="/">Web3Careers</NavButton>
      <NavButton href="companies">Companies</NavButton>
      <NavButton href="mission">Our Mission</NavButton>
      <Button as={Link} to='add-job'>Post a Job</Button>
    </Navbar>
  )
}

// navbar and navbuttons but the navbar items are all aligned to the right except for the first one

const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 2rem;
  box-sizing: border-box;
  gap: 3rem;

  > :first-child {
    margin-right: auto;
  }
`

const NavButton = styled.a`
  display: inline;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`


export default Navigation