import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio,
};

const Template = (args) => <Bio {...args} />;

export const Default = Template.bind({});

Default.args = {
  headshot:
    'https://pbs.twimg.com/profile_images/845865860753494017/hb9FhkE0_400x400.jpg',
  name: 'Khalid',
  tagline: 'Front-end developer',
  role: 'Some content',
};
