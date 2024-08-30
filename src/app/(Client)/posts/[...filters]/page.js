import React from 'react'

const PostFilters = ({ params }) => {
    console.log(params);

    return (
        <div>
            <ol>
                {params.filters.map(x => (
                    <li key={x}>
                        <h3>
                            {x}
                        </h3>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default PostFilters