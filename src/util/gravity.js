import Matter from "matter-js";
import imageMap from './imageMap.json';

var Example = Example || {};

Example.gravity = function() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Composite = Matter.Composite,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Events = Matter.Events,
        Body = Matter.Body,
        Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    var width = Math.max(
            document.documentElement["clientWidth"],
            document.body["scrollWidth"],
            document.documentElement["scrollWidth"],
            document.body["offsetWidth"],
            document.documentElement["offsetWidth"]);

    var height = Math.max(
        document.documentElement["clientHeight"],
        document.body["scrollHeight"],
        document.documentElement["scrollHeight"],
        document.body["offsetHeight"],
        document.documentElement["offsetHeight"])

    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: width,
            height: height,
            wireframes: false,
            background: 'transparent'
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    engine.world.gravity.y = 0;
    [Bodies.rectangle(400, 0, width * 2, 1, { isStatic: true }),
        Bodies.rectangle(400, height, width * 2, 1, { isStatic: true}),
        Bodies.rectangle(width, 300, 1, height, { isStatic: true }),
        Bodies.rectangle(0, 300, 1, height, { isStatic: true })].forEach((e) => {
            e.render.opacity = 0;
            World.add(world, e);
        });
    
    let i = 0;
    var stack = Composites.stack(width/6, 0, 5, 4, 110, 110, function(x, y) {
        if (i >= imageMap.length) {
            i = 0;
        }
        const url = imageMap[i].img;
        const body = Bodies.rectangle(x, y, 150, 150, {
            render: {
                sprite: {
                    texture: require("../static/images/frontpage/" + url),
                    xScale: 0.4,
                    yScale: 0.4
                }
            }
        });
        ++i;
        return body;
    });
    
    World.add(world, stack);

    Events.on(engine, 'beforeUpdate', function(event) {
        const bodies = Composite.allBodies(engine.world);

        var py = 300 + 100 * Math.sin(engine.timing.timestamp * 0.002);
        bodies.forEach((e) => {
            Body.setAngularVelocity(e, Math.random() * (0.01 - 0.005) + 0.005);
        })
    });

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    Events.on(mouseConstraint, "mousedown", (e) => {
        console.log(e);
    })

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: width, y: height }
    });

    // context for MatterTools.Demo
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };
};

export default Example;