"use client";

type Modalprops = {
    open: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export default function Modal({ open, onClose, children}: Modalprops){

    if(!open) return null;

    return ( 

        <div className="w-90 h-60 border-2 border-amber-600 absolute top-50 right-50 rounded bg-white">
            <div className="bg-white rounded shadow-xl w-80 relative">

                <button
                    onClick={onClose}
                    className="absolute right-3 top-3 text-gray-600 font-bold cursor-pointer"
                >  X  </button>

                {children}
            </div>
        </div>
    )
}