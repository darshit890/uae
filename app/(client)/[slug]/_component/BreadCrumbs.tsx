'use client'
import { SanityProduct } from '@/lib/inventory'
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import React from 'react'

interface Props {
  product: SanityProduct
}

const BreadCrumbs = ({ product }: Props) => {
  return (
    <Breadcrumbs>
        <BreadcrumbItem color='primary'>Home</BreadcrumbItem>
        <BreadcrumbItem color='primary'>{product.categories}</BreadcrumbItem>
        <BreadcrumbItem className='line-clamp-1'>{product.name}</BreadcrumbItem>
    </Breadcrumbs>
  )
}

export default BreadCrumbs