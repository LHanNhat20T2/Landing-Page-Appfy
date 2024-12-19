import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

type Props = {
    name: string;
    image: string;
};

const ReviewCard = ({ name, image }: Props) => {
    return (
        <div className="w-full lg:w-[90%] mx-auto relative p-6 bg-white shadow-lg rounded-lg">
            <div>
                <FaQuoteLeft className="w-14 h-14 opacity-10 absolute top-8" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                {/* Text content */}
                <div className="col-span-3 order-2 lg:order-1">
                    <p className="mt-8 text-sm sm:text-base md:text-lg font-medium leading-[1.5rem] sm:leading-[1.8rem] md:leading-[2.5rem] ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illo odio ut sequi delectus quod dolor, dolorem velit
                        numquam cumque expedita illum, quasi doloremque
                        excepturi sit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ut blanditiis assumenda tempore
                        eveniet officia, nobis voluptatibus omnis eos quo,
                        magnam id deleniti!
                    </p>
                    <div className="flex items-center mt-6">
                        <FaStar className="text-yellow-600 w-6 h-6" />
                        <FaStar className="text-yellow-600 w-6 h-6" />
                        <FaStar className="text-yellow-600 w-6 h-6" />
                        <FaStar className="text-yellow-600 w-6 h-6" />
                        <FaStar className="text-yellow-600 w-6 h-6" />
                    </div>
                    <h1 className="text-xl font-semibold mt-8">{name}</h1>
                    <p className="mt-2 text-lg text-gray-600 font-medium mb-6">
                        Fullstack Web Developer
                    </p>
                </div>
                {/* Image */}
                <div className="col-span-2 mx-auto order-1">
                    <Image
                        src={image}
                        alt={name}
                        width={250}
                        height={120}
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
export default ReviewCard;
