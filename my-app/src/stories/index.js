import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {BrowserRouter} from 'react-router-dom';

import { Button, Welcome } from '@storybook/react/demo';

import App from "../App";
import List from "../List";
import Table from "../Table";
import Link from "../Link";
import Logo from "../Logo";
import GreyTxt from "../GreyTxt";
import Cell from "../Cell";
import Issue from "../Issue";
import Test from "../Test";
import Detailed3Dots from '../Details3Dots';
import EmojiButton from '../EmojiButton';
import IssueHeader from '../IssueHeaer';
import IssueBody from '../IssueBody';
import TimelineStructure from '../TimelineStructure';
import AvatarPic from '../AvatarPic';
import IssueContent from '../IssueContent';
import IssueDiscussion from '../IssueDiscussion';

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


storiesOf("Issue list", module)
  .add("Simple list", () =>  <NumberList numbers={[1, 2, 3, 4, 5]} />)
  .add("Logo", () => <Logo></Logo>)
  .add("Main link", () => <BrowserRouter><Link id="1" URL="www.test.com" content="Issue content"/></BrowserRouter>)
  .add("Grey text", () => <GreyTxt id="1234" datetime="datetime" date="7 novembre 2018" ago="50 min ago" user="torvalds" title="Issue opened by torvalds"/>)
  .add("Cell content", () => 
  <BrowserRouter>
    <div><Logo/> 
    <div class="float-left col-9 lh-condensed p-2">
    <Link id="1" URL="www.test.com" content="Issue content"/> 
    <GreyTxt id="1234" datetime="datetime" date="7 novembre 2018" ago="50 min ago" user="torvalds" title="Issue opened by torvalds"/>
    </div>
    </div>
    </BrowserRouter>)
  .add("Cell", () => <BrowserRouter><Cell></Cell></BrowserRouter>)
  .add("Table", () => <BrowserRouter><Table></Table></BrowserRouter>);
    
storiesOf("Issue details", module)
  .add("Test", () => <Test></Test>)
  .add("Avatar pic", () => <TimelineStructure><AvatarPic avatarUrl="https://avatars2.githubusercontent.com/u/810438?s=88&v=4"></AvatarPic></TimelineStructure>)
  .add("...", () => <Detailed3Dots></Detailed3Dots>)
  .add("Emoji button", () => <EmojiButton></EmojiButton>)
  .add("Issue header", () => <TimelineStructure><IssueContent><IssueHeader username="gaearon" avatarUrl="https://avatars2.githubusercontent.com/u/810438?s=88&v=4"></IssueHeader></IssueContent></TimelineStructure>)
  .add("Issue body", () => <TimelineStructure><IssueContent><IssueBody message="This is a message"></IssueBody></IssueContent></TimelineStructure>)
  .add("Details", () => <Issue username="gaearon" message="This is a message" avatarUrl="https://avatars2.githubusercontent.com/u/810438?s=88&v=4"></Issue> )
  .add("Issue timeline discussion", () => <IssueDiscussion></IssueDiscussion>
   );