import * as echarts from 'echarts'

function nowSize(val, initWidth = 1920) {
    return val * (document.documentElement.clientWidth / initWidth)
}

export const polarOption = {
    angleAxis: {
        max: 30,
        startAngle: 90,
        splitLine: {
            show: false
        },
        axisTick:{
            show: false
        },
        axisLabel:{
            show: true,
            color: '#fff',
            fontSize: nowSize(16),
        },
        axisLine:{
            show: false,
        },
    },
    
    tooltip:{
        show: true,
        trigger: 'axis',
        formatter: '{b}: {c}',
        axisPointer : {            
            type : 'shadow'
        },
        textStyle: {
            fontSize: nowSize(14),
        },
    },
    
    radiusAxis: {
        type: 'category',
        axisTick:{
            show: false
        },
        axisLabel: {
            interval: 0,
            fontSize: nowSize(12),
            color: '#fff',
        },
        axisLine:{
            show: false,
        },
        data: ['管理费', '水电费', '耗材费', '人员工资', '维修费', '折旧成本'],
        z: 10
    },
    polar: {
    },
    series: [{
        type: 'bar',
        label: {
            show: true,
        },
        coordinateSystem: 'polar',
        data: [15, 12, 13, 14, 15, 20],
        roundCap: true,
        barWidth: '30%',
        name: '总构成成本',
        showBackground: true,
        itemStyle:{
            color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(154,225,253, 0)'},                   //柱图渐变色
                        {offset: 1, color: '#9AE1FD'},                   //柱图渐变色
                    ]
                )
        },
        
    }],
}