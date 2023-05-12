"use client";

import mapSumita from "@/assets/sumita.png"
import mapFort from "@/assets/fort.png"
import Image, {StaticImageData} from "next/image";
import {PositionButton} from "@/app/components/PositionButton";
import clsx from "clsx";
import {useState} from "react";

const navigation = [
    {name: 'Ile de Sumita', href: '#', current: true},
]

export interface Marker {
    index: string,
    title: string,
    left: number,
    top: number,
    description?:string,
    image?:StaticImageData
}

export type Size = {w:number, h:number}
const mapSize:Size = {w:980, h:915}

const markers:Marker[] = [
    {index: "1", title: "Ruine Fort Mazar", left: 235, top: 515, description:"Il a été ravagé par une attaque de cyclope", image:mapFort},
    {index: "2", title: "Ossements de Bakandi", left: 190, top: 510, description:"Il faut qu'on les enterre dans un lieu sanctifié"},
    {index: "3", title: "Maussolée de Baltus Trune", left: 120, top: 555, description:"Attention à la curse si on essaye de forcer l'entrée !!!"},
    {index: "4", title: "Ancien camp de bucheron", left: 220, top: 745, description:"Il est occupé par des garous qui contrôlent globalement toute la forêt. On a passé un pacte de non aggression avec eux."},
    {index: "5", title: "Temple de Delwen", left: 85, top: 810},
    {index: "6", title: "Grotte aux harpies", left: 135, top: 525},
    {index: "7", title: "Poulpe géant", left: 350, top: 600, description:"Il y un poulpe géant dans la baie. On veut l'apprivoiser pour en faire le gardien de la baie."}
]

export default function Page() {
    const [selectedMarker, setSelectedMarker] = useState<Marker>()

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="min-h-full min-w-full max-w-7xl">
                <header className="bg-indigo-600 pb-24 px-12">
                    <div className="hidden border-t border-white border-opacity-20 py-5 lg:block">
                        <div className="grid grid-cols-3 items-center gap-8">
                            <div className="col-span-2">
                                <nav className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={clsx(
                                                item.current ? 'text-white' : 'text-indigo-100',
                                                'rounded-md bg-white bg-opacity-0 px-3 py-2 text-sm font-medium hover:bg-opacity-10'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="-mt-24 pb-8">
                    <div className="px-1 md:px-4 lg:px-12">
                        {/* Main 3 column grid */}
                        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                            {/* Left column */}
                            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                                <section aria-labelledby="section-1-title">
                                    <div className="overflow-hidden rounded-lg bg-white shadow mt-1">
                                        <div className="md:p-3 lg:p-6 flex justify-center">
                                            <div className="relative">
                                                <Image src={mapSumita} alt={""} width={980} height={915}/>
                                                {
                                                    markers.map((marker) => <PositionButton key={marker.index} marker={marker} mapSize={mapSize} onClick={setSelectedMarker}/>)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            {/* Right column */}
                            <div className="grid grid-cols-1 gap-4">
                                <section aria-labelledby="section-2-title">
                                    <div className="overflow-hidden rounded-lg bg-white shadow">
                                        <div className="p-3">
                                            {selectedMarker && <>
                                                <p className="text-indigo-400 text-lg font-bold mb-2">{selectedMarker.title}</p>
                                                {selectedMarker.image && <Image src={selectedMarker.image} alt={""} className="mb-2"/>}
                                                {selectedMarker.description && <p>{selectedMarker.description}</p>}
                                            </>}

                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
