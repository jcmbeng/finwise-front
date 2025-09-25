import { ChartConfiguration } from 'chart.js'
import { getColor } from '@/app/utils/color-utils'

const bodyFont = getComputedStyle(document.body).fontFamily.trim()
export const basicBarChartOptions = (): ChartConfiguration => ({
  type: 'bar',
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [
      {
        data: [4, 4, 5, 6, 8, 5, 4, 6, 8, 5],
        backgroundColor: getColor('chart-primary'),
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  },
  options: {
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
    },
  },
})

export const borderedRadiusChartOptions = (): ChartConfiguration => ({
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Fully Rounded',
        data: [12, -19, 14, -15, 12, -14],
        borderColor: getColor('chart-gray'),
        backgroundColor: getColor('chart-gray-rgb', 0.2),
        borderWidth: 2,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
      },
      {
        label: 'Small Radius',
        data: [-10, 19, -15, -8, 12, -7],
        borderColor: getColor('chart-primary'),
        backgroundColor: getColor('chart-primary-rgb', 0.2),
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  },
  options: {
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
    },
  },
})

export const floatingChartOptions = (): ChartConfiguration => ({
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Fully Rounded',
        data: [12, -19, 14, -15, 12, -14],
        backgroundColor: getColor('chart-primary'),
      },
      {
        label: 'Small Radius',
        data: [-10, 19, -15, -8, 12, -7],
        backgroundColor: getColor('chart-gray'),
      },
    ],
  },
  options: {
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: { family: bodyFont },
          color: getColor('secondary-color'),
          usePointStyle: true,
          pointStyle: 'circle',
          boxWidth: 8,
          boxHeight: 8,
          padding: 15,
        },
      },
      tooltip: {
        enabled: true,
        titleFont: { family: bodyFont },
        bodyFont: { family: bodyFont },
      },
    },
  },
})

export const stackedChartOptions = (): ChartConfiguration => ({
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, -19, 14, -15, 8, 10],
        backgroundColor: getColor('chart-gray'),
      },
      {
        label: 'Dataset 2',
        data: [-10, 19, -15, -8, 12, 6],
        backgroundColor: getColor('chart-secondary'),
      },
      {
        label: 'Dataset 3',
        data: [-5, 14, -10, -12, 7, 4],
        backgroundColor: getColor('chart-primary'),
      },
      {
        label: 'Dataset 4',
        data: [8, -12, 10, -6, 15, -3],
        backgroundColor: getColor('chart-dark'),
      },
    ],
  },
  options: {
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: { family: bodyFont },
          color: getColor('secondary-color'),
          display: true,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        stacked: true,
        ticks: {
          font: { family: bodyFont },
          color: getColor('secondary-color'),
        },
        grid: {
          display: true,
          color: getColor('chart-border-color'),
          lineWidth: 1,
        },
        border: {
          display: false,
          dash: [5, 5],
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
})

export const stackedGroupsChartOptions = (): ChartConfiguration => ({
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'March', 'April'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, -19, 14, -15],
        backgroundColor: getColor('chart-dark'),
        stack: 'Stack 0',
      },
      {
        label: 'Dataset 2',
        data: [-10, 19, -15, -8],
        backgroundColor: getColor('chart-primary'),
        stack: 'Stack 0',
      },
      {
        label: 'Dataset 3',
        data: [-10, 19, -15, -8],
        backgroundColor: getColor('chart-gray'),
        stack: 'Stack 1',
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
    },
  },
})

export const verticalChartOptions = (): ChartConfiguration => ({
  type: 'bar',
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [4, 4, 5, 6, 8, 5, 4, 6, 8, 5],
        backgroundColor: getColor('chart-dark'),
        borderRadius: 4,
        barThickness: 8,
      },
      {
        label: 'Dataset 2',
        data: [3, 5, 4, 7, 6, 5, 6, 7, 5, 4],
        backgroundColor: getColor('chart-primary'),
        borderRadius: 4,
        barThickness: 8,
      },
      {
        label: 'Dataset 3',
        data: [5, 3, 6, 4, 7, 6, 5, 4, 6, 7],
        backgroundColor: getColor('chart-secondary'),
        borderRadius: 4,
        barThickness: 8,
      },
    ],
  },
})
