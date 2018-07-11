import React from 'react';
import _ from 'lodash';
import {Sparklines,SparklinesLine,SparklinesReferenceLine} from 'react-sparklines';

export default (props)=>{
  function average(data){
    return _.round(_.sum(data)/data.length);
  }
  return(
    <div>
    <Sparklines height={140} width={200} data={props.data} >
      <SparklinesLine  color={props.color}></SparklinesLine>
      <SparklinesReferenceLine typ='avg' />
    </Sparklines>
    <div>{average(props.data)}</div>
    </div>
  );
}
