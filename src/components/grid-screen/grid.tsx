import {Container, Group} from "@mantine/core";

import "./grid-screen.scss"
import {useEffect, useState} from "react";


interface Cell {
    isFront: boolean,
    value: any,
    x: number, // row
    y: number  // col
}

export default function GridTrialEffect() {

    const [grid, setGrid] = useState<any[]>([])

    const width_size = 60;
    const height_size = 72;

    let ROW_COUNT = 6;
    let COL_COUNT = 6;

    useEffect(() => {
        setInterval(() => {
            initGrid()
        }, 1000)
    }, [])

    const initGrid = () => {
        let grid: Cell[][] = []
        let val = 1;
        for (let i = 0; i < ROW_COUNT; i++) {
            let row = []
            for (let j = 0; j < COL_COUNT; j++) {
                row.push({isFront: Math.random() >= 0.5, value: val, x: i, y: j})
                val++
            }
            grid.push(row)
        }

        setGrid(grid)
    }

    return (
        <Container style={{height: `${height_size}vh`}} p={0} m={0} fluid>
            {
                grid.map((row: Cell[], row_index: number) =>
                    <Group
                        m={0}
                        gap={0}
                        style={{width: '100%'}}
                        p={0}
                        key={"ROW_COUNT-" + row_index}>
                        {row.map((col: Cell, col_index: number) =>
                            <Group
                                justify={'center'}
                                className={"cell"}
                                style={{
                                    backgroundImage:  col.isFront ? `url('/grid/row-${row_index + 1}-column-${ col_index + 1}.jpg')` : "",
                                    backgroundSize: '100% 100%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundAttachment: 'fixed',
                                    color: col.isFront ? 'white' : 'black',
                                    width: `${width_size / COL_COUNT}vw`,
                                    height: `${height_size / ROW_COUNT}vh`,
                                }}
                                key={'cell-' + row_index + '-' + col_index}>{col.value}
                            </Group>
                        )}
                    </Group>)
            }
        </Container>
    )
}