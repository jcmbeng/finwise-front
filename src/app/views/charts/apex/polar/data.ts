import { getColor } from '@/app/utils/color-utils';
import { ApexOptions } from 'ng-apexcharts';

export const basicPolarAreaChart: () => ApexOptions = () => ({
    series: [30, 45, 28, 22, 18, 12],
    chart: {
        height: 380,
        type: 'polarArea',
    },
    stroke: {
        colors: ['#fff'],
    },
    fill: {
        opacity: 0.8,
    },
    labels: ['Marketing', 'Research', 'Operations', 'Sales', 'HR', 'Support'],
    colors: [
        getColor('primary'),
        getColor('secondary'),
        getColor('info'),
        getColor('warning'),
        getColor('danger'),
        getColor('purple'),
    ],
    legend: {
        position: 'bottom',
    },
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
                legend: {
                    position: 'bottom',
                },
            },
        },
    ],
});

export const monochromePolarAreaChart: () => ApexOptions = () => ({
    series: [35, 48, 55, 60, 70],
    chart: {
        height: 380,
        type: 'polarArea',
    },
    labels: ['Planning', 'Design', 'Development', 'Testing', 'Deployment'],
    fill: {
        opacity: 1,
    },
    stroke: {
        width: 1,
        colors: ['#fff'],
    },
    yaxis: {
        show: false,
    },
    legend: {
        position: 'bottom',
    },
    plotOptions: {
        polarArea: {
            rings: {
                strokeWidth: 0,
            },
            spokes: {
                strokeWidth: 0,
            },
        },
    },
    theme: {
        monochrome: {
            enabled: true,
            shadeTo: 'light',
            color: getColor('primary'),
            shadeIntensity: 0.6,
        },
    },
});
