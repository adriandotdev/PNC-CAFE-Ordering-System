import React, {useState, useEffect} from 'react'

/**
 * This is the Admin Page for Customers */
function CustomersPage() {

    const [pncUsers, setPncUsers] = useState([]) // state that holds the list of users in this app.

    // runs for the first render of this page.
    useEffect(() => {

        document.title = 'PNC Cafe | Users'
        
        fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(data => {
            setPncUsers(JSON.parse(data))
        })
    }, [])

    return (
        <div className="row-start-4 col-start-1 col-end-5 px-10">
            <div className="" >
                <h1 className="text-pnc font-bold text-2xl lg:text-4xl py-2">Users</h1>
            </div>

            <div className="lg:row-start-2 col-start-1 col-end-5 lg:col-start-2 lg:col-end-5 overflow-y-auto border table-height">
                
                <table className="table w-full relative table-zebra">
                    <thead>
                            
                            {/* <th className="hidden"></th> */}
                            <th className="table-headers">ID Number</th>
                            <th className="table-headers">Given Name</th>
                            <th className="table-headers">Middle Name</th>
                            <th className="table-headers">Last Name</th>
                            <th className="table-headers">Email</th>
                            <th className="table-headers">Sex</th>
                            <th className="table-headers">Contact Number</th>
                    </thead>

                    {/* Actual Data */}
                    <tbody className="overflow-y-auto">
                        {
                            pncUsers.map(user => {

                                const idNumber = user['id_number']
                                const givenName = user['given_name']
                                const middleName = user['middle_name']
                                const lastName = user['last_name']
                                const email = user['email']
                                const sex = user['sex']
                                const mobileNumber = user['mobile_number']

                                return (
                                    <tr key={user['id_number']} className="hover">
                                        <th className="text-pnc font-bold">{ idNumber }</th>
                                        <td>{ givenName }</td>
                                        <td>{ middleName }</td>
                                        <td>{ lastName }</td>
                                        <td className="font-medium text-blue-700">{ email }</td>
                                        <td className={`${sex === 'Male' ? "text-blue-400" : "text-red-400"} font-medium`}>{ sex }</td>
                                        <td className="font-bold font-mono">{ mobileNumber }</td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>

                    <tfoot className="relative">
                        <th className="table-headers sticky bottom-0">ID Number</th>
                        <th className="table-headers sticky bottom-0">Given Name</th>
                        <th className="table-headers sticky bottom-0">Middle Name</th>
                        <th className="table-headers sticky bottom-0">Last Name</th>
                        <th className="table-headers sticky bottom-0">Email</th>
                        <th className="table-headers sticky bottom-0">Sex</th>
                        <th className="table-headers sticky bottom-0">Contact Number</th>
                    </tfoot>
                </table>
            </div>
        </div>
        
    )
}

export default CustomersPage
