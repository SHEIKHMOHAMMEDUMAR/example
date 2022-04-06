import { userData1 } from '../../Data1';
import { userData2 } from '../../Data2';
import { userData3 } from '../../Data3';
import { userData4 } from '../../Data4';
import { userData5 } from '../../Data5';
import { React, useState, useEffect } from 'react';
import "./home.css"
import FeatureInfo from "../../components/featureInfo/FeatureInfo";
import Chart from "../../components/chart/Chart";
import Pyee from "../../components/pyee/Pyee";
import LSP from "../../components/lsp/LSP";

const Home = () => {
  const [userData,setData] = useState(userData1);
  const [isLoading,setLoading] = useState(false)
  const data = (e) => {
        if(e.target.value === "sevenDays"){
            setData(userData1);
        }
        else if(e.target.value === "oneMonth"){
          setData(userData2);
        }
        else if(e.target.value === "threeMonths"){
          setData(userData3);
        }
        else if(e.target.value === "sixMonths"){
          setData(userData4);
        }
        else{
          setData(userData5);
        }
    }
  useEffect (() => {
    setTimeout(()=> {
      setLoading(true);
    }, 3000)
  }, [])
  return(
    <div className="home">
      <div className="drop">
        <select onChange={data} isLoading={isLoading}> 
          <option value="sevenDays">Last 7 days</option> 
          <option value="oneMonth">Last 1 month</option> 
          <option value="threeMonths">Last 3 months</option> 
          <option value="sixMonths">Last 6 months</option>
          <option value="oneYear">Last 1 year</option> 
        </select>
      </div>
      <FeatureInfo items={userData.featureInfo} isLoading={isLoading} />
      <Chart items={userData.charts} isLoading={isLoading} dataKey="Active User"/>
      <div className="homeWidgets">
          <Pyee items={userData.pieChart} isLoading={isLoading} dataKey="Active User"/>
          <LSP items={userData.Table} isLoading={isLoading}/>
      </div>
    </div>
  );
}
export default Home;