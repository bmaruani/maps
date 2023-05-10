import React from 'react'
import clsx from "clsx";
import {Marker} from "@/app/page";

type PositionButtonProps = {
    marker: Marker,
    onClick:(marker:Marker) => void,
    className?: string,
}

export const PositionButton: React.FC<PositionButtonProps> = ({marker, onClick, className}) => {
    return (
        <div className={clsx("inline-flex group/item absolute", className)} style={{
            left:marker.left,
            top:marker.top
        }}>
            <button
                type="button"
                className=" w-2 h-2 leading-2 text-sm flex items-center justify-center rounded-full bg-indigo-600 p-3 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => onClick(marker)}
            >
                {marker.index}
            </button>
            <span
                className="hidden group-hover/item:inline-flex ml-1  items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
        {marker.title}
      </span>
        </div>
    )
}