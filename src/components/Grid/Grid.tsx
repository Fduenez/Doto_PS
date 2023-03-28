import React from "react";

type Props = {
    children: React.ReactNode
}

export const Grid = ({children}: Props) => {
    return (
        <div className="grid grid-cols-8 gap-3">
            {children}
        </div>
    );
}
