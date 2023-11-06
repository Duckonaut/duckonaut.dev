import { Shaders, Node, GLSL } from "gl-react";
import { Surface } from "gl-react-dom";
import React, { FunctionComponent } from "preact/compat";
import { PropsWithChildren } from "preact/compat";

const shaders = Shaders.create({
    letters: {
        frag: GLSL`
precision highp float;
varying vec2 uv;
uniform vec3 color;
uniform sampler2D t;
uniform float time;
uniform vec2 tiles;
uniform float symbol_count;

vec2 map_to_symbol_uv(vec2 image_coord, float symbol_index) {
    float symbol_width = 1.0 / symbol_count;
    float symbol_height = 1.0;
    float symbol_x = symbol_index * symbol_width;
    return vec2(symbol_x + image_coord.x * symbol_width, image_coord.y * symbol_height);
}

vec2 tile_index(vec2 p, vec2 tiles) {
    return vec2(floor(p.x * tiles.x), floor(p.y * tiles.y));
}

vec2 tilefy (vec2 p, vec2 tiles) {
    return vec2(fract(p.x * tiles.x), fract(p.y * tiles.y));
}

float randf(float n) {
    return fract(sin(n) * 43758.5453123);
}

void main() {
    vec2 tile = tile_index(uv, tiles);
    float tilerand = randf(tile.x + tile.y * tiles.x);
    float v = tilerand + randf(floor(tilerand * time));
    float diff = fract(tilerand * time);
    float s = floor(v * 9.0);
    vec2 tp = tilefy(uv, tiles);
    vec2 tp_center = vec2(0.5, 0.5);
    float d = distance(tp, tp_center);
    float scale = min(sin(diff * 3.1415) * 1.2, 1.0);
    tp = tp_center + (tp - tp_center) / scale;
    if (tp.x < 0.0 || tp.x > 1.0 || tp.y < 0.0 || tp.y > 1.0) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        return;
    }
    vec2 p = map_to_symbol_uv(tp, mod(s, symbol_count));
    vec4 c = texture2D(t, p);
    c.rgb *= color;
    c.a *= uv.y * 4.0;
    gl_FragColor = vec4(c.rgb * c.a, c.a);
}
`
    }
});

const fps = 60;

const AnimatedBgInternal = ({ tick }: { tick: number }) => {
    const t = "/assets/images/symbols.png";

    return (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -10 }}>
            <Surface width={window.innerWidth} height={window.innerHeight / 2}>
                <Node
                    shader={shaders.letters}
                    uniforms={{
                        t,
                        color: [42 / 255, 42 / 255, 80 / 255],
                        tiles: [Math.ceil(window.innerWidth / 32), Math.ceil(window.innerHeight / 64)],
                        symbol_count: 9,
                        time: tick / 60
                    }}
                    uniformsOptions={{
                        t: { interpolation: "nearest" }
                    }} />
            </Surface>
        </div>
    );
}

// a higher order component that provides a tick prop
// that updates every 1/refreshRate seconds
//
// accepts a JSX component as an argument
const timeLoop = (
    C: FunctionComponent<PropsWithChildren<{ tick: number }>>,
    { refreshRate }: { refreshRate: number }
) => {
    return class TimeLoop extends React.Component {
        interval: any;
        state = { tick: 0 };

        componentDidMount() {
            this.interval = setInterval(() => {
                this.setState({ tick: this.state.tick + 1 });
            }, 1000 / refreshRate);
        }

        componentWillUnmount() {
            clearInterval(this.interval);
        }

        render() {
            return <C {...this.props} tick={this.state.tick} />;
        }
    };
}

const checkWebGL = () => {
    try {
        const canvas = document.createElement("canvas");
        return !!(
            window.WebGLRenderingContext &&
            (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
    } catch (e) {
        return false;
    }
}

export const AnimatedBg = checkWebGL() ? timeLoop(AnimatedBgInternal, { refreshRate: fps }) : () => <div />;
