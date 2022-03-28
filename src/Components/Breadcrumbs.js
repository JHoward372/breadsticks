import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ crumbs }) => {
    // Don't show a single crumb.
    if (crumbs.length <= 1) {
        return null;
    }

    return (
        <div className="mb-4 bg-gray-300">
            {/* Link back to previous breadcrumb steps. */}
            {crumbs.map(({ name, path }, key) =>
                key + 1 === crumbs.length ? (
                    <span key = {key} className="bold">
                        {name}
                    </span>
                ):(
                    <Link key = {key} className="underline text-blue-500 mr-4" to={path}>
                        {name}
                    </Link>
                    )
                )}
        </div>
    );
}

export default Breadcrumbs;