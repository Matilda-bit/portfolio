import React from "react";
import './Catalog.css'

interface CatalogProps {
    children: React.ReactNode;
}

const Catalog: React.FC<CatalogProps> = ({ children }) => {
    return (
        <div className="catalog">
            <div className="row">
                {children}
            </div>
        </div>
    )
}

export default Catalog;