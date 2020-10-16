import Tfw from 'tfw'
import React from "react"
import Flexagon from '../../view/flexagon'
import Flexagons from '../../flexagons'
import TriCompatibility from '../../view/tri-compatibility'
import OneInCommon from '../../view/one-in-common'

import "./intro.css"

const Button = Tfw.View.Button

interface IIntroProps {
    className?: string | string[]
}
interface IIntroState { }

export default class Intro extends React.Component<IIntroProps, IIntroState> {
    state = {}

    render() {
        const classes = [
            'page-Intro',
            ...Tfw.Converter.StringArray(this.props.className, [])
        ]
        const flexagons = Flexagons.createTri()
        const flex0 = flexagons[0]

        return (<div className={classes.join(' ')}>
            <h1>Flexagons</h1>
            <p>
                <b>Tri-Flexagons</b> are <a href="https://en.wikipedia.org/wiki/M%C3%B6bius_strip" target="wiki">Möbius strips</a> made of 18 triangles numbered from 0 to 17.
                Here are all the possible configurations:
            </p>
            <div className="flexagons">
                {
                    Flexagons.createTri().map(
                        values => <Flexagon values={values} size="112px" />
                    )
                }
            </div>
            <p>
                Since there are 18 triangles and we only need 6 of them to display an hexagon,
                we can maybe draw 3 images that will be revealed by flipping the strip.
            </p>
            <p>
                Unfortunatly, this won't work because it is impossible to choose
                three configurations that share no triangle.
            </p>
            <p>
                Let's call <b>compatible</b> two configurations with no common
                triangle. It turns out that each configuration is compatible with
                5 and only 5 other configurations.
            </p>
            <TriCompatibility size="95%" />
            <p>
                Lines represent compatibility. If the line is not dashed,
                the configurations are both sides of the same hexagon.
            </p>
            <hr />
            <OneInCommon/>
        </div>)
    }
}
