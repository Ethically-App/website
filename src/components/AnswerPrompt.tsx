import React from "react";
import "@/src/styles/answer.css";

export interface AnswerPromptProps {
    number: number;
    children: React.ReactNode;
    delay?: string;
}

const AnswerPrompt = React.forwardRef<HTMLDivElement, AnswerPromptProps>(
    ({ children, number, delay = "0s", ...props }, ref) => {
        const selection: {
            [key: number]: string
        } = {
            1: 'A',
            2: 'B',
            3: 'C'
        }
    
        return (
            <div {...props} ref={ref} className={'answer w-full p-4 pr-8 rounded-full bg-amber-300 flex items-center flex-row font-medium text-sm sm:text-base lg:font-semibold lg:text-xl shadow cursor-pointer hover:-mt-0.5 hover:mb-0.5 hover:bg-amber-200 hover:shadow-lg transition-all duration-300 animate fadeInUp'} style={{animationDelay: delay}}>
                <div className="bg-white p-4 px-5 mr-6 text-lg lg:text-xl font-bold rounded-full shadow">{selection[number]}.</div>
                {children}
            </div>
        )
    }
)

export default AnswerPrompt;
