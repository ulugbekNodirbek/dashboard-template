import OrdersCard from "../../components/orders_card/ordersCard";
import './users.scss'
const Users = () => {
    return <div className="orders_block">
        <div className="orders_block_top">
            <form action="" className="orders-block-form">
                <input type="text" placeholder="Search" className="orders-block-input" />
            </form>
            <button className="orders-block-top-btn">Add New Order</button>
        </div>
            <div className="orders-block_bottom">
                <OrdersCard/>
            </div>
    </div>;
};

export default Users;
