const Filter = () => {
    return (
        <div className='flex flex-col space-y-5'>
            <div className="flex flex-col space-y-3 border-b border-gray-300 pb-5">
                <p className="text-lg uppercase font-semibold">Categorise</p>


                <div className="flex space-x-3 items-center">
                    <input type="checkbox" className="text-primary focus:ouline-0 rounded-sm" id="cate-${i}-1" />
                    <label htmlFor="cate-${i}-1">Women</label>
                </div>


                <div className="flex space-x-3 items-center">
                    <input type="checkbox" className="text-primary focus:ouline-0 rounded-sm" id="cate-${i}-2" />
                    <label htmlFor="cate-${i}-2">Men</label>
                </div>



                <div className="flex space-x-3 items-center">
                    <input type="checkbox" className="text-primary focus:ouline-0 rounded-sm" id="cate-${i}-3" />
                    <label htmlFor="cate-${i}-3">Shoes</label>

                </div>


                <div className="flex space-x-3 items-center">
                    <input type="checkbox" className="text-primary focus:ouline-0 rounded-sm" id="cate-${i}-4" />
                    <label htmlFor="cate-${i}-4">Computer</label>

                </div>

            </div>

            <div className="border-b border-gray-300 pb-5 flex flex-col space-y-3">
                <p className="text-lg uppercase font-semibold">Size</p>
                <div className="flex space-x-3">
                    <input type="text" readOnly placeholder="XS"
                        className="h-7 w-7 p-1 border border-gray-400 focus:bg-primary focus:placeholder:text-white text-center focus:ouline-0 focus:border-none text-sm font-medium rounded cursor-pointer" />
                    <input type="text" readOnly placeholder="S"
                        className="h-7 w-7 p-1 border border-gray-400 focus:bg-primary focus:placeholder:text-white text-center focus:ouline-0 focus:border-none text-sm font-medium rounded cursor-pointer" />
                    <input type="text" readOnly placeholder="M"
                        className="h-7 w-7 p-1 border border-gray-400 focus:bg-primary focus:placeholder:text-white text-center focus:ouline-0 focus:border-none text-sm font-medium rounded cursor-pointer" />
                    <input type="text" readOnly placeholder="L"
                        className="h-7 w-7 p-1 border border-gray-400 focus:bg-primary focus:placeholder:text-white text-center focus:ouline-0 focus:border-none text-sm font-medium rounded cursor-pointer" />
                    <input type="text" readOnly placeholder="XL"
                        className="h-7 w-7 p-1 border border-gray-400 focus:bg-primary focus:placeholder:text-white text-center focus:ouline-0 focus:border-none text-sm font-medium rounded cursor-pointer" />
                </div>
            </div>

            <div className="pb-5 flex flex-col space-y-3">
                <p className="text-lg uppercase font-semibold">Color</p>
                <div className="flex space-x-3">
                    <input type="text"
                        className="h-7 w-7 bg-primary focus:ring-2 border-none focus:ring-primary focus:border-none rounded focus:ring-offset-2 cursor-pointer"
                        readOnly />
                    <input type="text"
                        className="h-7 w-7 bg-blue-600 focus:ring-2 border-none focus:ring-blue-600 focus:border-none rounded focus:ring-offset-2 cursor-pointer"
                        readOnly />
                    <input type="text"
                        className="h-7 w-7 bg-black focus:ring-2 border-none focus:ring-black focus:border-none rounded focus:ring-offset-2 cursor-pointer"
                        readOnly />
                </div>
            </div>
        </div>
    );
};

export default Filter;