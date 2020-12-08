import React from 'react';
import './InfoBox.css';
import { Card, CardContent, Typography } from '@material-ui/core';


const InfoBox = ({ title, cases, total, active, isCases, isDeaths, ...props }) => {
    return (
        <div onClick={props.onClick} className='infobox'>
            <Card className={`infobox__card ${active && 'infobox--selected'} ${isCases && 'infobox--cases'} ${isDeaths && 'infobox--death'}`}>
                <CardContent>
                    <Typography color='textSecondary' className='infobox__title'>
                        {title}
                    </Typography>

                    <h2 className={`infobox__cases ${isCases && "infobox__cases--isCases"} ${isDeaths && "infobox__cases--isDeaths"}`}>{cases}</h2>

                    <Typography color='textSecondary' className='infobox__total'>
                        {total} Total
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default InfoBox;
