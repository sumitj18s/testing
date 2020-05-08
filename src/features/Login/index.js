import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { styled as materialStyled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styled  from 'styled-components';

const MyButton = materialStyled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  marginTop: '30px',
});

const Wrapper = styled.div`
    margin-top: 64px;
    display: 'flex';
    flex-direction: 'column';
    align-items: 'center';
`
const element=<h1>Welcome!</h1>;

console.log({element});
export default function Login() {
  return (
    <Container component="main" maxWidth="xs">
      <Wrapper>

        <form noValidate>
          {element}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
         
          <MyButton
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            
          >
            Sign In
          </MyButton>
          
        </form>
      </Wrapper>
      
    </Container>
  );
}