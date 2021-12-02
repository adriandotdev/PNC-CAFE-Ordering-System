import React from 'react'

function CheckedOutItem({quantity, menu, price}) {
    return (
        <div className="flex flex-wrap justify-between">
            <section className="flex flex-wrap gap-3">
                <p className="font-medium">x{quantity}</p>
                <h1 className="font-bold text-pnc">{menu}</h1>
            </section>
            
            <section>
                <p className="font-mono font-extrabold">{new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'PHP'}).format(price)}</p>
            </section>
        </div>
    )
}

export default CheckedOutItem
