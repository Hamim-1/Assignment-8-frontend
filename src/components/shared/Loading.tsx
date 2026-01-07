const LoadingOverlay = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center z-50 h-[70vh] w-full">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
};

export default LoadingOverlay;
