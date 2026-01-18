const ProductCardSkeleton = () => {
    return (
        <div className="flex flex-col space-y-5  border border-gray-300 rounded animate-pulse pb-5">
            <div className="w-full h-40 p-5 bg-gray-200 rounded" />

            <div className="h-2/5 w-full flex flex-col space-y-2 px-5">
                <div className="h-6 bg-gray-200 rounded w-2/3" />
                <div className="h-6 bg-gray-200 rounded w-2/3" />
                <div className="h-6 bg-gray-200 rounded w-2/3" />
            </div>
        </div>
    );
};

export default ProductCardSkeleton;