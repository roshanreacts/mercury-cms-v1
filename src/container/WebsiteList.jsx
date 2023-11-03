import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import React from 'react'
import store from '~/store'

const WebsiteList = ({ setCurrentWebsite, setWebsiteDropdown}) => {
    
    return (
        <div className='absolute bg-white text-black w-full overflow-y-scroll z-10 items-center justify-center text-base rounded-md mt-1 p-2'>
            {
                
                store.websites?.map((item, index) =>
                    <Link href={`/admin/${item.id}`} key={index}>
                        <p className='p-1 hover:bg-blue-100 rounded-md' onClick={() => {
                            setCurrentWebsite(item.id)
                            setWebsiteDropdown(false)
                        }}>
                            {item.name}
                        </p>
                    </Link>

                )
            }
            <Link href='/admin/addwebsite' onClick={() => setWebsiteDropdown(false)} className='m-1 p-1 px-6 border-2 border-blue-700 w-full text-blue-600 rounded-md text-sm'>
                + Create Website
            </Link>

        </div>
    )
}

export default observer(WebsiteList)
