'use client'
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react'
import React from 'react'

const BreadCrumbs = () => {
  return (
    <Breadcrumbs>
        <BreadcrumbItem color='primary'>Home</BreadcrumbItem>
        <BreadcrumbItem color='primary'>Beauty Product</BreadcrumbItem>
        <BreadcrumbItem>The Ordinary Niacinamide 10% + Zinc 1% - 30ml</BreadcrumbItem>
    </Breadcrumbs>
  )
}

export default BreadCrumbs