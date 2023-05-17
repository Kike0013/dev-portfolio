"use client";

const Details = ({ data }) => {

    const { keyword, value } = data;

    return (
        <div className="text-xl">
            <p className="indent-12">
                <span className="text-[#9CDCFE]">{keyword}</span>
                <span className="text-[#D4D4D4]">=</span>
                <span className="text-[#FFC612]">{`{`}</span>
            </p>
            <p className="indent-20">
                <span className="text-[#CE9178]">"{value}"</span>
            </p>
            <p className="indent-12">
                <span className="text-[#FFC612]">{`}`}</span>
            </p>
        </div>
    )
}

export default Details