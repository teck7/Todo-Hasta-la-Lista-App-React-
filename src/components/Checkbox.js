import React from 'react'

export default function Checkbox({
    //Checked / unchecked
    checked,
    label,
    onChange
}) {
    return (
        <div className="complete-container text-center">
            <label className="label-text col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                { label }
                {' '}
                <input className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2" type="checkbox" checked={ checked } onChange={ onChange } />
            </label>
        </div>
    )
}
