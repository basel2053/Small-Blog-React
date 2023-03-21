import Avatar from 'boring-avatars';

const UserAvatar = (props: { name?: string; size?: number; square?: boolean }) => {
  return (
    <Avatar
      square={props.square}
      size={props.size}
      name={props.name}
      variant='beam'
      colors={['#92A1C6', '#146A7C', '#66CC8A', '#C271B4', '#C20D90']}
    />
  );
};

export default UserAvatar;
