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

export const costOption = {
    title: {
        top: '5%',
        left: '3%',
        text: '收入成本近12月趋势',
        textStyle: {
            color: '#77D2FA',
            fontWeight: 500,
            fontSize: nowSize(20),
        },
    },
    legend: {
        top: '15%',
        right: '10%',
        textStyle: {
            color: '#AEB1B6',
            fontSize: nowSize(12),
        },
        icon: 'roundRect',
        data: ['成本', '收入 (万元)']
    },
    xAxis: {
        data: ['1月', '2月', '3月','4月', '5月', '6月','7月', '8月', '9月'],
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3C464F',
            }
        },
        axisLabel: {
            color: '#AEB1B6',
            fontSize: nowSize(12),
        },
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: '#41464C',
            },
        },
        axisLabel: {
            color: '#AEB1B6',
            fontSize: nowSize(12),
        },
    },
    grid: {
        top: '30%',
        bottom: '8%',
        right: '10%',
    },
    series: [
        {
            name: '收入 (万元)',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                color: '#FE0000'
            },
            data: [115, 120, 130, 120, 145, 160, 120, 170, 150],
        },
        {
            name: '成本',
            type: 'line',
            smooth: true,
            stack: 'a',
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                color: '#1F91FC'
            },
            data: [50, 70, 75, 55, 60, 80, 90, 60, 55],
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#1F91FC'
                }, {
                    offset: 1,
                    color: 'transparent'
                }])
            },
        }
    ]
}

export const barOption = {
    title: {
        top: '5%',
        left: '3%',
        text: '检查人次近12月趋势',
        textStyle: {
            color: '#77D2FA',
            fontWeight: 500,
            fontSize: nowSize(20),
        },
    },
    legend: {
        top: '15%',
        right: '10%',
        textStyle: {
            color: '#AEB1B6',
            fontSize: nowSize(12),
        },
        icon: 'roundRect',
        data: ['本年检查人次 (万)']
    },
    xAxis: {
        data: ['1月', '2月', '3月','4月', '5月', '6月','7月', '8月', '9月'],
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3C464F',
            }
        },
        axisLabel: {
            color: '#AEB1B6',
            fontSize: nowSize(12),
        },
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: '#41464C',
            },
        },
        axisLabel: {
            color: '#AEB1B6',
            fontSize: nowSize(12),
        },
    },
    grid: {
        top: '25%',
        bottom: '8%',
        right: '10%',
    },
    series: {
        name: '本年检查人次 (万)',
        type: 'bar',
        barWidth: '20%',
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#35C3FF'
            }, {
                offset: 1,
                color: 'rgba(24,144,255,0)'
            }])
        },
        data: [115, 120, 130, 120, 145, 160, 120, 170, 150],
    },
}