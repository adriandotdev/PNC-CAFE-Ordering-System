import React from 'react'
import {customer} from '../test/customer'

function CustomersPage() {
    return (
        <div className="row-start-3 row-end-3 col-start-1 col-end-5 lg:col-start-2 lg:row-start-1 lg:row-end-1">
            <div >
                <h1 className="p-3 pl-1 font-medium md:text-lg lg:text-2xl">Customers</h1>
            </div>

            <div className="lg:row-start-2 col-start-1 col-end-5 lg:col-start-2 lg:col-end-5 overflow-y-auto max-h-96 border">
                
                <table className="table w-full relative ">
                    <thead className="relative">
                            
                            <th className="hidden"></th>
                            <th className="table-headers">ID Number</th>
                            <th className="table-headers">Given Name</th>
                            <th className="table-headers">Middle Name</th>
                            <th className="table-headers">Last Name</th>
                            <th className="table-headers">Email</th>
                        
                        
                    </thead>

                    {/* Actual Data */}
                    <tbody className="overflow-y-auto">
                        {
                            customer.map(cust => {
                                return (
                                    <tr className="hover">
                                        <th className="hidden"></th>
                                        <th>{cust.idNumber}</th>
                                        <td>{cust.givenName}</td>
                                        <td>Lauriano</td>
                                        <td>Marcelo</td>
                                        <td>email@gmail.com</td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}

export default CustomersPage
