import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar bg-primary text-white px-14'>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>
          daisyUI
        </Link>
      </div>
      <div className='flex-none'>
        <h4 className='mr-2 font-medium capitalize'>Hello, Bassel</h4>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img src='' />
            </div>
          </label>
          <ul tabIndex={0} className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <a className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
