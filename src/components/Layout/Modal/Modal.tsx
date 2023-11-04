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
                <div className='flex flex-row justify-between lg:items-start items-center w-100 lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]'>
                    <h4 className='text-white'>{title}</h4>
                    <button className='text-white font-semibold text-2xl x-btn' onClick={closeEvent}>X</button>                   
                </div>
                <div className='flex flex-row justify-between'>
                    <video autoPlay={true} muted={true} loop={true} playsInline={true} className={"2xl:max-w-[240x] xl:max-w-[200px] lg:max-w-[160px] max-w-[45vw] mx-auto mt-10 mbb-l " + customcss}>
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className='flex flex-col rotate-90 h-[0px] mt-[200px] -mx-[50px]'>
                        <div className='flex flex-row items-center mb-[8.5px]'>
                            <progress className='rotate-180 h-[5px] lg:w-[150px] w-[100px]' value={100} max="100"></progress>
                            <p className='rotate-180 text-white-30 text-sm ml-3'>Boost</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <progress className='rotate-180 h-[5px] lg:w-[150px] w-[100px]' value={100} max="100"></progress>
                            <p className='rotate-180 text-white-30 text-sm ml-3'>Shares</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Modal;