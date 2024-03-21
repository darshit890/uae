'use client'
import { Card, CardBody, CardFooter, Divider, Progress } from "@nextui-org/react"
import { User, Link } from "@nextui-org/react"
import { FaStar } from "react-icons/fa"

export const CommenSection = () => {
  return (
    <div className='my-20 px-10'>
        <h1 className='font-medium text-3xl'><span className='font-semibold text-primary'>| </span>Product Ratings & Reviews</h1>
        <div className='flex flex-row'>
            <div className='flex flex-col pl-10 gap-y-5'>
                <p className='text-2xl font-medium mt-10 '>Overall Rating</p>
                <div className="flex flex-row items-center space-x-1 gap-x-1">
                <p className="text-xl font-medium">4.3</p>
                    {[...Array(5)].map(star => {
                        return <FaStar className="text-yellow-400" key={star} />
                    })}
                </div>
                <div className="flex flex-col space-y-2 w-[400px]">
                    <div className="flex flex-row items-center space-x-2">
                    <p className="text-lg">5</p>
                    <FaStar className="text-yellow-400" />
                    <Progress size="sm" color="success" aria-label="Loading..." value={80} />
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                    <p className="text-lg">4</p>
                    <FaStar className="text-yellow-400" />
                    <Progress size="sm" color="success" aria-label="Loading..." value={60} />
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                    <p className="text-lg">3</p>
                    <FaStar className="text-yellow-400" />
                    <Progress size="sm" color="success" aria-label="Loading..." value={0} />
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                    <p className="text-lg">2</p>
                    <FaStar className="text-yellow-400" />
                    <Progress size="sm" color="success" aria-label="Loading..." value={0} />
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                    <p className="text-lg">1</p>
                    <FaStar className="text-yellow-400" />
                    <Progress size="sm" color="success" aria-label="Loading..." value={0} />
                    </div>
                </div>
            </div>
            </div>
        </div>
  )
}
