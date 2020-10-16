import Tfw from 'tfw'
import React from "react"

import "./flexagon.css"

const castString = Tfw.Converter.String
const castFloat = Tfw.Converter.Double
const castUnit = Tfw.Converter.Unit

interface IFlexagonProps {
    className?: string
    color?: string
    size?: string
    rotate?: number
    values: [number, number, number, number, number, number]
}
interface IFlexagonState { }

export default class Flexagon extends React.Component<IFlexagonProps, IFlexagonState> {
    state = {}

    render() {
        const classes = [
            'view-Flexagon',
            castString(this.props.className, "")
        ]
        const size = castUnit(this.props.size, "64px")
        const color = castString(this.props.color, "#ffd")
        const [A, B, C, D, E, F] = this.props.values

        return <svg
            viewBox="-110 -110 220 220"
            width={size}
            height={size}
            stroke-linejoin="round"
            style={{
                fontWeight: "bolder",
                fontFamily: "sans-serif"
            }}
        >
            <g transform={`rotate(${castFloat(this.props.rotate, 0) * 60})`}>
                <g fill={color} stroke="#000" stroke-width="4">
                    <path stroke="#000" d="M-100,0 L-50,87,-50,87,0,0 Z" />
                    <path fill="#0003" stroke="none" d="M-100,0 L-50,87,-50,87,0,0 Z" />
                    <path stroke="#333" d="M100,0 L50,87,-50,87,0,0 Z" />
                    <path fill="#0002" stroke="none" d="M100,0 L50,87,-50,87,0,0 Z" />
                    <path stroke="#666" d="M-100,0 L-50,-87,50,-87,100,0 Z" />
                </g>
                <path stroke="#0007" stroke-width="1" fill="none"
                    d="M-50,-87L50,87 M0,0L50,-87" />
                <g stroke="none" fill="#000b" text-anchor="middle" dominant-baseline="middle" font-size="30">
                    <g transform="translate(-50,30) rotate(60)">
                        <text>{A}</text>
                        <path d="M-15,15h30" stroke-width="1" stroke="#000" />
                    </g>
                    <g transform="translate(0,55) rotate(120)">
                        <text>{B}</text>
                        <path d="M-15,15h30" stroke-width="1" stroke="#000" />
                    </g>
                    <g transform="translate(50,30) rotate(-60)">
                        <text>{C}</text>
                        <path d="M-15,15h30" stroke-width="1" stroke="#000" />
                    </g>
                    <g transform="translate(50,-30)">
                        <text>{D}</text>
                        <path d="M-15,15h30" stroke-width="1" stroke="#000" />
                    </g>
                    <g transform="translate(0,-55) rotate(180)">
                        <text>{E}</text>
                        <path d="M-15,15h30" stroke-width="1" stroke="#000" />
                    </g>
                    <g transform="translate(-50,-30)">
                        <text>{F}</text>
                        <path d="M-15,15h30" stroke-width="1" stroke="#000" />
                    </g>
                </g>
            </g>
        </svg>
    }
}
