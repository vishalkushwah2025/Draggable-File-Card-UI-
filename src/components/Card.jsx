import React from 'react'
import { FaFileMedical } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

const Card = ({data, reference}) => {
  return (
    <div>
        <motion.div 
            drag 
            dragConstraints={reference}
            whileDrag={{ scale: 1.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className='relative flex-shrink-0 w-60 h-80 bg-zinc-900/90 rounded-[30px] text-white py-10 px-8 overflow-hidden'
        >
            <FaFileMedical />
            <p className='text-xl leading-tight mt-5 font-semibold'>{data.desc}</p>

            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between px-8 py-3 m-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-6 h-6 bg-zinc-600 flex items-center rounded-full justify-center'>
                    {data.close ? <MdClose /> : <LuDownload size=".8em" color="#fff" />}
                    </span>
                </div>

                {data.tag?.isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, ease: "easeOut" }} 
                        className={`tag w-full py-5 ${data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"} flex items-center justify-center`}
                    >
                        <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
                    </motion.div>
                )}
            </div>
        </motion.div>
    </div>
  );
}

export default Card;
