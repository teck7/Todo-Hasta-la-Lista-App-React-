import React from 'react'

export default function Field({
    value, //value entered in by user
    label,
    onChange
}) {
    return (
        <div className="desc-container">
            <label className="desc-label text-center col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                { label }
                {' '}
                <input className="desc-input"
                    type="text"
                    value={ value }
                    onChange={
                        (event) => {
                            // event.target woll be out <input> above
                            // we want its current value
                            const value = event.target.value
                            // Call our onChange with the new string value
                            onChange(value)
                            }
                        }
                 />
            </label>
        </div>
    )
}
