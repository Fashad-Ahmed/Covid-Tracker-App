import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }}) => {
    
    if (!confirmed) {
        return 'loading!';
    }

    return (
        <div className={styles.container}>
            {/* <Typography gutterBottom variant="h4" component="h2">Global</Typography> */}
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            INFECTED
                        </Typography>
                        <Typography variant="h5">
                            {/* Real Data */}
                            <CountUp
                            start={0}
                            end={ confirmed.value }
                            duration={2.5}
                            seperator=','
                         />
                        </Typography>
                        <Typography variant="body 2">
                            number of Infected cases
                        </Typography>

                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            RECOVERED
                        </Typography>
                        <Typography variant="h5">
                            {/* Real Data */}
                            <CountUp
                            start={0}
                            end={ recovered.value }
                            duration={2.5}
                            seperator=','
                         />
                        </Typography>
                        <Typography variant="body 2">
                            number of Recovered cases
                        </Typography>

                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            DEATHS
                        </Typography>
                        <Typography variant="h5">
                            {/* Real Data */}
                            <CountUp
                            start={0}
                            end={ deaths.value }
                            duration={2.5}
                            seperator=','
                         />
                        </Typography>
                        <Typography variant="body 2">
                            number of Death cases
                        </Typography>

                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;