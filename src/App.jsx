import * as React from 'react';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from './Copyright';

import Mermaid from "react-mermaid2";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const gitGraphSettings = `
%%{init: { 'logLevel': 'debug', 'theme': 'default' , 'themeVariables': {
  'commitLabelColor': '#ff0000',
  'commitLabelBackground': '#00ff00',
  'commitLabelFontSize': '16px'
} } }%%
`

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
Here is a mermaid diagram:
        <Mermaid chart={`
          gantt
            title A Gantt Diagram
            dateFormat  YYYY-MM-DD
            section Section
            A task           :a1, 2014-01-01, 30d
            Another task     :after a1  , 20d
            section Another
            Task in sec      :2014-01-12  , 12d
            another task      : 24d
        `}/>
      </TabPanel>

      <TabPanel value={value} index={1}>
Here is another mermaid diagram:
        <Mermaid chart={`
            graph TD
            A[Client] -->|tcp_123| B
            B(Load Balancer)
            B -->|tcp_456| C[Server1]
            B -->|tcp_456| D[Server2]
            `}/>
      </TabPanel>

      <TabPanel value={value} index={2}>
And here is one more:
      <Mermaid chart={`
        graph TD;
        I-->J;
        I-->K;
        J-->L;
        K-->L;
        `}/>
      </TabPanel>

      <Copyright />
    </Container>
  );
}
