
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Mask, List, SwipeAction, Modal, Grid, ConfigProvider, Image, Button } from 'zarm';
import zhCN from 'zarm/lib/config-provider/locale/zh_CN';
import 'zarm/dist/zarm.css';
import './App.css'
import { NavBar } from 'zarm';
import { ArrowLeft } from '@zarm-design/icons';
import ListItem from 'zarm/lib/list/ListItem';
// import { ScrollView, View, Text } from 'react-native';
import { Link } from 'react-router-dom';

function ChooseType() {
  return (
    <div className="ChooseType">
      <ConfigProvider locale={zhCN}>
        <div className='phone'>
          <NavBar
            style={{ "--title-color": 'black', "--title-font-weight": '700', '--title-font-size': '30px', '--height': '90px' }}
            left={<ArrowLeft style={{ color: 'black' }} theme="primary" onClick={() => window.history.back()} />}
            title="面试类型"
          />
          <div className='float_img'>
            <svg t="1700461219517" class="icon" viewBox="0 0 1223 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2496" width="100" height="100"><path d="M725.491512 956.515902l-0.499512-0.84917c-0.674341-1.173854-1.848195-2.67239-2.872195-3.996098l-0.349659-0.574439c-0.524488-0.749268-1.148878-1.548488-1.548487-2.297756l-2.572488-3.721366-0.299708-0.349658-126.001951-193.960586a104.248195 104.248195 0 0 1-14.985366-76.949853 101.750634 101.750634 0 0 1 41.884098-65.361171 96.705561 96.705561 0 0 1 97.90439-7.118049v-324.183415C716.00078 220.78439 758.484293 174.829268 810.683317 174.829268c52.124098 0 94.682537 45.955122 94.682537 102.4v104.148293a75.925854 75.925854 0 0 1 23.77678-3.87122c24.675902 0 48.003122 11.88839 64.437073 32.418342a80.046829 80.046829 0 0 1 43.18283-13.386927 78.673171 78.673171 0 0 1 48.702439 17.208195c10.86439 8.491707 19.980488 19.480976 26.599024 32.243512 7.692488-2.422634 15.684683-3.746341 23.701854-3.746341 48.577561 0 88.064 45.955122 88.064 102.4v272.433951c0 60.266146-26.648976 126.876098-67.883708 169.784195-22.977561 23.901659-47.703415 37.138732-69.85678 37.138732H816.902244c-50.450732 0-73.10361-37.413463-91.410732-67.484098z m366.067512 17.133269c8.167024 0 28.472195-13.636683 48.377756-43.832195 21.354146-32.593171 33.592195-71.605073 33.592196-106.89561V542.695024c0-22.902634-14.136195-42.78322-30.245464-42.783219a21.479024 21.479024 0 0 0-10.190049 2.622439v98.004293h-0.099902c-1.148878 16.433951-14.336 29.171512-30.245463 29.246439-15.959415 0-29.221463-12.987317-30.295415-29.221464h-0.049951V515.496585l-1.82322-23.876683c-1.573463-21.27922-15.185171-38.637268-30.395317-38.637268-6.743415 0-13.661659 3.746341-19.131317 9.990244v105.996488c-0.049951 17.333073-13.636683 31.34439-30.420293 31.394341-16.733659-0.074927-30.295415-14.086244-30.345365-31.394341v-93.258927l-2.272781-10.889366c-3.746341-18.132293-16.334049-31.768976-29.146537-31.768975-8.741463 0-17.482927 6.193951-23.402146 16.259122l-0.974049 105.147317v39.53639c0 15.335024-12.163122 27.947707-26.998634 27.947707h-6.568585c-14.910439 0-27.02361-12.612683-27.02361-27.947707V278.403122l-0.174829-11.139122c0-23.601951-16.583805-42.708293-37.088781-42.708293-20.48 0-37.063805 19.156293-37.063805 42.708293l1.323708 306.700488c0.074927 0.924098 0.099902 1.873171 0.099902 2.822244v121.68117c-0.249756 15.659707-11.563707 28.771902-26.574049 30.769952a30.470244 30.470244 0 0 1-33.217561-22.827708l-11.413853-34.391414a41.284683 41.284683 0 0 0-26.349269-18.232195 40.210732 40.210732 0 0 0-31.069658 6.443707c-18.981463 13.187122-24.001561 39.761171-11.288976 59.392l129.898147 199.630049 0.424585 0.549463 1.598439 2.44761 1.998049 3.072c1.223805 1.998049 2.547512 3.896195 3.721366 5.369756l0.84917 1.098927 0.624391 1.373658c20.230244 33.417366 28.022634 40.635317 43.382634 40.635317h277.978536v-0.199804 0.049951z" fill="#000000" p-id="2497"></path><path d="M586.926829 268.312976v49.951219h-449.560975v-49.951219zM124.578341 386.44761l-87.88917-87.864195a7.492683 7.492683 0 0 1 0-10.589659l87.88917-87.889171a7.492683 7.492683 0 0 1 12.787513 5.29483v175.753365a7.492683 7.492683 0 0 1-12.787513 5.29483z" fill="#000000" p-id="2498"></path><path d="M12.487805 137.365854v-49.95122h449.560975v49.95122z" fill="#000000" p-id="2499"></path><path d="M474.836293 19.23122l87.88917 87.864195a7.492683 7.492683 0 0 1 0 10.589658l-87.88917 87.889171a7.492683 7.492683 0 0 1-12.787513-5.319805V24.526049a7.492683 7.492683 0 0 1 12.787513-5.319805z" fill="#000000" p-id="2500"></path></svg>
          </div>
          <div>
            <div class="scroll" style={{ background: '#F5F5F5', height: '885px', paddingTop: '45px' }}>
            <div class="item" style={{ height: '750px', width: '100%', paddingTop: '45px', background: '#CCCCCC', borderRadius: '25px' }}>
                <div style={{ textAlign: 'center' }}>
                  <h1 style={{ fontSize: '30px', color: '#403D3D', fontWeight: 'bold' }}>
                    你选择的面试形式是？
                  </h1>
                  <div>
                    <List style={{ background: '#CCCCCC', paddingTop: '300px' }}>
                      <ListItem style={{ background: '#CCCCCC', paddingLeft: '30%', "--separator-color": 'rgba(0, 0, 0, 0)' }}><Button shape='radius' style={{ width: '210px', height: '80px', background: '#F2F2F2', fontSize: '25px' }}> 人机面试</Button></ListItem>
                      <ListItem style={{ background: '#CCCCCC', paddingLeft: '30%', "--separator-color": 'rgba(0, 0, 0, 0)' }}><Button shape='radius' style={{ width: '210px', height: '80px', background: '#F2F2F2', fontSize: '25px' }}>专家面试</Button></ListItem>
                    </List>
                  </div>
                </div>
              </div>
              <div class="item" style={{ height: '750px', width: '100%', paddingTop: '45px' }}>
                <div>
                  <h1 style={{ fontSize: '30px', color: '#403D3D', fontWeight: 'bold' }}>
                    你选择的面试类型是？
                  </h1>
                  <div>
                    <List style={{ paddingTop: '320px' }}>
                      <ListItem style={{ background: '#F5F5F5', paddingLeft: '30%', "--separator-color": 'rgba(0, 0, 0, 0)' }}><Link to='/ReservationSuccess'><Button shape='radius' style={{ width: '210px', height: '80px', background: '#F2F2F2', fontSize: '25px' }}>线上模拟</Button></Link></ListItem>
                      <ListItem style={{ background: '#F5F5F5', paddingLeft: '30%', "--separator-color": 'rgba(0, 0, 0, 0)' }}><Link to='/reservationsuccess-onsite'><Button shape='radius' style={{ width: '210px', height: '80px', background: '#F2F2F2', fontSize: '25px' }}>现场面试</Button></Link></ListItem>
                    </List>
                  </div>
                </div>
              </div>

            </div>
            <div style={{ background: '#F5F5F5', paddingTop: '5px', paddingLeft: '10%', height: '220px', width: '100%', paddingBottom: '70px' }}>
              <div style={{ width: '410px', paddingBottom: '5px', paddingTop: '5px', paddingLeft: '30px', paddingRight: '30px', background: '#333333', color: 'white', borderRadius: '25px' }}>
                <h2 style={{ fontSize: '30px', fontWeight: '200' }}>
                  选择面试类型和面试方式
                </h2>
                <p style={{ fontSize: '20px' }}>
                  常见的可选择的面试类型有线上面试，线下面试，现场面试；面试方式有实时面试，适时面试。
                </p>
              </div>
            </div>

          </div>
        </div>

      </ConfigProvider>
    </div>

  );
}

export default ChooseType;
