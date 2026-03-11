import React from "react";

export const BulletPoint: React.FC<{children: React.ReactNode }> = ({ children }) => {
    return (
        <li className="text-gray-600">
            {children}
        </li>
    )
}