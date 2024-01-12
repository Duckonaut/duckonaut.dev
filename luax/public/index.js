$(document).ready(function() {
  $('.carousel-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  var canvas_parent = document.getElementById('animated-bg');
  var canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight / 2;
  window.sandbox_canvas = canvas;

  canvas_parent.appendChild(canvas, null, { filtering: 'nearest' });
  var sandbox = new GlslCanvas(canvas);
  // randomize time
  sandbox.timeLoad = Math.random() * 100000;

  window.sandbox = sandbox; // for access

  const shader_code = `
precision highp float;
uniform vec3 color;
uniform sampler2D t;
uniform vec2 tiles;
uniform float u_time;
uniform vec2 u_resolution;
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
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 tile = tile_index(uv, tiles);
    float tilerand = randf(tile.x + tile.y * tiles.x);
    float v = tilerand + randf(floor(tilerand * u_time));
    float diff = fract(tilerand * u_time);
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

  sandbox.load(shader_code);

  sandbox.setUniform('t', "/assets/images/symbols.png");

  sandbox.setUniform('color', 42 / 255, 42 / 255, 80 / 255);

  sandbox.setUniform('symbol_count', 9);

  sandbox.setUniform('tiles', Math.ceil(window.innerWidth / 32), Math.ceil(window.innerHeight / 64));

  addEventListener('resize', function() {
    window.sandbox_canvas.width = window.innerWidth;
    window.sandbox_canvas.height = window.innerHeight / 2;
    window.sandbox.setUniform('tiles', Math.ceil(window.innerWidth / 32), Math.ceil(window.innerHeight / 64));
  });
});

