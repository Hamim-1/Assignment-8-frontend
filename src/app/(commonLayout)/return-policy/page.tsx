import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

const returnPolicyPage = () => {
    return (
        <div className="custom-container my-10">

            <div className="flex text-primary items-center space-x-2 mb-5">
                <Link
                    href="/"
                    className="text-primary hover:text-primary/80 transition-colors"
                >
                    <Home className="h-4 w-4" />
                </Link>
                <ChevronRight className="h-3 w-3 text-muted-foreground" />
                <p className="cursor-pointer text-black">Return Policy</p>
            </div>

            <div className="text-[17px] flex flex-col space-y-2 lg:px-12">
                <p className="text-xl sm:text-3xl mx-auto font-semibold py-3">Return Policy</p>
                <p className="text-[#464545]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus aliquam
                    architecto blanditiis commodi cumque deleniti eaque earum eius esse, eum exercitationem iusto, modi
                    molestiae mollitia nisi quam quasi quia quis quod rem reprehenderit sed sit totam veritatis. Ab
                    atque dicta earum excepturi facere fuga illum incidunt, iste labore magnam neque repellat vero
                    voluptates. At consectetur corporis deleniti error ipsum.</p>

                <p className="text-[#464545]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus aliquam
                    architecto blanditiis commodi cumque deleniti eaque earum eius esse, eum exercitationem iusto, modi
                    molestiae mollitia nisi quam quasi quia quis quod rem reprehenderit sed sit totam veritatis.</p>

                <p className="font-semibold pt-5">Prohibitions</p>

                <p className="text-[#464545]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ea illo
                    minus perspiciatis quia ratione. Eum harum nobis possimus quo voluptate. A accusamus alias
                    architecto blanditiis cupiditate debitis deserunt dolorum earum eligendi error esse eum fuga fugiat
                    ipsa magni maxime neque nesciunt, nihil nostrum, possimus quaerat quas quibusdam quisquam quos
                    repellat tenetur ut! Deleniti id, inventore ipsa modi nesciunt officiis repellendus! Harum labore
                    officiis ratione totam velit? Consequatur, dolor libero.</p>

                <p className="font-semibold pt-5">Terms of Sale</p>
                <p className="text-[#464545]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam ea illo
                    minus perspiciatis quia ratione. Eum harum nobis possimus quo voluptate. A accusamus alias
                    architecto blanditiis cupiditate debitis deserunt dolorum earum eligendi error esse eum fuga fugiat
                    ipsa magni maxime neque nesciunt, nihil nostrum, possimus quaerat quas quibusdam quisquam quos
                    repellat tenetur ut! Deleniti id, inventore ipsa modi nesciunt officiis repellendus! Harum labore
                    officiis ratione totam velit? Consequatur, dolor libero.</p>

                <p className="font-semibold pt-5">Disclaimer of Liability</p>

                <p className="text-[#464545]">A accusamus alias architecto blanditiis cupiditate debitis deserunt dolorum
                    earum eligendi error esse eum fuga fugiat ipsa magni maxime neque nesciunt, nihil nostrum, possimus
                    quaerat quas quibusdam quisquam quos repellat tenetur ut! Deleniti id, inventore ipsa modi nesciunt
                    officiis repellendus! Harum labore officiis ratione totam velit? Consequatur, dolor libero.</p>

                <p className="font-semibold pt-5">Complaints</p>

                <p className="text-[#464545]">Eum harum nobis possimus quo voluptate. A accusamus alias architecto
                    blanditiis cupiditate debitis deserunt dolorum earum eligendi error esse eum fuga fugiat ipsa magni
                    maxime neque nesciunt.</p>

                <p className="font-semibold pt-5">Entire Agreement</p>

                <p className="text-[#464545]">Harum nobis possimus quo voluptate. A accusamus alias architecto blanditiis
                    cupiditate debitis deserunt dolorum earum eligendi error esse eum fuga fugiat.</p>
            </div>
        </div>
    );
};

export default returnPolicyPage;