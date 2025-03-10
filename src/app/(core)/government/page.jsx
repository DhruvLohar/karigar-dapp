'use client'
import React, { useRef, useState, useEffect } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Image from 'next/image';

ChartJS.register(...registerables);

const ChartComponent = ({ type, data, title }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: type === 'doughnut' ? 'right' : 'top',
        labels: { font: { size: 10 } },
      },
      title: {
        display: true,
        text: title,
        color: '#333',
        font: { size: 14, weight: 'bold' },
      },
    },
    ...(type === 'doughnut' && { cutout: '70%' }),
  };

  const ChartType = { doughnut: Doughnut, bar: Bar, line: Line }[type];
  return data.datasets ? (
    <div className="h-64"><ChartType data={data} options={options} /></div>
  ) : (
    <div className="h-64 flex items-center justify-center">Loading...</div>
  );
};

const DownloadButton = ({ period, onClick }) => (
  <button
    onClick={() => onClick(period)}
    className="bg-dori hover:bg-dori-dark text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105"
  >
    Download {period} report
  </button>
);

const GovernmentAnalysisPage = () => {
  const contentRef = useRef(null);
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [chartData, setChartData] = useState({
    incomeData: {
      labels: [],
      datasets: []
    },
    consumptionData: {
      labels: [],
      datasets: []
    },
    buyingBehaviorData: {
      labels: [],
      datasets: []
    },
    topSellingProducts: {
      labels: [],
      datasets: []
    },
  });

  useEffect(() => {
    // Simulating data fetch based on selected filters
    const fetchData = () => {
      // This is where you'd typically make an API call
      // For now, we'll just use mock data and filter it
      const allData = {
        incomeData: {
          labels: ['Handicraft', 'Agricultural', 'Food Stuff', 'Manufactured', 'Natural'],
          datasets: [{
            data: [45, 30, 15, 7, 3],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
          }],
        },
        consumptionData: {
          labels: ['Textiles', 'Food Products', 'Handicrafts', 'Agricultural Products', 'Others'],
          datasets: [{
            label: 'Consumption Pattern',
            data: [35, 25, 20, 15, 5],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          }],
        },
        buyingBehaviorData: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Online Purchases',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          }, {
            label: 'Offline Purchases',
            data: [8, 15, 5, 7, 4, 6],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1,
          }],
        },
        topSellingProducts: {
          labels: ['Darjeeling Tea', 'Basmati Rice', 'Pashmina Shawls', 'Alphonso Mangoes', 'Mysore Silk'],
          datasets: [{
            label: 'Sales (in lakhs INR)',
            data: [500, 450, 400, 350, 300],
            backgroundColor: [
              'rgba(255, 99, 132, 0.8)',
              'rgba(54, 162, 235, 0.8)',
              'rgba(255, 206, 86, 0.8)',
              'rgba(75, 192, 192, 0.8)',
              'rgba(153, 102, 255, 0.8)',
            ],
          }],
        },
      };

      // Filter data based on selected region and category
      const filteredData = {
        incomeData: filterChartData(allData.incomeData, selectedRegion, selectedCategory),
        consumptionData: filterChartData(allData.consumptionData, selectedRegion, selectedCategory),
        buyingBehaviorData: filterChartData(allData.buyingBehaviorData, selectedRegion, selectedCategory),
        topSellingProducts: filterChartData(allData.topSellingProducts, selectedRegion, selectedCategory),
      };

      setChartData(filteredData);
    };

    fetchData();
  }, [selectedRegion, selectedCategory]);

  const filterChartData = (data, region, category) => {
    // This is a mock filtering function. In a real scenario, you'd have more complex logic here.
    if (region === 'All' && category === 'All') return data;

    const filteredData = {...data};
    
    if (region !== 'All') {
      // Mock region filtering (you'd have real data and logic here)
      filteredData.datasets = filteredData.datasets.map(dataset => ({
        ...dataset,
        data: dataset.data.map(value => value * (region === 'North' ? 0.3 : region === 'South' ? 0.45 : region === 'East' ? 0.15 : 0.1))
      }));
    }

    if (category !== 'All') {
      // Mock category filtering (you'd have real data and logic here)
      const categoryIndex = filteredData.labels.indexOf(category);
      if (categoryIndex !== -1) {
        filteredData.labels = [filteredData.labels[categoryIndex]];
        filteredData.datasets = filteredData.datasets.map(dataset => ({
          ...dataset,
          data: [dataset.data[categoryIndex]]
        }));
      }
    }

    return filteredData;
  };

  const handleDownload = async (period) => {
    const content = contentRef.current;
    const canvas = await html2canvas(content);
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 30;

    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    pdf.text(`Department of Post Global Indian Diaspora Data Analysis - ${period.charAt(0).toUpperCase() + period.slice(1)} Report`, 14, 15);
    pdf.save(`government_analysis_${period}.pdf`);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <div ref={contentRef} className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Department of Post Global Indian Diaspora Data Analysis</h1>

        <div className="mb-6 flex justify-end space-x-4">
          <select
            value={selectedRegion}
            onChange={handleRegionChange}
            className="bg-white text-gray-800 rounded p-2 border border-gray-300"
          >
            <option value="All">All Regions</option>
            <option value="North">North India</option>
            <option value="South">South India</option>
            <option value="East">East India</option>
            <option value="West">West India</option>
          </select>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="bg-white text-gray-800 rounded p-2 border border-gray-300"
          >
            <option value="All">All Categories</option>
            <option value="Handicraft">Handicraft</option>
            <option value="Agricultural">Agricultural</option>
            <option value="Food Stuff">Food Stuff</option>
            <option value="Manufactured">Manufactured</option>
            <option value="Natural">Natural</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <ChartComponent type="doughnut" data={chartData.incomeData} title="Income Distribution" />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <ChartComponent type="bar" data={chartData.consumptionData} title="Consumption Pattern" />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <ChartComponent type="line" data={chartData.buyingBehaviorData} title="Buying Behavior" />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <ChartComponent type="doughnut" data={chartData.topSellingProducts} title="Top Selling Products" />
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-2 text-gray-800">Regional Distribution of GI Tags</h2>
          <ul className="list-disc pl-5 text-gray-800 text-sm">
            <li>South India: 45% (Karnataka, Kerala, Tamil Nadu, Telangana)</li>
            <li>North India: 30% (Uttar Pradesh, Punjab, Himachal Pradesh)</li>
            <li>East India: 15% (West Bengal, Odisha, Bihar)</li>
            <li>West India: 10% (Maharashtra, Gujarat, Rajasthan)</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <Image
            src="/logoblack.png"  // Replace with your actual logo path
            alt="Brand Logo"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Download Reports</h2>
        <p className="text-gray-600 mb-4">Download the report for documentation and further analysis:</p>
        <div className="flex justify-center space-x-4">
          <DownloadButton period="weekly" onClick={handleDownload} />
          <DownloadButton period="monthly" onClick={handleDownload} />
          <DownloadButton period="yearly" onClick={handleDownload} />
        </div>
      </div>
    </div>
  );
};

export default GovernmentAnalysisPage;
