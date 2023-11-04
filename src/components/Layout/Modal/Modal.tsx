'use client';

const Modal = ({
    id,
    title,
    closeEvent,
    video,
    customcss
}: any) => {
    return (        
        <div className='modal-overlay' id={id+"overlay"}>
            <div className="modal" id={id}>
                <div className='flex flex-row justify-between lg:items-start items-center w-100 px-[50px] pt-[35px]'>
                    <h2 className='text-white'>{title}</h2>
                    <button className='text-white font-semibold text-2xl x-btn' onClick={closeEvent}>X</button>                   
                </div>
                <div className='flex flex-row justify-between'>
                    <video autoPlay={true} muted={true} loop={true} playsInline={true} className={"2xl:max-w-[340x] xl:max-w-[300px] lg:max-w-[260px] max-w-[220px] mx-auto mt-10 mbb-l " + customcss}>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>

    );
};

export default Modal;