import { Link, useNavigate } from 'react-router-dom';
import useLogout from '../../hook/use-logout';
import UserAvatar from '../UserAvatar';

const Navbar = (props: { user?: string }) => {
  const navigate = useNavigate();
  const logout = useLogout();
  const signOut = async () => {
    await logout();
    navigate('/');
  };

  return (
    <div className='navbar bg-primary text-white px-5 sm:px-8 lg:px-10 2xl:px-16'>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          Beanzo
        </Link>
      </div>
      <div className='flex-none'>
        <h4 className='mr-2 font-medium capitalize'>Hello, {props.user}</h4>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-12 rounded-full border border-white'>
              <UserAvatar size={50} square={true} name={props.user} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-base-100 text-gray-600'
          >
            <li>
              <Link to={`/profile/${props.user}`} className='justify-between hover:bg-primary hover:text-base-100'>
                Profile
                {/* <span className='badge bg-white text-gray-600'>New</span> */}
              </Link>
            </li>
            <li>
              <button className='hover:bg-primary hover:text-base-100' onClick={signOut}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
