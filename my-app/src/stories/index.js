import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import App from "../App";
import List from "../List";
import Table from "../Table";
import Link from "../Link";
import Logo from "../Logo";
import GreyTxt from "../GreyTxt";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  /*
  storiesOf("App", module).add("default", () => (
    <App />
  ));
*/

storiesOf("App", module)
.add("default", () => <App />)
.add("with title", () => <App title="My World" />);


function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}


storiesOf("Labo", module)
    .add("Simple list", () =>  <NumberList numbers={[1, 2, 3, 4, 5]} />)
    .add("Logo", () => <Logo></Logo>)
    .add("Main link", () => <Link id="1" URL="www.test.com" content="Issue content"/>)
    .add("Grey text", () => <GreyTxt id="1234" datetime="datetime" date="7 novembre 2018" ago="50 min ago" user="torvalds" title="Issue opened by torvalds"/>)
    .add("Cell content", () => 
      <div><Logo/> 
      <div class="float-left col-9 lh-condensed p-2">
      <Link id="1" URL="www.test.com" content="Issue content"/> 
      <GreyTxt id="1234" datetime="datetime" date="7 novembre 2018" ago="50 min ago" user="torvalds" title="Issue opened by torvalds"/>
      </div>
      </div>)
    .add("Table", () => <Table></Table>);
    
