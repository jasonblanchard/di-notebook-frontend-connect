import { button } from 'styles/classnames';
import PlaceholderText from './PlaceholderText';
import useBeginNewEntry from 'queries/useBeginNewEntry';

export default function EntryZero() {
    const beginNewEntry = useBeginNewEntry();

    return (
        <div className="lg:max-w-3xl mx-auto min-h-[90%]  my-8 bg-neutral-100 border resize-none border-neutral-200 rounded-0 p-4 shadow text-neutral-700 relative">
            <button className={`${button.primary} absolute z-10 mx-auto`} onClick={() => beginNewEntry.mutate({ text: '' })}>Start writing</button>
            <div className="w-full h-full blur-sm">
                <div className="mt-2">
                    <PlaceholderText />
                    <PlaceholderText />
                    <PlaceholderText />
                    <PlaceholderText />
                    <PlaceholderText />
                </div>
            </div>
        </div>
    )
}