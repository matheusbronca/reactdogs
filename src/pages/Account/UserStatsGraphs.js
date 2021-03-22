import React from 'react';
import styles from './UserStatsGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    });

    setGraph(graphData);

    setTotal(
      data
        .map(({ acessos }) => Number(acessos))
        .reduce((acc, val) => acc + val, 0)
    );
  }, [data]);

  return (
    <section className={`animeLeft ${styles.graph}`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div
        className={styles.graphItem}
        style={{
          touchAction: 'auto',
        }}
      >
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.85,
              stroke: '#fff',
              strokeWidth: 1,
            },
            labels: {
              fontSize: 24,
              fill: '#333',
            },
          }}
        />
      </div>
      <div className={styles.graphItem} style={{ touchAction: 'auto' }}>
        <VictoryChart>
          <VictoryBar
            alignment="start"
            data={graph}
            style={{
              data: {
                opacity: 0.85,
              },
            }}
          ></VictoryBar>
        </VictoryChart>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
