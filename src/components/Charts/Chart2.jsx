import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

class Chart2 extends Component{

    constructor(props){
        super(props);
        const labelMin = props.labelMin
        const labelMax = props.labelMax
        this.state={
            chartData:{
                labels:['00:0'+parseInt((props.begin / (1000 * 60)) % 60), '00:0'+parseInt((props.end / (1000 * 60)) % 60)],
                datasets:[
                    {
                        label:labelMin[0],
                        data:[
                            props.minA[0],
                            props.minB[0]
                        ],
                        backgroundColor:[
                            props.background[0]
                        ]
                    },
                    {
                        label:labelMin[1],
                        data:[
                            props.minA[1],
                            props.minB[1]
                        ],
                        backgroundColor:[
                            props.background[1]
                        ]
                    },
                    {
                        label:labelMin[2],
                        data:[
                            props.minA[2],
                            props.minB[2]
                        ],
                        backgroundColor:[
                            props.background[2]
                        ]
                    },
                    {
                        label:labelMin[3],
                        data:[
                            props.minA[3],
                            props.minB[3]
                        ],
                        backgroundColor:[
                            props.background[3]
                        ]
                    },
                    {
                        label:labelMax[0],
                        data:[
                            props.maxA[0],
                            props.maxB[0]
                        ],
                        backgroundColor:[
                            props.background[4]
                        ]
                    },
                    {
                        label:labelMax[1],
                        data:[
                            props.maxA[1],
                            props.maxB[1]
                        ],
                        backgroundColor:[
                            props.background[5]
                        ]
                    },
                    {
                        label:labelMax[2],
                        data:[
                            props.maxA[2],
                            props.maxB[2]
                        ],
                        backgroundColor:[
                            props.background[6]
                        ]
                    },
                    {
                        label:labelMax[3],
                        data:[
                            props.maxA[3],
                            props.maxB[3]
                        ],
                        backgroundColor:[
                            props.background[7]
                        ]
                    },
                ]
            }
        }
        console.log(props.lengthMax)
    }

    render(){
        return (
            <div className="chart">
                <Line 
                    data={this.state.chartData}
                    width="100%"
                    height="100%"
                    options={{
                        maintainAspectRatio:false
                    }}
                />
            </div>
        )
    }
}

export default Chart2;