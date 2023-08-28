

const OpeningModal = ({ isvisible, onClose, children }) => {
    if (!isvisible) return null;

    const handleClose = (e) => {
        if (e.target.id === "theClose") onClose();

    }

    return (
        <div onClick={handleClose} id="theClose" className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-[600px] flex flex-col">
                <button onClick={() => onClose()} type="button" className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 place-self-end">❌</button>
                <div className="bg-white p-2 rounded-xl">{children}</div>
            </div>
        </div>
    );
};

export default OpeningModal;