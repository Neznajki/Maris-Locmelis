import React from "react";

export const Paragraph: React.FC<{children: React.ReactNode }> = ({ children }) => {
    return (
        <p className="text-gray-600">
            {children}
        </p>
    )
}