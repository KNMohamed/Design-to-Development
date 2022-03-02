import PostForm from './PostForm';

export default {
  title: 'Components/PostForm',
  component: PostForm,
};

const Template = (args) => <PostForm {...args} />;

export const Default = Template.bind({});
