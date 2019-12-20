<template>
    <section class="chart">
        <Row>
            <Col :span="12">
                <div id="chartColumn" style="width:100%; height:400px;"></div>
            </Col>
            <Col :span="12">
                <div id="chartBar" style="width:100%; height:400px;"></div>
            </Col>
            <Col :span="12">
                <div id="chartLine" style="width:100%; height:400px;"></div>
            </Col>
            <Col :span="12">
                <div id="chartPie" style="width:100%; height:400px;"></div>
            </Col>
            <Col :span="24">
                <a href="http://echarts.baidu.com/examples.html" target="_blank" style="float: right;">more>></a>
            </Col>
        </Row>
    </section>
</template>

<script>
    import echarts from 'echarts'
    
    export default{
        data (){
            return {
                chartColumn:null,
                chartBar:null,
                chartLine:null,
                chartPie:null
            }
        },
        mounted:function(){
            var _this=this;
            //基于准备好的dom，初始化echarts实例
            this.chartColumn = echarts.init(document.getElementById('chartColumn'));
            this.chartBar = echarts.init(document.getElementById('chartBar'));
            this.chartLine = echarts.init(document.getElementById('chartLine'));
            this.chartPie = echarts.init(document.getElementById('chartPie'));
            
            this.chartColumn.setOption({
                title: { text: 'Column Chart' },
                tooltip: {},
                xAxis: {
                    data: ["1月","2月","3月","4月","5月","6月"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
            
            this.chartBar.setOption({
                title: {
                    text: 'Bar Chart',
                    subtext: '虚构数据'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['2018年', '2019年']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['5店','4店','3店','2店','1店','总收入']
                },
                series: [
                    {
                        name: '2018年',
                        type: 'bar',
                        data: [18203, 23489, 29034, 104970, 131744, 630230]
                    },
                    {
                        name: '2019年',
                        type: 'bar',
                        data: [19325, 23438, 31000, 121594, 134141, 681807]
                    }
                ]
            });

            this.chartLine.setOption({
                title: {
                    text: 'Line Chart'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data:['研究生','博士生','其他社会人士']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一','周二','周三','周四','周五','周六','周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name:'研究生',
                        type:'line',
                        stack: '总量',
                        data:[120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name:'博士生',
                        type:'line',
                        stack: '总量',
                        data:[220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name:'其他社会人士',
                        type:'line',
                        stack: '总量',
                        data:[820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            });

            this.chartPie.setOption({
                title : {
                    text: 'Pie Chart',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['本科生','研究生','博士生','教师','其他社会人士']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:335, name:'本科生'},
                            {value:310, name:'研究生'},
                            {value:234, name:'博士生'},
                            {value:135, name:'教师'},
                            {value:1548, name:'其他社会人士'}
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            });
        }

    }
</script>

<style scoped>
    .chart {
        width: 100%;
        float: left;
    }
    /* .chart div {
        height: 400px;
        float: left;
    } */
    
    .Col {
        padding: 30px 20px;
    }
</style>