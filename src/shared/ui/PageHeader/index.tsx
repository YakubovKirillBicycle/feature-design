export const PageHeader = ({ text }: {text: string}) => {
    return ( 
        <div className="flex justify-center text-slate-700 text-2xl mb-4">
            <span>{text}</span>
        </div>
     );
}