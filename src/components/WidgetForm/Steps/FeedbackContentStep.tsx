import { ArrowLeft, Camera } from "phosphor-react"
import { FormEvent, useState } from "react"
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton"

interface IFeedbackContentStep {
    feedbackType: FeedbackType
    onFeedbackRestartRequest: () => void
    onFeedbackSent: () => void
}

export function FeedbackContentStep(props: IFeedbackContentStep){
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('')
    const feedbackTypeInfo = feedbackTypes[props.feedbackType]

    function handleSumbitFeedback(event: FormEvent){
        event.preventDefault()
        console.log({
            screenshot,
            comment
        })

        props.onFeedbackSent()
    }

    return(
        <>
            <header>
                <button onClick={props.onFeedbackRestartRequest} type="button" className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100 transition-colors">
                    <ArrowLeft  weight="bold" className="h-4 w-4"/>
                </button>

                <span className="text-lg leading-6 flex items-center gap-2">
                    <img className="w-6 h-6" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt}/>
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton />
            </header>
            <form className="my-4 w-full" onSubmit={handleSumbitFeedback}>
                <textarea 
                    className="min-w-[304px] w-full min-h-[112px] text-sm text-zinc-100 placeholder-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin" 
                    placeholder="Conte com detalhes o que está acontecendo..."
                    onChange={event => setComment(event.target.value)}
                />
                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton screenshot={screenshot} onScreenshotTook={setScreenshot}/>
                    <button
                        type="submit"
                        disabled={comment.length===0 || screenshot===null}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        Enviar Feedback
                    </button>
                </footer>

            </form>
        </>
    )
}