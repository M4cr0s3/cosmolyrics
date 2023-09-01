<script setup>
import  * as echarts from 'echarts';
import {use} from 'echarts/core'
import {CanvasRenderer} from "echarts/renderers";
import {PieChart} from "echarts/charts";
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent
} from "echarts/components";
import VChart, {THEME_KEY} from "vue-echarts";
import { ref, provide} from "vue";

const props = defineProps({
    data: Array
})

provide(THEME_KEY, 'dark')

use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
]);

const option = ref({
    borderRadius: [15],
    backgroundColor: 'rgba(30, 27, 75, 1)',
    title: {
        text: 'Самые прослушиваемые жанры',
        left: 'center',
        padding: [25, 0],
        textStyle: {
            fontSize: 24
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        padding: [30, 0, 5, 20],
    },
    series: {
        name: 'Самые прослушиваемые жанры',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: props.data.map(item => ({
            name: item.genre, value: item.total_listens
        })),
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
        }
    },
})

</script>
<template>
    <div class="chart-container">
        <v-chart class="chart" :option="option" autoresize/>
    </div>

</template>

<style scoped>
.chart {
    height: 100%;
    width: 100%;
}

.chart-container {
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

canvas {
    border-radius: .25rem;
}
</style>
