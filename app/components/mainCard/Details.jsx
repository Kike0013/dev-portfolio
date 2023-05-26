"use client";

const Details = ({ data }) => {

    const { keyword, value } = data;

    return (
        <div className="
        flex
        text-xs

        sm:text-sm

        md:text-lg

        lg:block
        ">
            <p>
                <span className="text-[#9CDCFE]">{keyword}</span>
                <span className="text-[#D4D4D4]">=</span>
                <span className="text-[#1B9FDB]">{`{`}</span>
            </p>
            <p className="lg:indent-12 xl:indent-8">
                <span className="text-[#CE9178]">"{value}"</span>
            </p>
            <p>
                <span className="text-[#1B9FDB]">{`}`}</span>
            </p>
        </div>
    )
}

export default Details