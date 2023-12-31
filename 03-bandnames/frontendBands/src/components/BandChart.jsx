import { Chart } from "chart.js";
import { useContext, useEffect } from "react";
import { SockectContex } from "../context/SocetContext";

const BandChart = () => {
  const { socket } = useContext(SockectContex)
  useEffect(() => {
    socket.on('currentBands', (data) => {
      createChart(data)
    })

    return () => socket.off('currentBands')
  }, [socket])

  const createChart = (bands) => {
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: bands.map(b => b.name),
        datasets: [{
          label: 'Votos de las bandas',
          data: bands.map(b => b.votes),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        animation: false,
        scales: {
          xAxes: [{ stacked: true }],
        }
      }
    });
  }

  return (
    <canvas id="myChart"></canvas>
  )
}

export default BandChart