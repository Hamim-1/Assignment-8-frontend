
import BillingDetails from "@/components/modules/checkout/BillingDetails";
import OrderDetails from "@/components/modules/checkout/OrderDetails";
import Breadcrumb from "@/components/shared/Breadcrumb";

const CheckoutPage = () => {
    return (
        <div className="custom-container mt-10 my-16">
            <Breadcrumb page="Checkout" />
            <div className="flex flex-col lg:flex-row lg:gap-x-5 gap-y-5 lg:gap-y-0">
                <BillingDetails />
                <OrderDetails />
            </div>
        </div>
    );
};

export default CheckoutPage;