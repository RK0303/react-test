import { PieChart } from '@mui/x-charts/PieChart';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiChartsLegend: {
      styleOverrides: {
        label: {
          fill: 'white',    // SVG fill (text color)
          fontSize: 14,     // optional
        },
      },
    },
  },
});

export default function BasicPie() {
  return (
    <ThemeProvider theme={theme}>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: 'series A' },
              { id: 1, value: 15, label: 'series B' },
              { id: 2, value: 20, label: 'series C' },
            ],
          },
        ]}
        width={300}
        height={300}
      />
    </ThemeProvider>
  );
}
