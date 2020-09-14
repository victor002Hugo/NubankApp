import React from 'react';
import logo from '~/assets/Nubank_Logo.png';
import { Container, Top, Title, Logo } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Victor</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={30} color="#FFF" />
    </Container>
  );
}