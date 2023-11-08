import Link from "next/link";

const FooterDataSection = ({ sectionData }) => {
    return (
        <div className="mb-4 ml-8 flex flex-col ">
            <h4 className="text-secondary text-[18px] lg:text-[10px] xl:text-[16px] font-semibold mb-8 max-h-4">
                {sectionData.head}
            </h4>
            <ul className="list-none list-inside flex-1">
                {sectionData.titles.map((item, titleIndex) => (
                    <li key={titleIndex} className="text-light my-2 font-[700] text-[13px] lg:text-[10px] xl:text-[13px] leading-[20px]">
                        <Link href={`/services/${item.link}`} className="hover:text-secondary">
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterDataSection;