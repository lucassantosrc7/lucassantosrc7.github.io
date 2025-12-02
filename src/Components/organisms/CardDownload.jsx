import React from 'react'

const DownloadButton = ({ link, target = '_blank' }) => {
    return (
        <a
            href={link}
            target={target}
            rel="noopener noreferrer"
            className="bg-pink text-white font-bold w-[120px] py-2 px-4 rounded-lg text-center hover:bg-blue transition cursor-pointer"
        >
            Clique Aqui
        </a>
    )
}


const CardDownload = ({
    text,
    width = 'w-[300px] sm:w-[220px] lg:w-[260px] xl:w-[350px]',
    height = 'h-[140px]',
    target = '_blank',
    file // <<=== arquivo para download
}) => {
    return (
        <div className={`${width} ${height} flex flex-col justify-between items-center bg-light-gray rounded-lg p-4`}>
            <span className="font-bold text-dark-gray text-center text-[14px] sm:text-[14px] lg:text-[14px] xl:text-[18px]">
                {text}
            </span>

            {/* Botão de download */}
            <DownloadButton link={file} target={target} />
        </div>
    )
}

export default CardDownload
