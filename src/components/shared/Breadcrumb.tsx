import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";


const Breadcrumb = ({ page }: { page: string }) => {
    return (
        <div className="flex text-primary items-center space-x-2 mb-5">
            <Link href="/">
                <Home className="cursor-pointer text-sm" />
            </Link>
            <ChevronRight className="cursor-pointer text-xs mt-1" />
            <p className="cursor-pointer text-black" id="my-account-page-routing-page-name">{page}</p>
        </div>
    );
};

export default Breadcrumb;