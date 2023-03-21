import UserAvatar from '../UserAvatar';

const ProfilePicture = (props: { size: number; author?: string }) => {
  return (
    <div className='avatar my-4'>
      <div className='mask mask-squircle'>
        <UserAvatar square={true} size={props.size} name={props.author} />
      </div>
    </div>
  );
};

export default ProfilePicture;
