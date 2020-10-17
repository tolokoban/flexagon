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
            <h1>Tri-Hexa-Flexagons with construction defect</h1>
            <p>
                <b><a href="https://en.wikipedia.org/wiki/Flexagon#Trihexaflexagon" target="wiki">Tri-Hexa-Flexagons</a></b> are&nbsp;
                <a href="https://en.wikipedia.org/wiki/M%C3%B6bius_strip" target="wiki">Möbius strips</a> made of 18 triangles.
                They have 3 distinct faces.
            </p>
            <p>
                But if you don't construct them right, you end up with this:
            </p>
            <div className="flexagons">
                {
                    Flexagons.createTri().map(
                        values => <Flexagon values={values} size="4rem" />
                    )
                }
            </div>
            <p>
                A <em>good</em> flexagon will be axial-symetrical with a&nbsp;
                <code>2-2-2</code> pattern.
                Whereas a <em>wrong</em> flexagon has a <code>1-2-3</code> pattern.
                The result is that it is now impossible to choose three configurations
                that share no triangle.
            </p>
            <p>
                Let's call <b>compatible</b> two configurations with no common
                triangle. It turns out that each configuration is compatible with
                5 and only 5 other configurations.
            </p>
            <TriCompatibility size="100vmin" />
            <p>
                Lines represent compatibility. If the line is not dashed,
                the configurations are both sides of the same hexagon.
            </p>
            <hr />
            <p>
                It seems that the best we can do is to find configuration
                with the smallest possible number of common triangles.
            </p>
            <OneInCommon />
            <hr />
            <p>We have two winners:</p>
            <div>
                <Flexagon values={[0, 7, 6, 13, 12, 11]} color="#fdc" size="8rem" />
                <Flexagon
                    values={[16, 5, 4, 11, 10, 9]}
                    color={["#dfc", "#dfc", "#dfc", "#fdc", "#dfc", "#dfc"]}
                    size="8rem" />
                <Flexagon values={[8, 15, 14, 3, 2, 1]} color="#cdf" size="8rem" />
            </div>
            <div>
                <Flexagon values={[0, 7, 6, 13, 12, 11]} color="#fdc" size="8rem" />
                <Flexagon
                    values={[2, 9, 8, 15, 14, 13]}
                    color={["#dfc", "#dfc", "#dfc", "#dfc", "#dfc", "#fdc"]}
                    size="8rem" />
                <Flexagon values={[10, 17, 15, 5, 4, 3]} color="#cdf" size="8rem" />
            </div>
        </div>)
    }
}
