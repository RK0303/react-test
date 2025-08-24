import React from 'react'

import {CssBaseline} from '@mui/material'
import Topbar from './Topbar/Topbar'
import Sidebar from '../sidebar/Sidebar';
import TopGrid from '../mainGrid/TopGrid';
import BasicPie from '../../components/chart/PieChart';
import BottomGrid from '../mainGrid/BottomGrid';
import BarChartt from '../../components/chart/BarChart';



const DashboardApp = () => {
  return (
    
    <>
    <CssBaseline/>
    <div className='app'>
        <Sidebar/>
        <main className='content'>
            <Topbar/>
            <TopGrid/>
            <BottomGrid/>
        </main>
    </div>
    </>

  )
}

export default DashboardApp