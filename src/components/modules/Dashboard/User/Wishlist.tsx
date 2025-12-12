import WishlistCard from "@/components/shared/WishlistCard";

const Wishlist = () => {
    return (
        <div className="max-h-[800px] overflow-auto flex flex-col gap-y-5">
            <WishlistCard />
            <WishlistCard />

        </div>
    );
};

export default Wishlist;