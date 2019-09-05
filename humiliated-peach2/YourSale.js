import React from 'react'
import { BarChart, Grid, XAxis } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from "react-native-svg";
import { Text } from 'react-native-svg';

class YourSale extends React.PureComponent {

    render() {

        const data = [
            {   title:'October',
                value: 40,
                svg: {
                    fill: '#28a745',
                },
            },
            {   title:'September',
                value: 95,
                svg: {
                    fill: '#dc3545',
                },
            },
            {    title:'August',
                value: 85,
                svg: {
                    fill: '#ffc107',
                },
            },
            {   title:'July',
                value: 65,
                svg: {
                    fill: '#17a2b8',
                },
            },
        ]
        
  
        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
                    <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
                </LinearGradient>
            </Defs>
        )

        return (
            <BarChart
                style={{resizeMode: 'contain', height: 200 ,width:'100%', paddingLeft:7, paddingRight: 7}}
                data={data}
                gridMin={0}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                yAccessor={({ item }) => item.value}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid/>
                <XAxis
                style={{ textAlign:'center',marginHorizontal: 10 }}
                data={ data.title }
                contentInset={{ left: 10, right: 10 }}
                />
                <Gradient/>
            </BarChart>
        )
    }

}

export default YourSale