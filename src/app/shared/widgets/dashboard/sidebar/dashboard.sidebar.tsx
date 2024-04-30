'use client';
import { ICONS } from '@/app/shared/utils/icons';
import { useUser } from '@clerk/nextjs';

import React from 'react'
import DashboardItems from './dashboard.items';
import UserPlan from './userPlan';

function DashboardSidebar() {
  const {user} = useUser();
  return (
    <>
    <div className='flex items-center gap-3 p-5'>
      <span className='text-2xl rounded-full p-2 bg-slate-100'>{ICONS.home}</span>
      <span className='text-xl font-medium capitalize'>{user?.username} Newsletter</span>
    </div>
      <DashboardItems />
      <UserPlan />
      <DashboardItems bottomContent={true} />
    </>
  )
}

export default DashboardSidebar