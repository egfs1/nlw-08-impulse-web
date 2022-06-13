import { ChatTeardropDots } from "phosphor-react"
import { Popover } from '@headlessui/react'
import { WidgetForm } from "./WidgetForm"

export function Widget(){
    return (
            <div className="flex justify-center items-center min-h-screen min-w-screen">
                <p className="font-mono text-md sm:text-lg md:text-2xl animate-type overflow-x-hidden group-hover:animate-type-reverse whitespace-nowrap" style={{willChange: 'transform'}}>{"<p> Back-end disabled :( </p>"}</p>
                <span className="box-border inline-block w-1.5 md:w-2 h-7 md:h-9 ml-2 bg-white animate-pulse"></span>
                
                <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
                    <Popover.Panel>
                        <WidgetForm />
                    </Popover.Panel>

                    <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                        <ChatTeardropDots className="w-6 h-6"/>

                        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                            <span className="pl-2">Feedback</span>
                        </span>
                    </Popover.Button>
                </Popover>
            </div>
    )
}