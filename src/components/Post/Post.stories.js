import React from 'react';

import Post from './Post';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Post',
  component: Post,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Post {...args} />;

export const Defualt = Template.bind({});
Defualt.args = {
  content:
    'I’m working in Figma trying to design a new website that shows all of my tweets!',
  date: '3/2/2022',
};
