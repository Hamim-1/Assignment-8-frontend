export const WishlistCardSkeleton = () => {
    return (
        <div className="flex md:items-center md:space-x-5 flex-col md:flex-row px-5 py-8 border border-gray-300 rounded animate-pulse">
            <div className="w-20 h-20 bg-gray-200 rounded" />

            <div className="flex-1 space-y-3 mt-4 md:mt-0">
                <div className="h-4 bg-gray-200 rounded w-2/3" />
                <div className="h-4 bg-gray-200 rounded w-1/3" />
            </div>

            <div className="w-32 h-9 bg-gray-200 rounded mt-4 md:mt-0" />
        </div>
    );
};