import NavBar from '../features/Navbar/Navbar';
import UserOrders from '../features/user/userComponets/userOrders';

function UserOrdersPage() {
  return (
    <div>
      <NavBar>
        <h1 className='mx-auto text-2xl'>My Orders</h1>
        <UserOrders></UserOrders>
      </NavBar>
    </div>
  );
}

export default UserOrdersPage;