import React, { useRef } from 'react';
import Card from './Card';

const Forground = () => {
    const ref = useRef(null);
    const data = [
        {
            desc: "Manage files easily with a smooth and simple drag system.",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" }, // BLUE
        },
        {
            desc: "Securely upload, download, and organize documents in one place.",
            filesize: ".5mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }, // GREEN
        },
        {
            desc: "Fast, reliable cloud storage with a beautiful, user-friendly design",
            filesize: ".9mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" }, // BLUE
        },
        {
            desc: "Access your files anytime, anywhere with seamless synchronization.",
            filesize: ".2mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" }, // GREEN
        },
    ];
    

    return (
        <div ref={ref} className='fixed top-0 left-0 w-full h-full z-[3] flex gap-10 flex-wrap p-5'>
            {data.map((item, index) => (
                <Card key={index} data={item} reference={ref} />
            ))}
        </div>
    );
};

export default Forground;
