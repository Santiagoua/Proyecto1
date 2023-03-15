import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders a button with the correct text', () => {
    const buttonWrapper = shallow(<Button>Agregar Ruta</Button>);
    expect(buttonWrapper.find('button').text()).toEqual('Agregar Ruta');
  });
});
