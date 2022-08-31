import { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export default function EntryEditor() {
    const [text, setText] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

    // return (
    //     <div className="bg-neutral-100 border border-neutral-200 rounded lg:max-w-3xl mx-auto my-8 p-4 min-h-[90%] shadow text-neutral-700 leading-relaxed focus:outline-primary-400 focus:outline-2 focus:outline" contentEditable suppressContentEditableWarning>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //     </div>
    // )

    return (
        <div className="lg:max-w-3xl mx-auto min-h-[90%] relative my-8">
            <textarea
                className="w-full absolute top-0 bottom-0 bg-neutral-100 border resize-none border-neutral-200 rounded-0 p-4 shadow text-neutral-700 leading-relaxed border-none focus:ring-2 focus:ring-primary-400"
                // value={text}
                // onChange={event => setText(event.target.value)}
            />
        </div>
    )
}