import { Button } from "@mui/material";

interface IPageHeader {
    text: string,
    navigate?: VoidFunction,
}

export const PageHeader = (props: IPageHeader) => {
    const { text, navigate } = props;
    return ( 
        <div className="flex text-slate-700 text-2xl mb-4">
            <Button
                variant="text"
                onClick={navigate}
                className='text-slate-700 text-2xl'
                startIcon={<div>Back</div>}
            />
            <span>{text}</span>
        </div>
     );
}