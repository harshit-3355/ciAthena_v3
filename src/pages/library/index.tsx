/* eslint-disable */ // WIP
import { Box, Button, Typography } from '@mui/material';
import Chart from 'chart.js/auto';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PptxGenJS from 'pptxgenjs';
import { useRef, useEffect } from 'react';

const LibraryPage = () => {
  const exportRef = useRef<HTMLDivElement>(null);

  // Refs for canvases
  const chartRefs = {
    bar: useRef<HTMLCanvasElement>(null),
    line: useRef<HTMLCanvasElement>(null),
    pie: useRef<HTMLCanvasElement>(null),
    area: useRef<HTMLCanvasElement>(null),
    stacked: useRef<HTMLCanvasElement>(null),
  };

  const commonStyle = { marginBottom: 40, width: '70%' };

  useEffect(() => {
    const chartConfigs: any = {
      bar: {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [
            {
              label: '2025',
              data: [150, 200, 170, 240, 300],
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
          ],
        },
        options: { plugins: { title: { display: true, text: 'Monthly Sales (Bar Chart)' } } },
      },
      line: {
        type: 'line',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          datasets: [
            {
              label: 'Visitors',
              data: [120, 150, 180, 90, 250],
              borderColor: 'blue',
              tension: 0.3,
            },
          ],
        },
        options: { plugins: { title: { display: true, text: 'Website Traffic (Line Chart)' } } },
      },
      pie: {
        type: 'pie',
        data: {
          labels: ['Product A', 'Product B', 'Product C'],
          datasets: [
            {
              label: 'Share',
              data: [45, 30, 25],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        },
        options: { plugins: { title: { display: true, text: 'Market Share (Pie Chart)' } } },
      },
      area: {
        type: 'line',
        data: {
          labels: ['Q1', 'Q2', 'Q3', 'Q4'],
          datasets: [
            {
              label: 'New Users',
              data: [400, 800, 1200, 1800],
              fill: true,
              backgroundColor: 'rgba(153, 102, 255, 0.5)',
              borderColor: 'rgba(153, 102, 255, 1)',
              tension: 0.4,
            },
          ],
        },
        options: { plugins: { title: { display: true, text: 'User Growth (Area Chart)' } } },
      },
      stacked: {
        type: 'bar',
        data: {
          labels: ['HR', 'IT', 'Marketing'],
          datasets: [
            {
              label: 'Salaries',
              data: [50000, 70000, 45000],
              backgroundColor: '#4CAF50',
            },
            {
              label: 'Equipment',
              data: [10000, 20000, 15000],
              backgroundColor: '#FFC107',
            },
            {
              label: 'Training',
              data: [5000, 8000, 3000],
              backgroundColor: '#2196F3',
            },
          ],
        },
        options: {
          plugins: { title: { display: true, text: 'Department Budget (Stacked Bar)' } },
          responsive: true,
          scales: {
            x: { stacked: true },
            y: { stacked: true },
          },
        },
      },
    };

    Object.entries(chartRefs).forEach(([key, ref]) => {
      if (ref.current) {
        const existingChart = Chart.getChart(ref.current);
        if (existingChart) {
          existingChart.destroy();
        }

        new Chart(ref.current, chartConfigs[key]);
      }
    });

    // Cleanup charts on component unmount
    return () => {
      Object.values(chartRefs).forEach(ref => {
        const chart = Chart.getChart(ref.current!);
        if (chart) chart.destroy();
      });
    };
  }, []);

  const handleExportPDF = () => {
    const input = exportRef.current;
    if (!input) return;

    html2canvas(input, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const headingHeight = 30;
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = headingHeight;

      pdf.setFontSize(18);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Rishi Garg - Company Analytics Report', pdfWidth / 2, 10, { align: 'center' });

      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      pdf.text(
        'This report provides visual insights into key metrics for sales, traffic, budget allocation, and user growth.',
        10,
        20,
      );

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight - headingHeight;

      while (heightLeft > 0) {
        position = 0;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save('multi-chart-report.pdf');
    });
  };

  const handleExportPPT = async () => {
    const pptx = new PptxGenJS();

    const slides = [
      { title: 'Monthly Sales', description: 'Monthly sales trends.', ref: chartRefs.bar },
      { title: 'Website Traffic', description: 'Website traffic analysis.', ref: chartRefs.line },
      {
        title: 'Market Share',
        description: 'Current market share by product.',
        ref: chartRefs.pie,
      },
      { title: 'User Growth', description: 'Quarterly user growth trends.', ref: chartRefs.area },
      {
        title: 'Department Budget',
        description: 'Stacked chart of departmental budget allocation.',
        ref: chartRefs.stacked,
      },
    ];

    for (const slideData of slides) {
      const slide = pptx.addSlide();

      slide.addText('Rishi Garg - Company Analytics Report', {
        x: 0.5,
        y: 0.3,
        fontSize: 16,
        bold: true,
        color: '003366',
      });

      slide.addText(slideData.title, { x: 0.5, y: 0.9, fontSize: 14, bold: true });
      slide.addText(slideData.description, {
        x: 0.5,
        y: 1.4,
        fontSize: 11,
        color: '333333',
        w: 8.5,
      });

      const canvas = slideData.ref.current;
      if (!canvas) continue;

      await new Promise(resolve => {
        html2canvas(canvas, { scale: 2 }).then(canvas => {
          const imgData = canvas.toDataURL('image/png');
          slide.addImage({ data: imgData, x: 0.5, y: 2.0, w: 8, h: 4.5 });
          resolve('done');
        });
      });
    }

    pptx.writeFile({ fileName: 'Company_Analytics_Report.pptx' });
  };

  return (
    <Box sx={{ backgroundColor: '#fff', padding: 20 }}>
      <Typography variant='h4' gutterBottom>
        Rishi Garg - Company Analytics Report
      </Typography>
      <Typography variant='body1' paragraph>
        This report provides visual insights into key metrics for sales, traffic, budget allocation,
        and user growth. The following charts help stakeholders quickly identify trends and
        patterns.
      </Typography>

      <Box ref={exportRef}>
        <Box id='MonthlySales' sx={commonStyle}>
          <canvas ref={chartRefs.bar} />
        </Box>
        <Box id='WebsiteTraffic' sx={commonStyle}>
          <canvas ref={chartRefs.line} />
        </Box>
        <Box id='MarketShare' sx={commonStyle}>
          <canvas ref={chartRefs.pie} />
        </Box>
        <Box id='UserGrowth' sx={commonStyle}>
          <canvas ref={chartRefs.area} />
        </Box>
        <Box id='DepartmentBudget' sx={commonStyle}>
          <canvas ref={chartRefs.stacked} />
        </Box>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Button variant='contained' onClick={handleExportPDF} sx={{ marginRight: 2 }}>
          Export All Charts to PDF
        </Button>
        <Button variant='contained' onClick={handleExportPPT}>
          Export All Charts to PowerPoint
        </Button>
      </Box>
    </Box>
  );
};

export default LibraryPage;
